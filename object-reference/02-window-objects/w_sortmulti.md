# w_sortmulti

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension DDLB-style Sort dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_sortmulti → w_sortmulti`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_sortmulti includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| idwc_cols |  | DataWindowChild | Protected |
| inv_return |  | n_cst_returnattrib | Protected |
| inv_sortattrib |  | n_cst_sortattrib | Protected |

## Events

W_sortmulti includes these events:

### Close

**Description**

Window close.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortmulti |

**Return value**

None.

### Open

**Description**

A Specify Sort dialog in a dropdownlistbox style, reminiscent of the PB3 Sort Dialog.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortmulti |

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
| *instancename* | Instance name of w_sortmulti |

**Return value**

None.

### pfc_Default

**Description**

Construct the new sort string and close this dialog.

**Syntax**

```
instancename.EVENT pfc_Default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortmulti |

**Return value**

None.

### pfc_postopen

**Description**

Set up the datawindow with column names and previous sort.

**Syntax**

```
instancename.EVENT pfc_postopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortmulti |

**Return value**

None.

## Functions

W_sortmulti includes these functions:

### of_BuildSortString

**Description**

Construct a new sort string based on criteria entered.

**Access**

Public

**Syntax**

```
instancename.of_BuildSortString ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortmulti |

**Return value**

String. The new sort string.
