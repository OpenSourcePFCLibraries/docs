# w_restorerow

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Display RestoreRow Buffer dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_restorerow → w_restorerow`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_restorerow includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| idw_parm |  | DataWindow | Protected |
| ii_dwmaxheight |  | Integer | Protected |
| ii_dwmaxwidth |  | Integer | Protected |
| ii_dwminheight |  | Integer | Protected |
| ii_dwminwidth |  | Integer | Protected |
| inv_restorerowattrib |  | n_cst_restorerowattrib | Protected |
| inv_return |  | n_cst_returnattrib | Protected |

## Events

W_restorerow includes these events:

### Close

**Description**

Treat window close from control menu as cancel operation.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_restorerow |

**Return value**

None.

### Open

**Description**

Allows deleted rows to be restored to the primary buffer.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_restorerow |

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
| *instancename* | Instance name of w_restorerow |

**Return value**

None.

### pfc_default

**Description**

Restore selected rows to the primary buffer.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_restorerow |

**Return value**

None.
