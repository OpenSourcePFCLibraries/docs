# u_am

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Animation class.

**Ancestry**

`animation → pfc_u_am → u_am`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

## Instance variables

U_am includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |

## Events

U_am includes these events:

### Getfocus

**Description**

If appropriate, notify the parent window that this control got focus.

**Syntax**

```
instancename.EVENT Getfocus ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_am |

**Return value**

None.

## Functions

U_am includes these functions:

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
| *instancename* | Instance name of u_am |
| *aw_parent* | Window, passed by reference. The Parent window for this object (passed by reference). If a parent window is not found, aw_parent is NULL. |

**Return value**

Integer. Returns 1 = success, -1 = error.

### of_MessageBox

**Description**

Display a PowerScript MessageBox. Allow PFC MessageBoxes to be manipulated prior to their actual display.

**Access**

Protected

**Syntax 1**

```
instancename.of_MessageBox ( as_id, as_title, as_text, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_am |
| *as_id* | String. An ID for the Message. |
| *as_title* | String. Text for title bar. |
| *as_text* | String. Text for the actual message. |
| *ae_icon* | Icon. The icon you want to display on the MessageBox. |
| *ae_button* | Button. Set of CommandButtons you want to display on the MessageBox. |
| *ai_default* | Integer. The default button. |

**Syntax 2** For a message that contains values (PFC 2025 and later)

```
instancename.of_MessageBox ( as_id, as_title, as_text, as_parms, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_am |
| *as_parms* | String array. The values for the placeholders in *as_text* |

The other arguments are the same as in Syntax 1.

**Return value**

Integer. Return value of the MessageBox.

**Usage**

**PFC 2025 and later** When the language service is enabled (see the n_cst_appmanager of_SetLanguage function), the message comes from the language file if it has an entry for *as_id*: the entry *as_id* replaces *as_text*, and the entry *as_id*.title replaces *as_title*. Without the service, or without an entry, *as_text* and *as_title* are used as they are.

Use Syntax 2 for a message that contains values: *as_text* is the English text with placeholders (%s, or %1 - %9 by position) and *as_parms* holds the values. Syntax 2 calls Syntax 1 to display the message, so an override of Syntax 1 still sees every message.

