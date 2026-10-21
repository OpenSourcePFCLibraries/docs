# w_debuglog

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension display debuglog utility window used by the debug service.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_main → w_main → pfc_w_debuglog → w_debuglog`

**Library**

- PFCUTIL.PBL
- PFEUTIL.PBL

## Instance variables

W_debuglog includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ii_initcolwidth | Initial column width. | Integer | Protected |
| ii_initdwwidth | Initial datawindow widht. | Integer | Protected |

## Events

W_debuglog includes these events:

### pfc_preopen

**Description**

A utility object used to display messages that are embedded into an applicaiotn by the developer. Use the n_cst_debug service to call this object.

**Syntax**

```
instancename.EVENT pfc_preopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_debuglog |

**Return value**

None.

### Resize

**Description**

When the window is resized, the datawindow is rezized by the resize service. Properly resize the objects that are contained by the datawindow.

**Syntax**

```
instancename.EVENT Resize ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_debuglog |

**Return value**

None.

## Functions

W_debuglog includes these functions:

### of_DwScrollToRow

**Description**

Scroll dw_debuglog to the requested row.

**Access**

Public

**Syntax**

```
instancename.of_DwScrollToRow ( al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_debuglog |
| *al_row* | Long. Row to scroll to. |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is NULL, function returns NULL.

### of_DwSetRedraw

**Description**

Set Redraw on dw_debuglog as requested.

**Access**

Public

**Syntax**

```
instancename.of_DwSetRedraw ( ab_switch )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_debuglog |
| *ab_switch* | Boolean. Switch to turn Redraw True or False. |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs. If argument is NULL, function returns NULL.

### of_SetAlwaysOnTop

**Description**

Allow the DebugLog window to always be on top when TRUE.

**Access**

Public

**Syntax**

```
instancename.of_SetAlwaysOnTop ( ab_switch )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_debuglog |
| *ab_switch* | Boolean. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.
