# w_replace

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Replace window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_popup → w_popup → pfc_w_replace → w_replace`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_replace includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_findattrib |  | n_cst_findattrib | Public |

## Events

W_replace includes these events:

### Open

**Description**

This event is used to initialize the window using the passed in nvo-structure.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_replace |

**Return value**

None.

### pfc_default

**Description**

Gather all the inforamtion entered by the user.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_replace |

**Return value**

None.

### pfc_findnext

**Description**

Populate the find attributes and perform the find next processing.

**Syntax**

```
instancename.EVENT pfc_findnext ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_replace |

**Return value**

None.

### pfc_replace

**Description**

Populate the find attributes and perform the replace processing.

**Syntax**

```
instancename.EVENT pfc_replace ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_replace |

**Return value**

None.

### pfc_replaceall

**Description**

Populate the find attributes and perform the replace all processing.

**Syntax**

```
instancename.EVENT pfc_replaceall ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_replace |

**Return value**

None.
