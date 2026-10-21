# w_sortdragdrop

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Drag/Drop Style Sort dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_sortdragdrop → w_sortdragdrop`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_sortdragdrop includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| il_availablerow |  | Long | Protected |
| il_sortingrow |  | Long | Protected |
| inv_return |  | n_cst_returnattrib | Protected |
| inv_sortattrib |  | n_cst_sortattrib | Protected |

## Events

W_sortdragdrop includes these events:

### Close

**Description**

Window close.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortdragdrop |

**Return value**

None.

### Open

**Description**

A Specify Sort dialog using drag/drop for selection.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortdragdrop |

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
| *instancename* | Instance name of w_sortdragdrop |

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
| *instancename* | Instance name of w_sortdragdrop |

**Return value**

None.

### pfc_postopen

**Description**

Populate the columnnames and previous sort string.

**Syntax**

```
instancename.EVENT pfc_postopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortdragdrop |

**Return value**

None.

## Functions

W_sortdragdrop includes these functions:

### of_BuildSortString

**Description**

This function will construct the new sort string.

**Access**

Protected

**Syntax**

```
instancename.of_BuildSortString ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortdragdrop |

**Return value**

String. The new sort string.
