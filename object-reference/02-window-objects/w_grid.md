# w_grid

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Grid dialog window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_grid → w_grid`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

W_grid includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| DOWN | Constant set to 2 | Integer | Public |
| idw_requestor |  | u_dw | Protected |
| UP | Constant set to 1 | Integer | Public |

## Events

W_grid includes these events:

### Open

**Description**

Prepare dialog & refresh content.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_apply

**Description**

Apply current layout.

**Syntax**

```
instancename.EVENT pfc_apply ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_cancel

**Description**

Cancel layout changes & close dialog.

**Syntax**

```
instancename.EVENT pfc_cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_default

**Description**

Apply layout and close dialog.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_down

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_down ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_invisibleall

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_invisibleall ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_up

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_up ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

### pfc_visibleall

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_visibleall ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

None.

## Functions

W_grid includes these functions:

### of_invisibleall

**Description**

Make all entries of the repostitory invisible.

**Access**

Public

**Syntax**

```
instancename.of_invisibleall ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

Integer. 1, success -1, failure.

**Usage**

This method is invoked when the pfc_invisibleall() event is called.

### of_move

**Description**

change the order of appearance of the current selection by moving it into the specified direction.

**Access**

Public

**Syntax**

```
instancename.of_move ( ai_direction )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |
| *ai_direction* | Integer. UP (1) DOWN (2) |

**Return value**

Integer. 1, success -1, failure.

**Usage**

This method is called by the pfc_up() & pfc_down() events.

### of_refresh

**Description**

Refresh repository contents & display it.

**Access**

Protected

**Syntax**

```
instancename.of_refresh ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

Integer. 1, success -1, failure.

**Usage**

This methos is called by the open() event.

### of_setvisible

**Description**

Set all entries visible.

**Access**

Protected

**Syntax**

```
instancename.of_setvisible ( as_exp )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |
| *as_exp* | String. Visible expression to be applied as set in the DW painter. |

**Return value**

Integer. 1, sucess -1, failure.

**Usage**

This method is called by the of_visibleall() & of_invisibleall() methods.

### of_visibleall

**Description**

Make all entries of the repostitory viisible.

**Access**

Public

**Syntax**

```
instancename.of_visibleall ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_grid |

**Return value**

Integer. 1, success -1, failure.

**Usage**

This method is invoked when the pfc_visibleall() event is called.
