# w_toolbars

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Toolbars Window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_toolbars → w_toolbars`

**Library**

- PFCWNSRV.PBL
- PFEWNSRV.PBL

## Instance variables

W_toolbars includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| iapp_object |  | Application | Protected |
| ii_returncode |  | Integer | Protected |
| ii_toolbarindex |  | Integer | Protected |
| inv_toolbar[ ] |  | n_cst_toolbarattrib | Protected |
| inv_toolbarattrib |  | n_cst_toolbarattrib | Protected |
| istr_toolbar[ ] |  | n_cst_toolbarattrib | Protected |

## Events

W_toolbars includes these events:

### Close

**Description**

Close window with return code.

**Syntax**

```
instancename.EVENT Close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_toolbars |

**Return value**

None.

### Open

**Description**

Initialize window based on passed-in object.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_toolbars |

**Return value**

None.

### pfc_apply

**Description**

Apply the changes to the toolbar properties.

**Syntax**

```
instancename.EVENT pfc_apply ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_toolbars |

**Return value**

None.

### pfc_cancel

**Description**

Cancel from window.

**Syntax**

```
instancename.EVENT pfc_cancel ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_toolbars |

**Return value**

None.

### pfc_default

**Description**

Apply the changes then close the window.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_toolbars |

**Return value**

None.
