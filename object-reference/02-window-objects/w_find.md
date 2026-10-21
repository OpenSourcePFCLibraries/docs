# w_find

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Find window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_popup → w_popup → pfc_w_find → w_find`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_find includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_findattrib |  | n_cst_findattrib | Public |

## Events

W_find includes these events:

### Open

**Description**

This event is used to initialize the window using the passed in nvo-structure.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_find |

**Return value**

None.

### pfc_default

**Description**

Gather all information entered by the user and call event on requestor to search for the text.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_find |

**Return value**

None.
