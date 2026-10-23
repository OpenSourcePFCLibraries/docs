# w_openid_logon

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

OpenID Connect logon window. Signs the user in with an OpenID Connect identity provider, either in the user's web browser (the OAuth 2.0 authorization code flow with PKCE) or with a user ID and password typed in the window (the OAuth 2.0 password grant), and reads the groups the user belongs to from the provider's userinfo endpoint or, if that doesn't return them, from the ID token.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_openid_logon → w_openid_logon`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

Open this window with the n_cst_appmanager of_OpenIDLogonDlg function, which passes it an n_cst_openidattrib object with the identity provider settings and returns the results in the same object. The window works the same way as w_logon: settings and results are passed in an attribute object, and messages are displayed with of_MessageBox, so the PFC message service can replace them.

The window uses the sign-in flow named in the n_cst_openidattrib is_flow variable (the `Flow` INI key):

- **`password`** (the default): the user types a user ID and password in the window, and the window requests a token with the OAuth 2.0 password grant. The password is never stored in the attribute object. The password grant has been deprecated in OAuth 2.1 and doesn't support multi-factor authentication.
- **`code`**: the user signs in in the web browser, with the identity provider's own sign-in page, so multi-factor authentication and single sign-on work. The window has no user ID and password fields, and its button reads **Sign In**. See "The authorization code flow" below.

If the identity provider refuses the logon, the window displays a message and stays open so the user can try again.

**The authorization code flow** When the user clicks Sign In, the window:

1. Starts an n_cst_redirectlistener, which listens for the redirect on the loopback interface, at `http://127.0.0.1:port/callback` with a free port (RFC 8252). It listens before the browser opens, so the redirect can't arrive too early.
2. Makes a PKCE code verifier and its S256 code challenge (RFC 7636), a state, and a nonce, from the system's cryptographic random number generator.
3. Opens the authorization request in the default web browser, and shows "Waiting for you to sign in in your web browser...". The window stays responsive: Cancel, or closing the window, stops waiting.
4. When the identity provider redirects the browser back, the browser shows a "Sign-in complete" page, and the window checks that the redirect has the state it sent.
5. Exchanges the authorization code, with the code verifier, for the tokens at the token endpoint (with OAuthClient or HTTPClient, as for the password grant), and checks that the ID token has the nonce it sent.
6. Reads the user's claims and groups as for the password grant. The user ID it returns is the `preferred_username` claim, or else `email`, or else `sub`.

If the user doesn't sign in within the time in the n_cst_openidattrib il_timeout variable (300 seconds by default), the window says so, and the user can click Sign In again.

The identity provider must allow the redirect URI for any port on 127.0.0.1, and the application must be registered as a public client (one with no client secret, as a desktop application can't keep a secret):

- **Authentik:** add the redirect URI in **Regex** mode: `http://127\.0\.0\.1:\d+/callback`.
- **Microsoft Entra ID:** add the redirect URI `http://127.0.0.1/callback` under **Mobile and desktop applications**. Entra ignores the port for loopback addresses.

To use another path than `/callback`, set the n_cst_openidattrib is_redirectpath variable (the `RedirectPath` INI key).

When the n_cst_openidattrib ib_showresponses variable is TRUE, the window shows the identity provider's responses and lets the user choose the PowerBuilder object used for the token request (OAuthClient or HTTPClient). This is meant for demonstrations.

**Where the groups come from** The groups are read from the claim named in the n_cst_openidattrib is_groupsclaim variable (`groups` by default). The window reads it from the userinfo response. Some identity providers, such as Microsoft Entra ID, don't return groups or roles from the userinfo endpoint, only in the ID token. When the userinfo response has no groups, the window reads the claim from the ID token that the token endpoint returned with the access token (the `openid` scope must be requested). The ID token is used only if its audience (`aud`) is the application's client ID.

The ID token's signature isn't checked: the token comes directly from the token endpoint, so the connection to the identity provider authenticates it, as OpenID Connect Core 1.0 (section 3.1.3.7) allows. Use HTTPS for the token endpoint.

**Language** The window's texts, including the messages and the page the browser shows, are translated by the language service when it is enabled (see n_cst_language).

**See also**

[n_cst_openidattrib](../05-global-structures-and-structure-objects/n_cst_openidattrib.md), n_cst_appmanager of_OpenIDLogonDlg, [n_cst_redirectlistener](../09-custom-class-user-objects/n_cst_redirectlistener.md), [w_logon](w_logon.md)

## Instance variables

W_openid_logon includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_cancelled | TRUE if the user cancelled the wait for the browser (authorization code flow) | Boolean | Protected |
| ib_waiting | TRUE while the window waits for the user to sign in in the browser | Boolean | Protected |
| inv_listener | Redirect listener of the authorization code flow | n_cst_redirectlistener | Protected |
| inv_oauth2 | The OAuth 2.0 token service whose helpers the window uses (see of_OAuth2) | n_cst_oauth2 | Protected |
| inv_openidattrib | Settings and results of the logon | n_cst_openidattrib | Protected |
| is_error | The identity provider's reason for refusing the sign-in (authorization code flow) | String | Protected |

## Events

W_openid_logon includes these events:

### Close

**Description**

Destroys the redirect listener, if there is one.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

### CloseQuery

**Description**

While the window waits for the user to sign in in the browser, stops waiting instead of closing: the window closes when the user closes it again.

**Syntax**

```
instancename.EVENT CloseQuery ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

Long. Returns 1 to prevent the window from closing while it waits; otherwise the return value of the ancestor event.

### Open

**Description**

Gets the settings from the n_cst_openidattrib object passed with OpenWithParm, and sets up the window for the sign-in flow (see of_SetFlow).

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

### pfc_Cancel

**Description**

Closes the window without signing in (the return code is 0). While the window waits for the user to sign in in the browser, stops waiting instead, and the window stays open.

**Syntax**

```
instancename.EVENT pfc_Cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

### pfc_Default

**Description**

Signs the user in with the identity provider and reads the user's groups, from the userinfo response or, if it has none, from the ID token. On success, the window closes and returns the n_cst_openidattrib object with the user ID, access token, ID token, userinfo response, and groups.

In the authorization code flow, pfc_Default triggers pfc_SignIn.

**Syntax**

```
instancename.EVENT pfc_Default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

### pfc_SignIn

**Description**

Signs the user in in the web browser, with the authorization code flow and PKCE (see "The authorization code flow" above), and reads the user's groups. On success, the window closes and returns the n_cst_openidattrib object with the user ID, access token, ID token, userinfo response, and groups. Otherwise the window displays a message and stays open.

**Syntax**

```
instancename.EVENT pfc_SignIn ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

**Usage**

If the authorization endpoint, token endpoint, userinfo endpoint, or client ID isn't set, the window displays a message and closes with the return code -1.

## Functions

W_openid_logon includes these functions:

### of_AuthorizationURL

**Description**

Builds the authorization request of the authorization code flow, the URL opened in the browser.

**Access**

Protected

**Syntax**

```
instancename.of_AuthorizationURL ( redirecturi, state, nonce, challenge )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *redirecturi* | String. The redirect URI, from n_cst_redirectlistener |
| *state* | String. A random value the redirect must return |
| *nonce* | String. A random value the ID token must contain |
| *challenge* | String. The PKCE code challenge (see of_CodeChallenge) |

**Return value**

String. The authorization endpoint with the parameters `response_type=code`, `client_id`, `redirect_uri`, `scope`, `state`, `nonce`, `code_challenge`, and `code_challenge_method=S256`, all URL-encoded, and `login_hint` when the n_cst_openidattrib is_userid variable has a user ID.

**Usage**

If the authorization endpoint already has a query string, the parameters are added to it.

### of_Base64Url

**Description**

Encodes bytes in base64url without padding (RFC 4648, section 5), as PKCE uses.

**Access**

Protected

**Syntax**

```
instancename.of_Base64Url ( data )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *data* | Blob. The bytes to encode |

**Return value**

String. The encoded bytes: base64 with `-` instead of `+`, `_` instead of `/`, and no `=` padding.

### of_CodeChallenge

**Description**

Computes the PKCE code challenge of a code verifier, with the S256 method (RFC 7636, section 4.2).

**Access**

Protected

**Syntax**

```
instancename.of_CodeChallenge ( verifier )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *verifier* | String. The code verifier (see of_RandomString) |

**Return value**

String. The base64url-encoded SHA-256 hash of the verifier.

### of_DecodeIDToken

**Description**

Decodes the claims of an ID token.

**Access**

Protected

**Syntax**

```
instancename.of_DecodeIDToken ( idtoken )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *idtoken* | String. An ID token (a JSON Web Token: header, payload, and signature separated by periods) |

**Return value**

String. The token's claims (its decoded payload, a JSON object), or an empty string if *idtoken* isn't a JSON Web Token.

**Usage**

The signature isn't checked. See "Where the groups come from" above.

### of_Exchange_HTTPClient

**Description**

Exchanges the authorization code for the tokens at the token endpoint (authorization code flow), using the HTTPClient object.

**Access**

Protected

**Syntax**

```
instancename.of_Exchange_HTTPClient ( code, verifier, redirecturi )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *code* | String. The authorization code from the redirect |
| *verifier* | String. The PKCE code verifier |
| *redirecturi* | String. The redirect URI sent with the authorization request |

**Return value**

Integer. Returns 1 if the identity provider returns the tokens (the access token and the ID token are stored in inv_openidattrib), -1 if it refuses (its reason is stored in is_error), and -2 if it can't be reached.

### of_Exchange_OAuthClient

**Description**

Exchanges the authorization code for the tokens at the token endpoint (authorization code flow), using the OAuthClient object.

**Access**

Protected

**Syntax**

```
instancename.of_Exchange_OAuthClient ( code, verifier, redirecturi )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *code* | String. The authorization code from the redirect |
| *verifier* | String. The PKCE code verifier |
| *redirecturi* | String. The redirect URI sent with the authorization request |

**Return value**

Integer. Returns 1 if the identity provider returns the tokens (the access token and the ID token are stored in inv_openidattrib), -1 if it refuses (its reason is stored in is_error), and -2 if it can't be reached.

### of_GetGroups

**Description**

Reads a groups claim from a JSON object.

**Access**

Protected

**Syntax**

```
instancename.of_GetGroups ( json, claim, groups )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *json* | String. A JSON object, such as a userinfo response or the claims of an ID token |
| *claim* | String. Name of the top-level claim with the groups, for example `groups` or `roles` |
| *groups* | String array, passed by reference. The groups |

**Return value**

Integer. Returns the number of groups (0 if the claim isn't there) and -1 if *json* isn't a JSON object.

**Usage**

The claim can be an array of strings or, with some providers when there is only one group, a single string.

### of_GetUserID

**Description**

Returns the user ID of the user who signed in in the browser (authorization code flow), where the window doesn't ask for one.

**Access**

Protected

**Syntax**

```
instancename.of_GetUserID ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

String. The `preferred_username` claim, or else `email`, or else `sub`, from the userinfo response or the ID token; an empty string if there is none.

### of_JSONString

**Description**

Returns a top-level string value from a JSON object.

**Access**

Protected

**Syntax**

```
instancename.of_JSONString ( json, key )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *json* | String. A JSON object |
| *key* | String. Name of a top-level string value |

**Return value**

String. The value, or an empty string if it isn't there.

### of_LoadIDTokenGroups

**Description**

Reads the groups claim from the ID token, for identity providers that don't return it from the userinfo endpoint.

**Access**

Protected

**Syntax**

```
instancename.of_LoadIDTokenGroups ( idtoken )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *idtoken* | String. The ID token from the token endpoint |

**Return value**

Integer. Returns the number of groups (stored in inv_openidattrib) and -1 if there is no ID token, it can't be decoded, or its audience isn't the client ID.

**Usage**

Called by pfc_Default when the userinfo response has no groups. The claim is the one named in the n_cst_openidattrib is_groupsclaim variable.

### of_LoadUserInfo

**Description**

Reads the user's claims from the userinfo endpoint and keeps the groups claim (named in the n_cst_openidattrib is_groupsclaim variable).

**Access**

Protected

**Syntax**

```
instancename.of_LoadUserInfo ( accesstoken )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *accesstoken* | String. Access token from the token endpoint |

**Return value**

Integer. Returns 1 if the function succeeds (the userinfo response and the groups are stored in inv_openidattrib) and -1 if the request fails.

### of_Login_Code

**Description**

Signs the user in in the web browser, with the OAuth 2.0 authorization code flow and PKCE (see "The authorization code flow" above). The window stays responsive while it waits.

**Access**

Protected

**Syntax**

```
instancename.of_Login_Code ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

Integer. Returns:

| Value | Meaning |
| --- | --- |
| 1 | The user signed in. The access token and ID token are stored in inv_openidattrib |
| 0 | The user cancelled |
| -1 | The identity provider refused the sign-in. Its reason is stored in is_error |
| -2 | The identity provider can't be reached |
| -3 | The browser can't be opened, or the redirect can't be received |
| -4 | The user didn't sign in in time (the n_cst_openidattrib il_timeout variable) |
| -5 | The response isn't valid: the redirect's state, or the ID token's nonce, doesn't match |

**Usage**

Called by pfc_SignIn.

### of_Login_HTTPClient

**Description**

Requests a token with the OAuth 2.0 password grant, using the HTTPClient object.

**Access**

Protected

**Syntax**

```
instancename.of_Login_HTTPClient ( userid, password )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *userid* | String. User ID |
| *password* | String. Password (for some identity providers, an app password) |

**Return value**

Integer. Returns 1 if the user signs in (the access token, and the ID token if the provider returned one, are stored in inv_openidattrib), -1 if the identity provider refuses the logon, and -2 if it can't be reached.

### of_Login_OAuthClient

**Description**

Requests a token with the OAuth 2.0 password grant, using the OAuthClient object.

**Access**

Protected

**Syntax**

```
instancename.of_Login_OAuthClient ( userid, password )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *userid* | String. User ID |
| *password* | String. Password (for some identity providers, an app password) |

**Return value**

Integer. Returns 1 if the user signs in (the access token, and the ID token if the provider returned one, are stored in inv_openidattrib), -1 if the identity provider refuses the logon, and -2 if it can't be reached.

### of_OAuth2

**Description**

Returns the OAuth 2.0 token service whose helpers the window uses: of_Base64Url, of_CodeChallenge, of_JSONString, of_RandomString, and of_UrlEncode call its functions of the same name.

**Access**

Protected

**Syntax**

```
instancename.of_OAuth2 ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

n_cst_oauth2. The token service (inv_oauth2), created when first needed.

### of_OpenBrowser

**Description**

Opens the authorization request in the user's default web browser.

**Access**

Protected

**Syntax**

```
instancename.of_OpenBrowser ( url )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *url* | String. The authorization request (see of_AuthorizationURL) |

**Return value**

Integer. Returns 1 if the URL was opened and -1 if it wasn't.

**Usage**

Override this function in a descendant to open the request another way, for example in a particular browser.

### of_RandomString

**Description**

Returns random bytes from the system's cryptographic random number generator (BCryptGenRandom), encoded in base64url, for the PKCE code verifier, the state, and the nonce.

**Access**

Protected

**Syntax**

```
instancename.of_RandomString ( bytes )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *bytes* | Integer. Number of random bytes |

**Return value**

String. The bytes in base64url (43 characters for 32 bytes), or an empty string if *bytes* is less than 1 or the random number generator fails.

### of_SetFlow

**Description**

Sets up the window for the sign-in flow in the n_cst_openidattrib is_flow variable: the help text and, for the authorization code flow, no user ID and password fields and a Sign In button.

**Access**

Protected

**Syntax**

```
instancename.of_SetFlow ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

### of_Text

**Description**

Returns a text of the window from the language service, if it is enabled, or else the English text.

**Access**

Protected

**Syntax**

```
instancename.of_Text ( id, default, parms[ ] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *id* | String. ID of the text in the language file |
| *default* | String. The English text |
| *parms[ ]* | String array. Values for the text's placeholders (`%s`, `%1` to `%9`) |

**Return value**

String. The text, with the values.

### of_UrlEncode

**Description**

URL-encodes a value (UTF-8) for an `application/x-www-form-urlencoded` request body.

**Access**

Protected

**Syntax**

```
instancename.of_UrlEncode ( value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |
| *value* | String. Value to encode |

**Return value**

String. The encoded value.
