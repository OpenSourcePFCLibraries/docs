# w_statusbar

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Statusbar window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_popup → w_popup → pfc_w_statusbar → w_statusbar`

**Library**

- PFCWNSRV.PBL
- PFEWNSRV.PBL

## Instance variables

W_statusbar includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_win10 | True when running on Windows 10 or later, where the MicroHelp text position is adjusted (PFC 2025 and later) | Boolean | Protected |
| ib_win95 |  | Boolean | Protected |
| ienv_object |  | Environment | Protected |
| ii_borderheight |  | Long | Protected |
| ii_borderwidth |  | Long | Protected |
| ii_secondstorefresh | one minute. | Integer | Protected |
| ii_winmaxwidth |  | Integer | Protected |
| il_backgroundcolor | Background color: the system ButtonFace color unless n_cst_winsrv_statusbar sets one (PFC 2025 and later; replaces il_buttonface) | Long | Protected |
| il_textcolor | Text color: Window Text unless n_cst_winsrv_statusbar sets one (PFC 2025 and later) | Long | Protected |
| il_warningcolor | Red. | Long | Protected |
| inv_platform |  | n_cst_platform | Protected |
| iw_parentwindow |  | w_frame | Protected |

## Events

W_statusbar includes these events:

### Close

**Description**

Destroy the platform service.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

None.

### Open

**Description**

Status bar window that 'floats' over the microhelp area of a MDI frame. Note: This window opens with the Visible Setting = False.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

None.

### Timer

**Description**

Every is_secondstorefresh this event will refresh the displayed objects. Note: The timer 'pfc_timer' is updated by the DataWindow object timer.

**Syntax**

```
instancename.EVENT Timer ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

None.

### Wininichange

**Description**

This is triggered whenever the appearances of the desktop are changed. We need to force the window and the objects to reflect these changes.

**Syntax**

```
instancename.EVENT Wininichange ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

None.

## Functions

W_statusbar includes these functions:

### of_color

**Description**

Convert the passed RGB string to a long.

**Access**

Protected

**Syntax**

```
instancename.of_color ( as_rgb )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *as_rgb* | String. a string in the format "### ### ###". |

**Return value**

Long. the actual color.

### of_CreateVisuals

**Description**

Creates the Visual Object (a dw object) that holds all registerd objects. This is called after opening this GUI or anytime the StatusBar userobject creates a new entry or destroys a new entry through its of_Register...() and of_UnRegister...() functions.

**Access**

Public

**Syntax**

```
instancename.of_CreateVisuals ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_GetSystemSettings

**Description**

Get the needed settings from the registry or win.ini.

**Access**

Protected

**Syntax**

```
instancename.of_GetSystemSettings ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_modify

**Description**

Modifies the properties of an object.

**Access**

Public

**Syntax**

```
instancename.of_modify ( as_modifyexp )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *as_modifyexp* | String. The modify string to execute. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_RefreshColors

**Description**

Refreshes the colors of all the appropriate objects to match the desired background and text colors. The progress bar text keeps its own color.

**Access**

Public (protected in the 2019 and 2022 versions of PFC)

**Syntax**

```
instancename.of_RefreshColors ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_RefreshPosition

**Description**

Movement of the Parent Frame Window is currently ongoing.

**Access**

Public

**Syntax**

```
instancename.of_RefreshPosition ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_RefreshVisuals

**Description**

Refreshes the Pre-Defined Visual Objects.

**Access**

Protected

**Syntax**

```
instancename.of_RefreshVisuals ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_RestoreFocusPoint

**Description**

Restore the focus point to the passed in object. If an invalid object is passed in or the object passed in belongs to this window, then the focus point is passed in to the parentwindow.

**Access**

Protected

**Syntax**

```
instancename.of_RestoreFocusPoint ( ago_focus )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *ago_focus* | GraphicObject. object which should get focus. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_SetPosition

**Description**

Moves this StatusBar window so it is positioned over the lower right hand portion of the Microhelp bar.

**Access**

Protected

**Syntax**

```
instancename.of_SetPosition ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

**Usage**

The position comes from the frame's client area, as Windows reports it (PFC 2025 and later): the status bar is centered vertically in the MicroHelp bar, which is at the bottom of the client area, 12 units from its right end. This is correct whatever the theme, the border, and the title bar. Earlier versions worked it out from the frame's size less estimated border and title bar sizes, which put the status bar a few pixels off with some themes and Windows versions.

### of_SetBackgroundColor

> Available in PFC 2025 and later. Not available in the 2019 and 2022 versions of PFC.

**Description**

Stores the background color; of_RefreshColors and of_CreateVisuals apply it. Called by n_cst_winsrv_statusbar of_SetBackgroundColor.

**Access**

Public

**Syntax**

```
instancename.of_SetBackgroundColor ( color )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *color* | Long. The background color |

**Return value**

Integer. 1 if it succeeds and -1 if the color isn't valid.

### of_setrefreshrate

**Description**

Reset the refresh rate for the Pre-Defined objects.

**Access**

Public

**Syntax**

```
instancename.of_setrefreshrate ( ai_seconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *ai_seconds* | Integer. The number of seconds between Pre-Defined object refreshes. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_SetTextColor

> Available in PFC 2025 and later. Not available in the 2019 and 2022 versions of PFC.

**Description**

Stores the text color; of_RefreshColors applies it. Called by n_cst_winsrv_statusbar of_SetTextColor.

**Access**

Public

**Syntax**

```
instancename.of_SetTextColor ( color )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *color* | Long. The text color |

**Return value**

Integer. 1 if it succeeds and -1 if the color isn't valid.

### of_UpdateDWTimerInterval

**Description**

Refreshes the Pre-Defined Datawindow Timer Interval. This is used for the Timer Pre-Defined object only.

**Access**

Public

**Syntax**

```
instancename.of_UpdateDWTimerInterval ( ai_milliseconds )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *ai_milliseconds* | Long. The new Timer interval in milliseconds. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_updatetimerformat

**Description**

Refreshes the Pre-Defined Datawindow Timer Format. This is used for the Timer Pre-Defined object only.

**Access**

Public

**Syntax**

```
instancename.of_updatetimerformat ( as_format )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *as_format* | String. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_UpdateVisuals

**Description**

Updates the User Defined object. This can either be Text or a new bitmap.

**Access**

Public

**Syntax**

```
instancename.of_UpdateVisuals ( as_id, as_type, as_value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_statusbar |
| *as_id* | String. The ID of the User Defined object which needs its value modified. |
| *as_type* | String. The Type of User Defined object. (text or bitmap) |
| *as_value* | String. The new desired value. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.
