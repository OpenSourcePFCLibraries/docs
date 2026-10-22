# n_cst_openidattrib

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

Structure object containing the settings and results of an OpenID Connect logon, used by the n_cst_appmanager of_OpenIDLogonDlg function and w_openid_logon.

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

| Properties Field | Data type | Description |
| --- | --- | --- |
| ib_showresponses | Boolean | Show the identity provider's responses and the choice of client (for demonstrations; the default is FALSE) |
| ii_rc | Integer | Return code: 1 signed in, 0 cancelled, -1 error |
| is_accesstoken | String | Access token returned by the identity provider |
| is_appname | String | Application name shown in the window |
| is_client | String | `OAuthClient` (the default) or `HTTPClient`, the PowerBuilder object used for the token request |
| is_clientid | String | Client ID of the application, as registered with the identity provider |
| is_groups[ ] | String | Groups from the identity provider's groups claim, read from the userinfo response or, if that has none, from the ID token |
| is_groupsclaim | String | Name of the claim with the user's groups (the default is `groups`; for Microsoft Entra ID app roles, `roles`) |
| is_idtoken | String | ID token returned by the identity provider, if any |
| is_scope | String | Scopes to request (the default is `openid profile`) |
| is_tokenendpoint | String | URL of the token endpoint |
| is_userid | String | User ID: the initial value for the window on input, the user who signed in on return |
| is_userinfo | String | Response of the userinfo endpoint (JSON) |
| is_userinfoendpoint | String | URL of the userinfo endpoint |

**Usage**

Settings you leave empty are read from an INI file by of_OpenIDLogonDlg. The password is never stored in this object.

**See also**

n_cst_appmanager of_OpenIDLogonDlg, [w_openid_logon](../02-window-objects/w_openid_logon.md), [n_cst_logonattrib](n_cst_logonattrib.md)
