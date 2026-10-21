# w_about

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension About window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_about → w_about`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_about includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_aboutattrib |  | n_cst_aboutattrib | Protected |

## Events

W_about includes these events:

### Open

**Description**

Open the About window with the appropriate attributes.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_about |

**Return value**

None.

### pfc_cancel

**Description**

Lists the PFC development team members.

**Syntax**

```
instancename.EVENT pfc_cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_about |

**Return value**

None.

### pfc_default

**Description**

Performs the default operation.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_about |

**Return value**

None.
