# w_dwproperty

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension DataWindow Property - The main window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_dwproperty → w_dwproperty`

**Library**

- PFCUTIL.PBL
- PFEUTIL.PBL

## Instance variables

W_dwproperty includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_attrib |  | n_cst_dwpropertyattrib | Protected |

## Events

W_dwproperty includes these events:

### pfc_apply

**Description**

Apply all requested changes.

**Syntax**

```
instancename.EVENT pfc_apply ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwproperty |

**Return value**

None.

### pfc_applyothers

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_applyothers ( as_servicename, ab_desiredstate )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwproperty |
| *as_servicename* | String. |
| *ab_desiredstate* | Boolean. |

**Return value**

Integer.

### pfc_cancel

**Description**

Perform all requested changes.

**Syntax**

```
instancename.EVENT pfc_cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_dwproperty |

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
| *instancename* | Instance name of w_dwproperty |

**Return value**

None.
