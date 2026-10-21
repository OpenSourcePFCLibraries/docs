# w_selection

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Selection window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_selection → w_selection`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_selection includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ii_dwmaxheight |  | Integer | Protected |
| ii_dwmaxwidth |  | Integer | Protected |
| ii_dwminheight |  | Integer | Protected |
| ii_dwminwidth |  | Integer | Protected |
| inv_selectionattrib |  | n_cst_selectionattrib | Protected |

## Events

W_selection includes these events:

### Open

**Description**

Initialize window based on passed-in object.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_selection |

**Return value**

None.
