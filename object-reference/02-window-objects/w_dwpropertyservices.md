# w_dwpropertyservices

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension DataWindow Property - The service window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_dwpropertyservices → w_dwpropertyservices`

**Library**

- PFCUTIL.PBL
- PFEUTIL.PBL

## Instance variables

W_dwpropertyservices includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_attrib |  | n_cst_dwpropertyattrib | Protected |

## Events

W_dwpropertyservices includes these events:

### Open

**Description**

Open the Property window.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwpropertyservices |

**Return value**

None.

### pfc_apply

**Description**

Apply all requested changes.

**Syntax**

```
instancename.EVENT pfc_apply ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwpropertyservices |

**Return value**

None.

### pfc_Cancel

**Description**

Close the window.

**Syntax**

```
instancename.EVENT pfc_Cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwpropertyservices |

**Return value**

None.

### pfc_default

**Description**

Perform all requested changes.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwpropertyservices |

**Return value**

None.
