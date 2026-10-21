# w_openid_logon

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

OpenID Connect logon window. Signs the user in with an OpenID Connect identity provider, using the OAuth 2.0 password grant, and reads the groups the user belongs to from the provider's userinfo endpoint.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_openid_logon → w_openid_logon`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

Open this window with the n_cst_appmanager of_OpenIDLogonDlg function, which passes it an n_cst_openidattrib object with the identity provider settings and returns the results in the same object. The window works the same way as w_logon: settings and results are passed in an attribute object, and messages are displayed with of_MessageBox, so the PFC message service can replace them.

The password is never stored in the attribute object. If the identity provider refuses the logon, the window displays a message and stays open so the user can try again.

When the n_cst_openidattrib ib_showresponses variable is TRUE, the window shows the identity provider's responses and lets the user choose the PowerBuilder object used for the token request (OAuthClient or HTTPClient). This is meant for demonstrations.

**See also**

[n_cst_openidattrib](../05-global-structures-and-structure-objects/n_cst_openidattrib.md), n_cst_appmanager of_OpenIDLogonDlg, [w_logon](w_logon.md)

## Instance variables

W_openid_logon includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_openidattrib | Settings and results of the logon | n_cst_openidattrib | Protected |

## Events

W_openid_logon includes these events:

### Open

**Description**

Gets the settings from the n_cst_openidattrib object passed with OpenWithParm.

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

Closes the window without signing in (the return code is 0).

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

Signs the user in with the identity provider and reads the user's groups. On success, the window closes and returns the n_cst_openidattrib object with the user ID, access token, userinfo response, and groups.

**Syntax**

```
instancename.EVENT pfc_Default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_openid_logon |

**Return value**

None.

## Functions

W_openid_logon includes these functions:

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

### of_LoadUserInfo

**Description**

Reads the user's claims from the userinfo endpoint and keeps the groups claim.

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

Integer. Returns 1 if the user signs in (the access token is stored in inv_openidattrib), -1 if the identity provider refuses the logon, and -2 if it can't be reached.

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

Integer. Returns 1 if the user signs in (the access token is stored in inv_openidattrib), -1 if the identity provider refuses the logon, and -2 if it can't be reached.

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
