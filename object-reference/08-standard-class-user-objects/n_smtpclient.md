# n_smtpclient

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

Extension SMTPClient class. N_smtpclient sends mail with PowerBuilder's SMTPClient object and adds OAuth 2.0 authentication (XOAUTH2): with its token service, n_cst_oauth2, it signs the user in when needed and keeps the token valid between messages. Microsoft 365 and Gmail prefer OAuth 2.0 to passwords for SMTP, and Microsoft 365 is retiring password authentication for it.

**Ancestry**

`smtpclient → pfc_n_smtpclient → n_smtpclient`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

**Usage**

Set up the message with the SMTPClient properties and the Message object, as for SMTPClient, and send it with of_Send instead of Send.

To authenticate with OAuth 2.0:

1. Start the token service with of_SetOAuth2. For Microsoft 365 or Gmail, pass the provider and the application's registration: the token service gets the provider's endpoints, and, when Host is empty, the SMTP server is set (`smtp.office365.com` or `smtp.gmail.com`, port 587, STARTTLS). For another provider, call of_SetOAuth2(TRUE) and set up inv_oauth2 yourself.
2. Set UserName to the mailbox.
3. Optionally, choose the flow with inv_oauth2.of_SetFlow (the authorization code flow is the default), or set the scope with inv_oauth2.of_SetScope. Without a scope, the provider's scope for SMTP is used.
4. Call of_Send. It calls of_Authorize first, which signs the user in only when there is no valid token and none can be refreshed. Call of_Authorize yourself to sign in before the first message.

If your application gets the token itself, call of_SetAccessToken instead.

See n_cst_oauth2 for how to register the application with Microsoft Entra ID or Google. For SMTP, Microsoft Entra ID needs the delegated permission **Office 365 Exchange Online > SMTP.Send**, and the mailbox must allow SMTP AUTH. Google needs the scope `https://mail.google.com/`, which its device code flow doesn't allow.

**Examples**

This example sends a message through Microsoft 365, signing the user in in the web browser:

```
n_smtpclient lnv_smtp
integer li_rc

lnv_smtp = CREATE n_smtpclient
// "microsoft" is n_cst_oauth2.MICROSOFT
lnv_smtp.of_SetOAuth2("microsoft", "contoso.onmicrosoft.com", "my-client-id", "")
lnv_smtp.UserName = "user@contoso.com"

lnv_smtp.Message.SetSender("user@contoso.com")
lnv_smtp.Message.AddRecipient("someone@example.com")
lnv_smtp.Message.Subject = "Hello"
lnv_smtp.Message.TextBody = "Sent with PFC."

li_rc = lnv_smtp.of_Send()
IF li_rc = lnv_smtp.AUTHORIZATIONFAILED THEN
   MessageBox("Send", lnv_smtp.inv_oauth2.of_GetError())
ELSEIF li_rc <> 1 THEN
   MessageBox("Send", "The message wasn't sent (" + String(li_rc) + ").")
END IF
DESTROY lnv_smtp
```

The SMTP demo in the 2025-Solution and 2025-Workspace repositories sends mail with n_smtpclient, with all three of n_cst_oauth2's flows. Its README describes the registration with Microsoft Entra ID and Google step by step.

**See also**

[n_cst_oauth2](../09-custom-class-user-objects/n_cst_oauth2.md), [n_httpclient](n_httpclient.md)

## Instance variables

N_smtpclient includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| AUTH_AUTODETECT, AUTH_GSSAPI, AUTH_LOGIN, AUTH_NTLM, AUTH_PLAIN, AUTH_XOAUTH2 | Constants for the AuthType property: 0 to 5 | Integer | Public |
| AUTHORIZATIONFAILED | Constant. of_Send's return value when no access token could be obtained: -100 | Integer | Public |
| ib_IsObsolete |  | Boolean | Protected |
| inv_oauth2 | The OAuth 2.0 token service (of_SetOAuth2) | n_cst_oauth2 | Public |
| is_defaultscope | The scope of_Authorize chose, when the application didn't set one | String | Protected |

## Functions

N_smtpclient includes these functions:

### of_Authorize

**Description**

Gets a valid access token from the token service and uses it to authenticate with XOAUTH2. The user signs in only when needed (see n_cst_oauth2 of_Authorize).

**Access**

Public

**Syntax**

```
instancename.of_Authorize ( { flow } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *flow* (optional) | String. n_cst_oauth2.AUTHORIZATIONCODE, DEVICECODE, or CLIENTCREDENTIALS. The default is the token service's flow (inv_oauth2.of_SetFlow) |

**Return value**

Integer. Returns 1 if the access token is set (AuthType is AUTH_XOAUTH2), 0 if the user cancelled, and -1 to -6 if there is no token: see n_cst_oauth2 of_Authorize, and inv_oauth2.of_GetError().

**Usage**

When the application hasn't set a scope, the provider's scope for SMTP is used. UserName is the mailbox: when it is set, the sign-in page starts with it, and when it isn't, the token service's login hint is used.

### of_DefaultScope

**Description**

Returns the scope for sending mail with SMTP for the token service's identity provider.

**Access**

Protected

**Syntax**

```
instancename.of_DefaultScope ( flow )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *flow* | String. The flow |

**Return value**

String. The scope, or an empty string for other providers.

### of_MessageBox

**Description**

Display a PowerScript MessageBox. Allow PFC MessageBoxes to be manipulated prior to their actual display.

**Access**

Protected

**Syntax 1**

```
instancename.of_MessageBox ( as_id, as_title, as_text, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *as_id* | String. An ID for the Message. |
| *as_title* | String. Text for title bar. |
| *as_text* | String. Text for the actual message. |
| *ae_icon* | Icon. The icon you want to display on the MessageBox. |
| *ae_button* | Button. Set of CommandButtons you want to display on the MessageBox. |
| *ai_default* | Integer. The default button. |

**Syntax 2** For a message that contains values

```
instancename.of_MessageBox ( as_id, as_title, as_text, as_parms, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *as_parms* | String array. The values for the placeholders in *as_text* |

The other arguments are the same as in Syntax 1.

**Return value**

Integer. The return value of the MessageBox.

### of_Send

**Description**

Sends the message. With the token service, gets a valid access token first (of_Authorize), so an object that sends several messages refreshes the token when it expires.

**Access**

Public

**Syntax**

```
instancename.of_Send ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |

**Return value**

Integer. The return value of SMTPClient's Send, or AUTHORIZATIONFAILED (-100) if the token service is on and no access token could be obtained (inv_oauth2.of_GetError()).

### of_SetAccessToken

**Description**

Authenticates with XOAUTH2 and a token the application got itself.

**Access**

Public

**Syntax**

```
instancename.of_SetAccessToken ( accesstoken )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *accesstoken* | String. An OAuth 2.0 access token for the mailbox UserName |

**Return value**

Integer. Returns 1 if it succeeds and -1 if the token is empty.

### of_SetOAuth2

**Description**

Starts or stops the OAuth 2.0 token service, inv_oauth2.

**Access**

Public

**Syntax 1** Start or stop the token service

```
instancename.of_SetOAuth2 ( switch )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *switch* | Boolean. TRUE to start the token service, FALSE to stop it |

**Syntax 2** Start it for Microsoft 365 or Gmail

```
instancename.of_SetOAuth2 ( provider, { tenant, } clientid, clientsecret )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_smtpclient |
| *provider* | String. n_cst_oauth2.MICROSOFT or n_cst_oauth2.GOOGLE |
| *tenant* (optional) | String. Microsoft: the tenant ID or domain. The default, or an empty string, is `common`. Not used for Google |
| *clientid* | String. The application's client ID |
| *clientsecret* | String. Its client secret, or an empty string (Microsoft public clients) |

**Return value**

Integer. Syntax 1 returns 1 if it succeeds and 0 if no action was needed. Syntax 2 returns 1 if it succeeds and -1 if the provider is unknown.

**Usage**

With Syntax 1, set up the token service yourself: inv_oauth2.of_SetProvider or of_SetEndpoints, of_SetClient, and optionally of_SetFlow and of_SetScope.

Syntax 2 starts the token service for the provider (see n_cst_oauth2 of_SetProvider) with the authorization code flow, and, when Host is empty, sets the provider's SMTP server: `smtp.office365.com` or `smtp.gmail.com`, port 587, with STARTTLS. To use another flow, call inv_oauth2.of_SetFlow.
