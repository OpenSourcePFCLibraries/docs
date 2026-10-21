# w_pagesetup

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Page Setup window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_pagesetup → w_pagesetup`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_pagesetup includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| istr_pagesetup |  | s_pagesetupattrib | Protected |

## Events

W_pagesetup includes these events:

### Open

**Description**

Initialize window based on pagesetup structure passed in.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_pagesetup |

**Return value**

None.

### pfc_default

**Description**

Populate the return values and close the window.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_pagesetup |

**Return value**

None.
