# w_zoom

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Zoom dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_zoom → w_zoom`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_zoom includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_dwrequestor |  | Boolean | Protected |
| ii_rc |  | Integer | Protected |
| inv_zoomattrib |  | n_cst_zoomattrib | Protected |

## Events

W_zoom includes these events:

### Close

**Description**

Treat window close from control menu as cancel operation.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_zoom |

**Return value**

None.

### Open

**Description**

Gets the zoom object passed to this window and initializes the zoom window.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_zoom |

**Return value**

None.

### pfc_apply

**Description**

Apply zoom factor to requesting DataWindow.

**Syntax**

```
instancename.EVENT pfc_apply ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_zoom |

**Return value**

None.

### pfc_cancel

**Description**

Set the return code to 0 (cancel)

**Syntax**

```
instancename.EVENT pfc_cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_zoom |

**Return value**

None.
