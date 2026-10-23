# n_cst_oauth2

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

OAuth 2.0 token service. N_cst_oauth2 gets an access token from an identity provider, such as Microsoft Entra ID or Google, for an API that accepts OAuth 2.0, for example to send mail with n_smtpclient. It supports three flows:

| Flow | Constant | How the user signs in |
| --- | --- | --- |
| Authorization code with PKCE | AUTHORIZATIONCODE (`code`, the default) | In the default web browser, with the identity provider's own sign-in page, so multi-factor authentication and single sign-on work. The redirect comes back to this computer (n_cst_redirectlistener, RFC 8252) |
| Device code | DEVICECODE (`device`) | In a web browser on this or another device, with a code the application shows (RFC 8628). For computers without a browser |
| Client credentials | CLIENTCREDENTIALS (`client_credentials`) | No user: the application signs in with its own secret |

It keeps the token, and the refresh token when the identity provider sends one, so the user signs in only once: of_Authorize uses the token it has while it is valid, then a new one for the refresh token, and only then asks the user to sign in.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_oauth2 → n_cst_oauth2`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

1. Set the identity provider: of_SetProvider for Microsoft Entra ID or Google, or of_SetEndpoints for another provider.
2. Set the application's registration with of_SetClient, and the scopes with of_SetScope.
3. Optionally, choose the flow with of_SetFlow, and set a login hint, a timeout, or other parameters of the authorization request.
4. Before each use of the token, call of_Authorize, then use of_GetAccessToken.

The application stays responsive while it waits for the user to sign in; call of_Cancel, for example from a Cancel button, to stop waiting.

**Registering the application** Register it with the identity provider as a public client (one without a client secret), since a desktop application can't keep a secret:

- **Microsoft Entra ID:** add the **Mobile and desktop applications** platform with the redirect URI `http://127.0.0.1`; Entra ignores the port. For the device code flow, also set **Allow public client flows** to Yes. Request the `offline_access` scope to get a refresh token. The client credentials flow needs a client secret, the scope `<resource>/.default`, and application permissions.
- **Google:** create an OAuth client of the **Desktop app** type, which accepts any `http://127.0.0.1` port. Google wants its client secret in the token requests even then (it isn't secret in a desktop application). of_SetProvider(GOOGLE) asks for a refresh token (`access_type=offline`). Google's device code flow allows only a few scopes.
- **Other providers:** allow the redirect URI `http://127.0.0.1:<any port>/callback` (for example, in Authentik, the Regex `http://127\.0\.0\.1:\d+/callback`).

Don't put a client secret in the source: read it from the registry or from a file that isn't distributed with the application. A refresh token is a password too: if you keep it between sessions (of_GetRefreshToken, of_SetRefreshToken), keep it encrypted for the user, for example with CrypterObject.

**Language** The device code message is translated by the language service when it is enabled (see n_cst_language).

**Examples**

This example gets a token for sending mail through Microsoft 365 with the authorization code flow:

```
n_cst_oauth2 lnv_oauth2
integer li_rc

lnv_oauth2 = CREATE n_cst_oauth2
lnv_oauth2.of_SetProvider(lnv_oauth2.MICROSOFT, "contoso.onmicrosoft.com")   // "microsoft"
lnv_oauth2.of_SetClient("my-client-id")
lnv_oauth2.of_SetScope("https://outlook.office.com/SMTP.Send offline_access")
lnv_oauth2.of_SetLoginHint("user@contoso.com")

li_rc = lnv_oauth2.of_Authorize()
IF li_rc = 1 THEN
   // use lnv_oauth2.of_GetAccessToken()
ELSEIF li_rc < 0 THEN
   MessageBox("Sign in", lnv_oauth2.of_GetError())
END IF
```

The SMTP demo in the 2025-Solution and 2025-Workspace repositories uses n_cst_oauth2 with n_smtpclient, with all three flows.

**See also**

[n_smtpclient](../08-standard-class-user-objects/n_smtpclient.md), [n_cst_redirectlistener](n_cst_redirectlistener.md), [w_openid_logon](../02-window-objects/w_openid_logon.md)

## Instance variables

N_cst_oauth2 includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| AUTHORIZATIONCODE | Constant. The authorization code flow with PKCE: `code` | String | Public |
| CLIENTCREDENTIALS | Constant. The client credentials flow: `client_credentials` | String | Public |
| DEVICECODE | Constant. The device code flow: `device` | String | Public |
| GOOGLE | Constant. Google, for of_SetProvider: `google` | String | Public |
| MICROSOFT | Constant. Microsoft Entra ID, for of_SetProvider: `microsoft` | String | Public |
| ib_cancel | TRUE when of_Cancel was called | Boolean | Protected |
| idt_expires | When the access token expires (local time) | DateTime | Protected |
| il_margin | A token that expires within this many seconds counts as expired (the default is 60) | Long | Protected |
| il_timeout | How long to wait for the user to sign in, in seconds (the default is 300) | Long | Protected |
| inv_listener | Redirect listener of the authorization code flow | n_cst_redirectlistener | Protected |
| is_accesstoken, is_refreshtoken, is_idtoken, is_tokentype | The tokens | String | Protected |
| is_authorizationendpoint, is_tokenendpoint, is_deviceendpoint | The identity provider's endpoints | String | Protected |
| is_clientid, is_clientsecret | The application's registration | String | Protected |
| is_error, is_errorcode | The last error: its description and its code | String | Protected |
| is_flow | The flow of_Authorize uses (the default is `code`) | String | Protected |
| is_loginhint | The login hint | String | Protected |
| is_parameters | Other parameters of the authorization request | String | Protected |
| is_provider | MICROSOFT, GOOGLE, or empty | String | Protected |
| is_redirectpath | Path of the redirect URI (the default is `/callback`) | String | Protected |
| is_response | The identity provider's last response | String | Protected |
| is_scope | The scopes to request | String | Protected |
| is_usercode, is_verificationuri | Device code flow: the code the user enters, and where | String | Protected |

## Events

N_cst_oauth2 includes these events:

### pfc_DeviceCode

**Description**

Device code flow: tells the user to sign in. By default, the code is copied to the clipboard, the page opens in the web browser (pfc_OpenBrowser), and a message tells the user what to do; Cancel cancels the sign-in.

**Syntax**

```
instancename.EVENT pfc_DeviceCode ( usercode, verificationuri, message )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *usercode* | String. The code the user enters |
| *verificationuri* | String. The page where the user enters it |
| *message* | String. The identity provider's instructions, if it sent any (Microsoft Entra ID does, in the language of the request) |

**Return value**

Long. Return 1 to wait for the user to sign in, or 0 to cancel.

**Usage**

Override this event to show the code in a window of the application, or on another device.

### pfc_OpenBrowser

**Description**

Opens a page in the user's default web browser: the authorization request, or the device code flow's verification page.

**Syntax**

```
instancename.EVENT pfc_OpenBrowser ( url )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *url* | String. The page to open |

**Return value**

Long. Returns 1 if the page was opened and -1 if it wasn't.

**Usage**

Override this event to show the page somewhere else, for example in a particular browser.

## Functions

N_cst_oauth2 includes these functions:

### of_AddSeconds

**Description**

Adds seconds to a date and time.

**Access**

Protected

**Syntax**

```
instancename.of_AddSeconds ( datetime, seconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *datetime* | DateTime. A date and time |
| *seconds* | Long. Seconds to add (or subtract) |

**Return value**

DateTime. The date and time that many seconds later.

### of_AuthorizationCode

**Description**

Gets a token with the OAuth 2.0 authorization code flow with PKCE (RFC 7636): the user signs in in the web browser (pfc_OpenBrowser), and the redirect comes back to this computer (n_cst_redirectlistener, RFC 8252).

**Access**

Public

**Syntax**

```
instancename.of_AuthorizationCode ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

Integer. See of_Authorize.

**Usage**

Needs the client ID and the authorization and token endpoints. The application stays responsive while it waits; of_Cancel stops the wait. Usually you call of_Authorize, which uses this flow when it needs to.

### of_AuthorizationURL

**Description**

Builds the authorization request of the authorization code flow.

**Access**

Protected

**Syntax**

```
instancename.of_AuthorizationURL ( redirecturi, state, challenge )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *redirecturi* | String. The redirect URI, from n_cst_redirectlistener |
| *state* | String. A random value the response must return |
| *challenge* | String. The PKCE code challenge |

**Return value**

String. The URL of the authorization request, to open in the browser.

### of_Authorize

**Description**

Gets a valid access token, asking the user to sign in only when needed: the token it has, if it hasn't expired; or else a new one for the refresh token; or else one from the flow.

**Access**

Public

**Syntax**

```
instancename.of_Authorize ( { flow } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *flow* (optional) | String. AUTHORIZATIONCODE, DEVICECODE, or CLIENTCREDENTIALS. The default is the flow set with of_SetFlow |

**Return value**

Integer. Returns:

| Value | Meaning |
| --- | --- |
| 1 | There is a valid access token (of_GetAccessToken) |
| 0 | The user cancelled |
| -1 | The identity provider refused (of_GetError) |
| -2 | The identity provider can't be reached |
| -3 | The browser can't be opened, or the redirect can't be received |
| -4 | The user didn't sign in in time (of_SetTimeout) |
| -5 | The identity provider's response isn't valid |
| -6 | A setting the flow needs is missing (of_GetError says which), or the flow is unknown |

**Usage**

Call it before each use of the token.

### of_Base64Url

**Description**

Encodes bytes in base64url without padding (RFC 4648, section 5).

**Access**

Public

**Syntax**

```
instancename.of_Base64Url ( data )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *data* | Blob. The bytes |

**Return value**

String. The encoded bytes.

### of_Cancel

**Description**

Stops waiting for the user to sign in, for example from a Cancel button: of_AuthorizationCode or of_DeviceCode returns 0.

**Access**

Public

**Syntax**

```
instancename.of_Cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

None.

### of_ClientCredentials

**Description**

Gets a token with the OAuth 2.0 client credentials grant: the application signs in as itself, with its client secret; no user is involved.

**Access**

Public

**Syntax**

```
instancename.of_ClientCredentials ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

Integer. See of_Authorize.

**Usage**

Needs the client ID, the client secret, and the token endpoint. For Microsoft Entra ID the scope is `<resource>/.default`, and the application needs application permissions (for SMTP, also an Exchange Online service principal with access to the mailbox).

### of_CodeChallenge

**Description**

Computes the PKCE code challenge of a code verifier, with the S256 method (RFC 7636, section 4.2).

**Access**

Public

**Syntax**

```
instancename.of_CodeChallenge ( verifier )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *verifier* | String. The code verifier |

**Return value**

String. The base64url-encoded SHA-256 hash of the verifier.

### of_DeviceCode

**Description**

Gets a token with the OAuth 2.0 device authorization grant (RFC 8628): the identity provider gives a code, pfc_DeviceCode tells the user to enter it on the provider's page, and the token endpoint is polled until the user has signed in.

**Access**

Public

**Syntax**

```
instancename.of_DeviceCode ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

Integer. See of_Authorize.

**Usage**

Needs the client ID and the device authorization and token endpoints. The application stays responsive while it waits; of_Cancel stops the wait.

### of_GetAccessToken

**Description**

Returns the access token.

**Access**

Public

**Syntax**

```
instancename.of_GetAccessToken ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The access token, or an empty string if there is none. See of_IsExpired.

### of_GetClientID

**Description**

Returns the client ID.

**Access**

Public

**Syntax**

```
instancename.of_GetClientID ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The client ID.

### of_GetError

**Description**

Returns why the last request failed.

**Access**

Public

**Syntax**

```
instancename.of_GetError ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The identity provider's description of the error, or else its error code, or an empty string.

### of_GetErrorCode

**Description**

Returns the identity provider's error code (RFC 6749, section 5.2), for example `invalid_grant`.

**Access**

Public

**Syntax**

```
instancename.of_GetErrorCode ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The error code, or an empty string.

### of_GetExpires

**Description**

Returns when the access token expires.

**Access**

Public

**Syntax**

```
instancename.of_GetExpires ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

DateTime. When the access token expires (local time), or null if it isn't known.

### of_GetFlow

**Description**

Returns the flow of_Authorize uses.

**Access**

Public

**Syntax**

```
instancename.of_GetFlow ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. AUTHORIZATIONCODE, DEVICECODE, or CLIENTCREDENTIALS.

### of_GetIDToken

**Description**

Returns the ID token, which the identity provider sends for the `openid` scope.

**Access**

Public

**Syntax**

```
instancename.of_GetIDToken ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The ID token, or an empty string.

### of_GetLoginHint

**Description**

Returns the login hint.

**Access**

Public

**Syntax**

```
instancename.of_GetLoginHint ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The login hint.

### of_GetProvider

**Description**

Returns the identity provider.

**Access**

Public

**Syntax**

```
instancename.of_GetProvider ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. MICROSOFT, GOOGLE, or an empty string when the endpoints were set with of_SetEndpoints.

### of_GetRefreshToken

**Description**

Returns the refresh token.

**Access**

Public

**Syntax**

```
instancename.of_GetRefreshToken ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The refresh token, or an empty string if the identity provider didn't send one. Microsoft Entra ID sends one for the `offline_access` scope, and Google for `access_type=offline`.

### of_GetResponse

**Description**

Returns the identity provider's last response, for diagnostics.

**Access**

Public

**Syntax**

```
instancename.of_GetResponse ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The last response. It can contain tokens, so don't log it where others can read it.

### of_GetScope

**Description**

Returns the scopes to request.

**Access**

Public

**Syntax**

```
instancename.of_GetScope ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The scopes.

### of_GetUserCode

**Description**

Device code flow: returns the code the user enters.

**Access**

Public

**Syntax**

```
instancename.of_GetUserCode ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The code.

### of_GetVerificationURI

**Description**

Device code flow: returns the page where the user enters the code.

**Access**

Public

**Syntax**

```
instancename.of_GetVerificationURI ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

String. The page's URL.

### of_IsExpired

**Description**

Reports whether a new access token is needed.

**Access**

Public

**Syntax**

```
instancename.of_IsExpired ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

Boolean. Returns TRUE if there is no access token or it expires within a minute, and FALSE if it is valid (or the identity provider didn't say when it expires).

### of_JSONNumber

**Description**

Returns a top-level number from a JSON object.

**Access**

Public

**Syntax**

```
instancename.of_JSONNumber ( json, key )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *json* | String. A JSON object |
| *key* | String. Name of a top-level number, or of a string that contains a number |

**Return value**

Long. The value, or 0 if it isn't there.

### of_JSONString

**Description**

Returns a top-level string value from a JSON object.

**Access**

Public

**Syntax**

```
instancename.of_JSONString ( json, key )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *json* | String. A JSON object |
| *key* | String. Name of a top-level string value |

**Return value**

String. The value, or an empty string if it isn't there.

### of_NotConfigured

**Description**

Records that a flow can't run because a setting is missing.

**Access**

Protected

**Syntax**

```
instancename.of_NotConfigured ( what )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *what* | String. The missing setting |

**Return value**

Integer. Returns -6; of_GetError says which setting is missing.

### of_ParseToken

**Description**

Keeps the tokens of a successful token response (RFC 6749, section 5.1), and when the access token expires.

**Access**

Protected

**Syntax**

```
instancename.of_ParseToken ( json )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *json* | String. The token response |

**Return value**

Integer. Returns 1 if the response has an access token and -5 if it doesn't.

**Usage**

A refresh response without a refresh token keeps the refresh token there was.

### of_Pause

**Description**

Waits without blocking the application: PowerBuilder processes events every 50 milliseconds, so a Cancel button can call of_Cancel.

**Access**

Protected

**Syntax**

```
instancename.of_Pause ( milliseconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *milliseconds* | Long. How long to wait |

**Return value**

Boolean. Returns TRUE after the wait, and FALSE if of_Cancel was called.

### of_Post

**Description**

Posts a form to the identity provider, with HTTPClient.

**Access**

Protected

**Syntax**

```
instancename.of_Post ( url, body, status, response )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *url* | String. The endpoint |
| *body* | String. The form, URL-encoded |
| *status* | Long, passed by reference. The HTTP status code of the response |
| *response* | String, passed by reference. The response body |

**Return value**

Integer. Returns 1 if there is a response and -1 if the endpoint can't be reached.

### of_RandomString

**Description**

Returns random bytes from the system's cryptographic random number generator (BCryptGenRandom), encoded in base64url, for the PKCE code verifier and the state.

**Access**

Public

**Syntax**

```
instancename.of_RandomString ( bytes )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *bytes* | Integer. Number of random bytes |

**Return value**

String. The bytes in base64url (43 characters for 32 bytes), or an empty string if the random number generator fails.

### of_Refresh

**Description**

Gets a new access token for the refresh token, without the user.

**Access**

Public

**Syntax**

```
instancename.of_Refresh ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

Integer. See of_Authorize; -6 if there is no refresh token.

**Usage**

If the identity provider refuses the refresh token (it expired, or was revoked), the refresh token is cleared, so that of_Authorize asks the user to sign in.

### of_Reset

**Description**

Forgets the tokens. This signs the user out of the application, not out of the identity provider.

**Access**

Public

**Syntax**

```
instancename.of_Reset ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |

**Return value**

None.

### of_SetClient

**Description**

Sets the application's registration with the identity provider.

**Access**

Public

**Syntax**

```
instancename.of_SetClient ( clientid {, clientsecret } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *clientid* | String. The application's client ID |
| *clientsecret* (optional) | String. Its client secret, or an empty string for a public client |

**Return value**

None.

**Usage**

The client credentials flow needs the secret. When there is one, it goes in every token request. Don't put a secret in the source: read it from the registry or from a file that isn't distributed with the application.

### of_SetEndpoints

**Description**

Sets the identity provider's endpoints, for a provider of_SetProvider doesn't know.

**Access**

Public

**Syntax**

```
instancename.of_SetEndpoints ( authorization, token, deviceauthorization )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *authorization* | String. The authorization endpoint (authorization code flow) |
| *token* | String. The token endpoint (all flows) |
| *deviceauthorization* | String. The device authorization endpoint (device code flow) |

**Return value**

None.

**Usage**

Pass an empty string for the endpoints the flows you use don't need. Most providers publish their endpoints in their OpenID configuration (`.well-known/openid-configuration`).

### of_SetError

**Description**

Keeps the error of an error response (RFC 6749, section 5.2).

**Access**

Protected

**Syntax**

```
instancename.of_SetError ( json, status )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *json* | String. The error response |
| *status* | Long. Its HTTP status code |

**Return value**

None.

### of_SetFlow

**Description**

Sets the flow of_Authorize uses to get a token when there is no valid one and none can be refreshed.

**Access**

Public

**Syntax**

```
instancename.of_SetFlow ( flow )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *flow* | String. AUTHORIZATIONCODE (the default), DEVICECODE, or CLIENTCREDENTIALS |

**Return value**

Integer. Returns 1 if the flow was set and -1 if it is unknown.

### of_SetLoginHint

**Description**

Authorization code flow: sets the account the sign-in page starts with.

**Access**

Public

**Syntax**

```
instancename.of_SetLoginHint ( loginhint )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *loginhint* | String. The user's account (for example an email address), or an empty string |

**Return value**

None.

### of_SetParameters

**Description**

Authorization code flow: sets other parameters of the authorization request, which only some identity providers understand.

**Access**

Public

**Syntax**

```
instancename.of_SetParameters ( parameters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *parameters* | String. The parameters, URL-encoded, for example `prompt=select_account` or `access_type=offline&prompt=consent` |

**Return value**

None.

**Usage**

of_SetProvider(GOOGLE) sets `access_type=offline` when there are no parameters.

### of_SetProvider

**Description**

Sets the authorization, token, and device authorization endpoints of a well-known identity provider.

**Access**

Public

**Syntax**

```
instancename.of_SetProvider ( provider {, tenant } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *provider* | String. MICROSOFT or GOOGLE |
| *tenant* (optional) | String. Microsoft Entra ID: the tenant (its ID or domain, or `common`, `organizations`, or `consumers`). The default, or an empty string, is `common` (work, school, and personal accounts). Not used for Google |

**Return value**

Integer. Returns 1 if the endpoints were set and -1 if the provider is unknown.

**Usage**

For other providers, use of_SetEndpoints. See "Registering the application" above.

### of_SetRedirectPath

**Description**

Authorization code flow: sets the path of the redirect URI, which is `http://127.0.0.1:port` followed by the path, with a port Windows chooses.

**Access**

Public

**Syntax**

```
instancename.of_SetRedirectPath ( path )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *path* | String. The path, for example `/callback` (the default) |

**Return value**

Integer. Returns 1 if it was set and -1 if it doesn't start with `/`.

### of_SetRefreshToken

**Description**

Sets a refresh token from an earlier session (of_GetRefreshToken), so that of_Authorize can get a new access token without asking the user to sign in again. The access token is cleared.

**Access**

Public

**Syntax**

```
instancename.of_SetRefreshToken ( refreshtoken )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *refreshtoken* | String. The refresh token |

**Return value**

None.

**Usage**

A refresh token is a password: if you keep it, keep it encrypted for the user, for example with CrypterObject.

### of_SetScope

**Description**

Sets the scopes to request.

**Access**

Public

**Syntax**

```
instancename.of_SetScope ( scope )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *scope* | String. The scopes, separated by spaces, for example `https://outlook.office.com/SMTP.Send offline_access` |

**Return value**

None.

### of_SetTimeout

**Description**

Sets how long to wait for the user to sign in.

**Access**

Public

**Syntax**

```
instancename.of_SetTimeout ( seconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *seconds* | Long. The time, in seconds (the default is 300) |

**Return value**

None.

### of_Text

**Description**

Returns a text from the language service, if it is enabled, or else the English text.

**Access**

Protected

**Syntax**

```
instancename.of_Text ( id, default, parms[ ] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *id* | String. ID of the text in the language file |
| *default* | String. The English text, with placeholders (`%s`) for the values |
| *parms[ ]* | String array. The values |

**Return value**

String. The text, with the values.

### of_TokenRequest

**Description**

Sends a request to the token endpoint, with the client secret when there is one.

**Access**

Protected

**Syntax**

```
instancename.of_TokenRequest ( body )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *body* | String. The token request's form, without the client secret |

**Return value**

Integer. Returns 1 if the tokens were received, -1 if the identity provider refused (of_GetErrorCode, of_GetError), -2 if the token endpoint can't be reached, and -5 if the response has no access token.

### of_UrlEncode

**Description**

URL-encodes a value (UTF-8), for a query string or an `application/x-www-form-urlencoded` body.

**Access**

Public

**Syntax**

```
instancename.of_UrlEncode ( value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_oauth2 |
| *value* | String. The value to encode |

**Return value**

String. The encoded value.
