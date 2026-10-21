# n_cst_winsrv_style

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Window Preferences service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_winsrv → n_cst_winsrv → pfc_n_cst_winsrv_style → n_cst_winsrv_style`

**Library**

- PFCWNSRV.PBL
- PFEWNSRV.PBL

## Instance variables

N_cst_winsrv_style includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| invo_constants |  | n_cst_platformattrib | Protected |

## Events

N_cst_winsrv_style includes these events:

### Destructor

**Description**

Clean up.

**Syntax**

```
instancename.EVENT Destructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |

**Return value**

None.

## Functions

N_cst_winsrv_style includes these functions:

### of_clientSize

**Description**

Gets the client rectangle for the window object registered and recorded in the instance variable iw_requestor.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_clientSize ( rl_width, rl_height )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *rl_width* | Long, passed by reference. |
| *rl_height* | Long, passed by reference. |

**Return value**

None.

**Syntax 2**

Gets the client rectangle for the object.

Access: Public

**Syntax**

```
instancename.of_clientSize ( vul_hwnd, rl_width, rl_height )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |
| *rl_width* | Long, passed by reference. |
| *rl_height* | Long, passed by reference. |

**Return value**

None.

**Syntax 3**

Gets the client rectangle for the window object.

Access: Public

**Syntax**

```
instancename.of_clientSize ( vw_clientsize, rl_width, rl_height )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_clientsize* | Window. |
| *rl_width* | Long, passed by reference. |
| *rl_height* | Long, passed by reference. |

**Return value**

None.

### of_describe

**Description**

Builds an array of styles and extended styles that describe the current overall style of the object registered and recorded in the instance variable iw_requestor.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_describe ( rs_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *rs_style* | String array, passed by reference. |

**Return value**

None.

**Syntax 2**

Builds an array of styles and extended styles that describe the current overall style of the object.

Access: Public

**Syntax**

```
instancename.of_describe ( vw_describe, rs_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_describe* | Window. |
| *rs_style* | String array, passed by reference. |

**Return value**

None.

**Syntax 3**

Builds an array of styles and extended styles that describe the current overall style of the object.

Access: Public

**Syntax**

```
instancename.of_describe ( vul_hwnd, rs_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |
| *rs_style* | String array, passed by reference. |

**Return value**

None.

### of_isChild

**Description**

Indicates whether or not the object is a child or not.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_isChild ( vul_hwnd )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates a child.

**Syntax 2**

Indicates whether or not the PowerBuilder window is a child or not.

Access: Public

**Syntax**

```
instancename.of_isChild ( vw_ischild )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_ischild* | Window. |

**Return value**

Boolean. Boolean TRUE indicates a child.

**Syntax 3**

Indicates whether or not the object registered and recorded in the instance variable iw_requestor is a child window or not.

Access: Public

**Syntax**

```
instancename.of_isChild ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |

**Return value**

Boolean. Boolean TRUE indicates a child.

### of_isMDIChild

**Description**

Indicates whether or not the object registered and recorded in the instance variable iw_requestor is an MDI child window or not.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_isMDIChild ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |

**Return value**

Boolean. Boolean TRUE indicates an MDI child.

**Syntax 2**

Indicates whether or not the object is an MDI child or not.

Access: Public

**Syntax**

```
instancename.of_isMDIChild ( vul_hwnd )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates an MDI child.

**Syntax 3**

Indicates whether or not the PowerBuilder window is an MDI child or not.

Access: Public

**Syntax**

```
instancename.of_isMDIChild ( vw_ismdichild )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_ismdichild* | Window. |

**Return value**

Boolean. Boolean TRUE indicates an MDI child.

### of_isStyle

**Description**

Indicates whether or not the object has the styles requested turned or not. You can request a check of multiple styles in a single call. If checking more than 1 styles, all of them must be set in order for method to return TRUE.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_isStyle ( vul_hwnd, vul_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |
| *vul_style* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates all styles are turned on.

**Syntax 2**

Indicates whether or not the object registered and recorded in the instance variable iw_requestor has the styles requested turned or not. You can request a check of multiple styles in a single call. If checking more than 1 styles, all of them must be set in order for method to return TRUE.

Access: Public

**Syntax**

```
instancename.of_isStyle ( vul_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_style* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates all styles are turned on.

**Syntax 3**

Indicates whether or not the window object has the styles requested turned or not. You can request a check of multiple styles in a single call. If checking more than 1 styles, all of them must be set in order for method to return TRUE.

Access: Public

**Syntax**

```
instancename.of_isStyle ( vw_isstyle, vul_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_isstyle* | Window. |
| *vul_style* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates all styles are turned on.

### of_isStyle_extended

**Description**

Indicates whether or not the object has the extended styles requested turned or not. You can request a check of multiple extended styles in a single call. If checking more than 1 extended styles, all of them must be set in order for method to return TRUE.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_isStyle_extended ( vul_hwnd, vul_styleextended )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |
| *vul_styleextended* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates all extended styles are turned on.

**Syntax 2**

Indicates whether or not the window object has the extended styles requested turned or not. You can request a check of multiple extended styles in a single call. If checking more than 1 extended styles, all of them must be set in order for method to return TRUE.

Access: Public

**Syntax**

```
instancename.of_isStyle_extended ( vw_isstyleextended, vul_styleextended )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_isstyleextended* | Window. |
| *vul_styleextended* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates all styles are turned on.

**Syntax 3**

Indicates whether or not the object registered and recorded in the instance variable iw_requestor has the extended styles requested turned or not. You can request a check of multiple extended styles in a single call. If checking more than 1 extended styles, all of them must be set in order for method to return TRUE.

Access: Public

**Syntax**

```
instancename.of_isStyle_extended ( vul_styleextended )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_styleextended* | UnsignedLong. |

**Return value**

Boolean. Boolean TRUE indicates all extended styles are turned on.

### of_setScrollBars

**Description**

This routine cycles through the window's control array and checks to see if any part of a control is not visible (out of the window's client area). If any object is not completely visible the appropriate scrollBar is added to the window.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_setScrollBars ( vw_scrollbars )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_scrollbars* | Window. |

**Return value**

None.

**Syntax 2**

Calls of_setScrollBars for the window located in the instance variable iw_requestor.

Access: Public

**Syntax**

```
instancename.of_setScrollBars ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |

**Return value**

None.

### of_style

**Description**

Adds or removes a style for the object. Multiple styles can be requested in a single call and all will be set or turned off based on vb_style.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_style ( vw_style, vul_style, vb_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_style* | Window. |
| *vul_style* | UnsignedLong. |
| *vb_style* | Boolean. |

**Return value**

None.

**Syntax 2**

Adds or removes a style for the object registered and recorded in the instance variable iw_requestor. Multiple styles can be requested in a single call and all will be set or turned off based on vb_style.

Access: Public

**Syntax**

```
instancename.of_style ( vul_style, vb_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_style* | UnsignedLong. |
| *vb_style* | Boolean. |

**Return value**

None.

**Syntax 3**

Access: Public

**Syntax**

```
instancename.of_style ( vul_hwnd, vul_style, vb_style )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |
| *vul_style* | UnsignedLong. |
| *vb_style* | Boolean. |

**Return value**

None.

### of_style_extended

**Description**

Adds or removes an extended style for the object registered and recorded in the instance variable iw_requestor. Multiple extended styles can be requested in a single call and all will be set or turned off based on vb_styleExtended.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_style_extended ( vul_styleextended, vb_styleextended )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_styleextended* | UnsignedLong. |
| *vb_styleextended* | Boolean. |

**Return value**

None.

**Syntax 2**

Adds or removes an extended style for the object. Multiple extended styles can be requested in a single call and all will be set or turned off based on vb_styleExtended.

Access: Public

**Syntax**

```
instancename.of_style_extended ( vw_styleextended, vul_styleextended, vb_styleextended )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vw_styleextended* | Window. |
| *vul_styleextended* | UnsignedLong. |
| *vb_styleextended* | Boolean. |

**Return value**

None.

**Syntax 3**

Adds or removes an extended style for the object. Multiple extended styles can be requested in a single call and all will be set or turned off based on vb_styleExtended.

Access: Public

**Syntax**

```
instancename.of_style_extended ( vul_hwnd, vul_styleextended, vb_styleextended )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_winsrv_style |
| *vul_hwnd* | UnsignedLong. |
| *vul_styleextended* | UnsignedLong. |
| *vb_styleextended* | Boolean. |

**Return value**

None.
