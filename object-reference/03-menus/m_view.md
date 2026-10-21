# m_view

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension View Menu class.

**Ancestry**

`menu → pfc_m_view → m_view`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

## Instance variables

M_view includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |
| ilv_parent |  | Listview | Protected |

## Events

M_view includes these events:

### pfc_isobsolete

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_isobsolete ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of m_view |

**Return value**

Boolean.

## Functions

M_view includes these functions:

### of_SetParent

**Description**

Establishes a listview reference for the menu.

**Access**

Public

**Syntax**

```
instancename.of_SetParent ( alv_parent )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of m_view |
| *alv_parent* | Listview. ListView. |

**Return value**

Integer. Returns 1 = success, -1 = error.
