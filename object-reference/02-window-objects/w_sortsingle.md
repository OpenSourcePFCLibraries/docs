# w_sortsingle

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Simple Sort dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_sortsingle → w_sortsingle`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_sortsingle includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ics_none | Obsoleted in 6.0. | String | Protected |
| il_clickedrow |  | Long | Protected |
| inv_return |  | n_cst_returnattrib | Protected |
| inv_sortattrib |  | n_cst_sortattrib | Protected |
| NONE | Constant set to '[None]' | String | Protected |

## Events

W_sortsingle includes these events:

### Close

**Description**

Window close.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortsingle |

**Return value**

None.

### Open

**Description**

A Specify Sort dialog in a simple single-column style.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortsingle |

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
| *instancename* | Instance name of w_sortsingle |

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
| *instancename* | Instance name of w_sortsingle |

**Return value**

None.

### pfc_postopen

**Description**

Populate the columns list and add the previous sort.

**Syntax**

```
instancename.EVENT pfc_postopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortsingle |

**Return value**

None.

## Functions

W_sortsingle includes these functions:

### of_BuildSortString

**Description**

This function will construct a new sort string based on the criteria entered.

**Access**

Public

**Syntax**

```
instancename.of_BuildSortString ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sortsingle |

**Return value**

String. The new sort string.
