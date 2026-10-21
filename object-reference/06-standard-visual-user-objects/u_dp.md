# u_dp

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension DatePicker class.

**Ancestry**

`datepicker → pfc_u_dp → u_dp`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

## Instance variables

U_dp includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |

## Events

U_dp includes these events:

### Getfocus

**Description**

If appropriate, notify the parent window that this control got focus.

**Syntax**

```
instancename.EVENT Getfocus ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_dp |

**Return value**

None.

## Functions

U_dp includes these functions:

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
| *instancename* | Instance name of u_dp |
| *aw_parent* | Window, passed by reference. The Parent window for this object (passed by reference). If a parent window is not found, aw_parent is NULL. |

**Return value**

Integer. Returns 1 = success, -1 = error.

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
| *instancename* | Instance name of u_dp |
| *as_id* | String. An ID for the Message. |
| *as_title* | String. Text for title bar. |
| *as_text* | String. Text for the actual message. |
| *ae_icon* | Icon. The icon you want to display on the MessageBox. |
| *ae_button* | Button. Set of CommandButtons you want to display on the MessageBox. |
| *ai_default* | Integer. The default button. |

**Return value**

Integer. Return value of the MessageBox.
