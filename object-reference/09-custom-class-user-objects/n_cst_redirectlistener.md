# n_cst_redirectlistener

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

OAuth redirect listener. N_cst_redirectlistener receives the result of an OAuth 2.0 authorization request that the user completes in the web browser: the identity provider redirects the browser to `http://127.0.0.1:port/callback` on this computer, with the authorization code (or an error) in the query string, and the listener reads it. This is the loopback interface redirection of RFC 8252, "OAuth 2.0 for Native Apps".

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_redirectlistener → n_cst_redirectlistener`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

W_openid_logon uses this object for its authorization code flow. You can use it for your own OAuth requests, for example to get a token for an API.

The listener uses Windows Sockets directly; it needs no other DLL or utility. It is written for this one job, which avoids the timing problems of general-purpose socket objects:

- **It listens before the browser opens.** Call of_Start, then open the authorization request, then call of_Wait. A redirect that arrives before of_Wait is called waits in the connection queue, so a fast response can't be missed.
- **It waits without freezing the application.** Of_Wait checks for connections every 50 milliseconds and lets PowerBuilder process events in between, so the window can be repainted and a Cancel button can call of_Cancel. It returns when the redirect arrives, when the time you give it runs out, or when of_Cancel is called.
- **It ignores other requests.** Browsers open connections they don't use and request other paths, such as `/favicon.ico`. A connection that sends nothing is closed after 3 seconds (see of_SetReadTimeout), another path gets a 404, and the wait goes on.

It accepts connections from this computer only (it listens on 127.0.0.1), on a port that Windows chooses each time. Register the redirect URI with the identity provider so that any port matches:

- **Authentik:** a redirect URI in **Regex** mode, such as `http://127\.0\.0\.1:\d+/callback`.
- **Microsoft Entra ID:** `http://127.0.0.1/callback` under **Mobile and desktop applications**. Entra ignores the port of loopback redirect URIs.

After the redirect, the browser shows a page saying the user can close it and return to the application (see of_SetPage).

Use it with PKCE (RFC 7636) and a state parameter, as w_openid_logon does, and check that the redirect's state is the one you sent: other programs on the computer could connect to the port too.

**Example**

```
n_cst_redirectlistener lnv_listener
string ls_state, ls_code

lnv_listener = CREATE n_cst_redirectlistener
IF lnv_listener.of_Start() = 1 THEN
   // ls_state: a random value; open the authorization request,
   // with redirect_uri = lnv_listener.of_GetRedirectURI()
   IF lnv_listener.of_Wait(300) = 1 THEN
      IF lnv_listener.of_GetParameter("state") = ls_state THEN
         ls_code = lnv_listener.of_GetParameter("code")
         // exchange ls_code for a token
      END IF
   END IF
END IF
DESTROY lnv_listener
```

**See also**

[w_openid_logon](../02-window-objects/w_openid_logon.md)

## Instance variables

N_cst_redirectlistener includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| DEFAULTPATH | Constant. The path of the redirect URI that of_Start uses: `/callback` | String | Public |
| il_port | Port the listener listens on | Long | Protected |
| il_readtimeout | How long a connection may take to send its request, in milliseconds (the default is 3000) | Long | Protected |
| is_path | Path of the redirect URI | String | Protected |
| is_request | Request line of the redirect | String | Protected |
| is_message, is_title | Page shown in the browser after the redirect | String | Protected |

## Events

N_cst_redirectlistener includes these events:

### Destructor

**Description**

Stops listening (see of_Stop).

**Syntax**

```
instancename.EVENT Destructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |

**Return value**

None.

## Functions

N_cst_redirectlistener includes these functions:

### of_Cancel

**Description**

Ends of_Wait, which then returns 0. Call it from a Cancel button, for example.

**Access**

Public

**Syntax**

```
instancename.of_Cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |

**Return value**

None.

### of_GetParameter

**Description**

Returns a query parameter of the redirect.

**Access**

Public

**Syntax**

```
instancename.of_GetParameter ( name )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |
| *name* | String. Name of the parameter, for example `code`, `state`, `error`, or `error_description` |

**Return value**

String. The parameter's value, URL-decoded, or an empty string if the redirect didn't have it.

### of_GetPort

**Description**

Returns the port the listener listens on.

**Access**

Public

**Syntax**

```
instancename.of_GetPort ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |

**Return value**

Long. The port, or 0 if the listener isn't listening.

### of_GetRedirectURI

**Description**

Returns the redirect URI to send with the authorization request.

**Access**

Public

**Syntax**

```
instancename.of_GetRedirectURI ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |

**Return value**

String. The redirect URI, for example `http://127.0.0.1:52417/callback`, or an empty string if the listener isn't listening.

**Usage**

The port changes each time the listener starts. Send the same redirect URI with the authorization request and with the token request.

### of_GetRequest

**Description**

Returns the request line of the redirect, for example `GET /callback?code=...&state=... HTTP/1.1`.

**Access**

Public

**Syntax**

```
instancename.of_GetRequest ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |

**Return value**

String. The request line, or an empty string if no redirect has arrived.

### of_SetPage

**Description**

Sets the page the browser shows after the redirect.

**Access**

Public

**Syntax**

```
instancename.of_SetPage ( title, message )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |
| *title* | String. Title of the page |
| *message* | String. Its text |

**Return value**

None.

**Usage**

By default, the page says the user can close the window and return to the application. The page is sent in UTF-8.

### of_SetReadTimeout

**Description**

Sets how long a connection may take to send its request before the listener closes it.

**Access**

Public

**Syntax**

```
instancename.of_SetReadTimeout ( milliseconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |
| *milliseconds* | Long. The time, in milliseconds (the default is 3000) |

**Return value**

None.

### of_Start

**Description**

Starts listening for the redirect, on 127.0.0.1 and a port that Windows chooses.

**Access**

Public

**Syntax**

```
instancename.of_Start ( { path } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |
| *path* (optional) | String. Path of the redirect URI, starting with `/`. The default is DEFAULTPATH, `/callback` |

**Return value**

Integer. Returns 1 if the listener is listening and -1 if it isn't (for example, if *path* doesn't start with `/`).

**Usage**

Call of_Start before you open the authorization request in the browser. If the listener is already listening, it starts again, on another port.

### of_Stop

**Description**

Stops listening and releases Windows Sockets. The Destructor event calls it.

**Access**

Public

**Syntax**

```
instancename.of_Stop ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |

**Return value**

None.

### of_Wait

**Description**

Waits for the browser to request the redirect URI with the result of the authorization request, a `code` or `error` parameter.

**Access**

Public

**Syntax**

```
instancename.of_Wait ( seconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_redirectlistener |
| *seconds* | Long. How long to wait, in seconds |

**Return value**

Integer. Returns 1 if the redirect arrived (see of_GetParameter), 0 if it didn't arrive in time or of_Cancel was called, and -1 if the listener isn't listening or a socket error occurs.

**Usage**

The application stays responsive while of_Wait runs (see "Usage" above). Requests for other paths, and requests for the redirect path without a `code` or `error` parameter, get a 404, and the wait goes on.
