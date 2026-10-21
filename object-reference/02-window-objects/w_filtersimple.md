# w_filtersimple

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Simple-Style Filter dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_filtersimple → w_filtersimple`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_filtersimple includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| idwc_cols |  | DataWindowChild | Protected |
| idwc_values |  | DataWindowChild | Protected |
| inv_filterattrib |  | n_cst_filterattrib | Protected |
| inv_return |  | n_cst_returnattrib | Protected |
| is_prevchildcolumn |  | String | Protected |

## Events

W_filtersimple includes these events:

### Close

**Description**

Window close.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filtersimple |

**Return value**

None.

### Open

**Description**

A Specify Filter dialog using a simple a=b metaphor.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filtersimple |

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
| *instancename* | Instance name of w_filtersimple |

**Return value**

None.

### pfc_Default

**Description**

Construct the new filter string, test the filter, and close this dialog.

**Syntax**

```
instancename.EVENT pfc_Default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filtersimple |

**Return value**

None.

### pfc_postopen

**Description**

Add the column names to the dropdownlist.

**Syntax**

```
instancename.EVENT pfc_postopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filtersimple |

**Return value**

None.

## Functions

W_filtersimple includes these functions:

### of_BuildfilterString

**Description**

This function will build a valid datawindow filter string from the values entered in the filter selection datawindow.

**Access**

Public

**Syntax**

```
instancename.of_BuildfilterString ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filtersimple |

**Return value**

String. The new filter string. '!' if an error is encountered.

### of_GetValues

**Description**

Obtains a list of distinct values for the specified column from the database.

**Access**

Public

**Syntax**

```
instancename.of_GetValues ( as_column )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_filtersimple |
| *as_column* | String. The column to get values for. |

**Return value**

None.
