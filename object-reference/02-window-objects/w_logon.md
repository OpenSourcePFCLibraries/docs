# w_logon

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Logon window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_logon → w_logon`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_logon includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ii_logonattempts |  | Integer | Protected |
| inv_logonattrib |  | n_cst_logonattrib | Protected |

## Events

W_logon includes these events:

### Close

**Description**

Treat window close from control menu as cancel operation.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_logon |

**Return value**

None.

### Open

**Description**

Get information from the logon object.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_logon |

**Return value**

None.

### pfc_Cancel

**Description**

Set the return code to 0 (cancel)

**Syntax**

```
instancename.EVENT pfc_Cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_logon |

**Return value**

None.

### pfc_default

**Description**

Peform logon.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_logon |

**Return value**

None.
