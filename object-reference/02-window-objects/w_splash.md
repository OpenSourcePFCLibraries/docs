# w_splash

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Splash window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_popup → w_popup → pfc_w_splash → w_splash`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_splash includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_splashattrib |  | n_cst_splashattrib | Public |

## Events

W_splash includes these events:

### Open

**Description**

Get splash object and display splash window with appropriate settings that were specified.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_splash |

**Return value**

None.

### Timer

**Description**

Close window when specified length of time is reached.

**Syntax**

```
instancename.EVENT Timer ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_splash |

**Return value**

None.
