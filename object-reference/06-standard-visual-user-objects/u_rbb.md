# u_rbb

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension RibbonBar class.

**Ancestry**

`ribbonbar → pfc_u_rbb → u_rbb`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

**Usage**

Use u_rbb for a ribbon bar. In PFC 2019, a ribbon bar placed on a w_frame descendant is laid out by the frame: it spans the top of the frame, and the MDI client area fits below it (see the w_frame [of_LayoutClient](../02-window-objects/w_frame.md#of_layoutclient) function).

The height of the ribbon bar depends on its content. With the AutoSizeHeight property set to TRUE (it is not shown in the Window painter), the ribbon bar resizes itself when you hide or show the panel text or the tab header. Use of_SetHidePanelText and of_SetHideTabHeader to make those changes: they also lay out the frame's client area for the new height. Setting the HidePanelText and HideTabHeader properties directly does not; call the frame's of_LayoutClient afterwards.

On a window that is not a w_frame descendant, such as a sheet or a w_main window, the functions only set the property. Controls below the ribbon bar are not moved when its height changes. To have the ribbon bar follow the window's width, register it with the resize service:

```
inv_resize.of_Register (rbb_1, 0, 0, 100, 0)
```

## Instance variables

U_rbb includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |

## Functions

U_rbb includes these functions:

### of_GetParentWindow

**Description**

Calculates the parent window of a window object.

**Access**

Public

**Syntax**

```
instancename.of_GetParentWindow ( aw_parent )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_rbb |
| *aw_parent* | Window, passed by reference. The Parent window for this object (passed by reference). If a parent window is not found, aw_parent is NULL. |

**Return value**

Integer. Returns 1 = success, -1 = error.

### of_LayoutFrame

> Available in PFC 2019. Not available in the 2022 and 2025 versions of PFC.

**Description**

Asks the parent frame (a w_frame descendant) to lay out its client area around the ribbon bar, by calling the frame's of_LayoutClient function. Called by of_SetHidePanelText and of_SetHideTabHeader after a change that may alter the ribbon bar's height.

The frame is laid out at once, and again after the ribbon bar has processed the change, in case its height follows later.

**Access**

Protected

**Syntax**

```
instancename.of_LayoutFrame ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_rbb |

**Return value**

Integer. Returns 1 if the parent frame was asked to lay out its client area, and 0 if the parent window is not a w_frame descendant.

### of_MessageBox

**Description**

Display a PowerScript MessageBox. Allow PFC MessageBoxes to be manipulated prior to their actual display.

**Access**

Protected

**Syntax**

```
instancename.of_MessageBox ( as_id, as_title, as_text, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_rbb |
| *as_id* | String. An ID for the Message. |
| *as_title* | String. Text for title bar. |
| *as_text* | String. Text for the actual message. |
| *ae_icon* | Icon. The icon you want to display on the MessageBox. |
| *ae_button* | Button. Set of CommandButtons you want to display on the MessageBox. |
| *ai_default* | Integer. The default button. |

**Return value**

Integer. Return value of the MessageBox.

### of_SetHidePanelText

> Available in PFC 2019. Not available in the 2022 and 2025 versions of PFC.

**Description**

Hides or shows the text of the ribbon bar's panels (the HidePanelText property) and, when the ribbon bar is on a w_frame descendant, lays out the frame's client area again.

**Access**

Public

**Syntax**

```
instancename.of_SetHidePanelText ( ab_hide )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_rbb |
| *ab_hide* | Boolean. TRUE to hide the panel text, FALSE to show it. |

**Return value**

Integer. Returns 1 if it succeeds and -1 if ab_hide is null.

**Usage**

With the AutoSizeHeight property set to TRUE, the ribbon bar's height follows its content, so the frame's client area grows or shrinks with it. With AutoSizeHeight set to FALSE, the content changes but the ribbon bar keeps its height. Setting the HidePanelText property directly does not lay out the frame.

**Examples**

This example hides the panel text of the frame's ribbon bar:

```
rbb_1.of_SetHidePanelText (TRUE)
```

### of_SetHideTabHeader

> Available in PFC 2019. Not available in the 2022 and 2025 versions of PFC.

**Description**

Hides or shows the ribbon bar's tab header (the HideTabHeader property) and, when the ribbon bar is on a w_frame descendant, lays out the frame's client area again.

**Access**

Public

**Syntax**

```
instancename.of_SetHideTabHeader ( ab_hide )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_rbb |
| *ab_hide* | Boolean. TRUE to hide the tab header, FALSE to show it. |

**Return value**

Integer. Returns 1 if it succeeds and -1 if ab_hide is null.

**Usage**

With the AutoSizeHeight property set to TRUE, the ribbon bar's height follows its content, so the frame's client area grows or shrinks with it. With AutoSizeHeight set to FALSE, the content changes but the ribbon bar keeps its height. Setting the HideTabHeader property directly does not lay out the frame.

**Examples**

This example toggles the tab header of the frame's ribbon bar:

```
rbb_1.of_SetHideTabHeader (NOT rbb_1.HideTabHeader)
```
