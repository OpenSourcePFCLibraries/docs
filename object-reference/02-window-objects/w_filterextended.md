# w_filterextended

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Extended Filter dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_filterextended → w_filterextended`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_filterextended includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_filterattrib |  | n_cst_filterattrib | Protected |
| inv_return |  | n_cst_returnattrib | Protected |
| is_currentcolumn |  | String | Protected |

## Events

W_filterextended includes these events:

### Close

**Description**

Check for cancel operation.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filterextended |

**Return value**

None.

### Open

**Description**

Initialize window.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filterextended |

**Return value**

None.

### pfc_Cancel

**Description**

Set to the appropriate return code and close the dialog.

**Syntax**

```
instancename.EVENT pfc_Cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filterextended |

**Return value**

None.

### pfc_default

**Description**

Construct the new filter string.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filterextended |

**Return value**

None.

### pfc_verify

**Description**

Verifies current filter.

**Syntax**

```
instancename.EVENT pfc_verify ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filterextended |

**Return value**

Integer. Returns 1 = Filter is valid, -1 = Filter is not valid.
