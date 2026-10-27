# w_helpviewer

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

Help window. The help service ([n_cst_help](../09-custom-class-user-objects/n_cst_help.md)) shows PDF help files in this window, at a topic, when help is shown in the application (its default). The file is shown by a browser control, u_wb (Microsoft Edge WebView2), with its PDF viewer: the user can page through the file, search it, print it, and use its bookmarks.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_popup → w_popup → pfc_w_helpviewer → w_helpviewer`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

Don't open the window yourself: the help service opens it, and shows the next help in it while it is open. It is a popup window, so it can be used while a response window, such as a PFC dialog box, is open.

**See also**

[n_cst_help](../09-custom-class-user-objects/n_cst_help.md)

## Controls

| Control | Description |
| --- | --- |
| wb_help | u_wb. The browser control, which fills the window |

## Instance variables

W_helpviewer includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| is_url | The URL of the help file shown | String | Protected |

## Events

W_helpviewer includes these events:

### resize

**Description**

The browser control fills the window.

## Functions

W_helpviewer includes these functions:

### of_Show

**Description**

Shows a help file.

**Access**

Public

**Syntax**

```
instancename.of_Show ( url )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_helpviewer |
| *url* | String. The URL to show: a PDF file, with `#nameddest=<destination>` to show a place in it (see n_cst_help of_GetURL) |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs.
