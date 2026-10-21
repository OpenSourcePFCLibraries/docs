# n_cst_dwsrv_sortdraw

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Base DataWindow service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_dwsrv → n_cst_dwsrv → pfc_n_cst_dwsrv_sortdraw → n_cst_dwsrv_sortdraw`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

N_cst_dwsrv_sortdraw includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| AUTO | Draw the sort indicator on the left side if the header text is centered, justified or right justified. | Integer | Public |
| LEFT | Draw the sort indicator on the left side. | Integer | Public |
| RIGHT | Draw the sort indicator on the right side. | Integer | Public |

## Functions

N_cst_dwsrv_sortdraw includes these functions:

### of_draw

**Description**

No description is available.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_draw ( vdw_sort, vs_dwobject )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vdw_sort* | DataWindow. |
| *vs_dwobject* | String. |

**Return value**

None.

**Syntax 2**

Access: Public

**Syntax**

```
instancename.of_draw ( vs_dwobject )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vs_dwobject* | String. |

**Return value**

None.

**Syntax 3**

Access: Public

**Syntax**

```
instancename.of_draw ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |

**Return value**

None.

### of_drawnone

**Description**

No description is available.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_drawnone ( vdw_sort )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vdw_sort* | DataWindow. |

**Return value**

None.

**Syntax 2**

Access: Public

**Syntax**

```
instancename.of_drawnone ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |

**Return value**

None.

### of_getalignment

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_getalignment ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |

**Return value**

Integer.

### of_getcolorlinebackground

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_getcolorlinebackground ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |

**Return value**

Long.

### of_getcolorlineprimary

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_getcolorlineprimary ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |

**Return value**

Long.

### of_getcolorlinesecondary

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_getcolorlinesecondary ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |

**Return value**

Long.

### of_issortlineclicked

**Description**

No description is available.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_issortlineclicked ( vdwo_clicked )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vdwo_clicked* | DWObject. |

**Return value**

Boolean.

**Syntax 2**

Access: Public

**Syntax**

```
instancename.of_issortlineclicked ( vs_dwobject )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vs_dwobject* | String. |

**Return value**

Boolean.

### of_setalignment

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_setalignment ( vi_alignment )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vi_alignment* | Integer. |

**Return value**

None.

### of_setcolorlinebackground

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_setcolorlinebackground ( vl_backgroundlinecolor )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vl_backgroundlinecolor* | Long. |

**Return value**

None.

### of_setcolorlineprimary

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_setcolorlineprimary ( vl_primarylinecolor )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vl_primarylinecolor* | Long. |

**Return value**

None.

### of_setcolorlinesecondary

**Description**

No description is available.

**Access**

Protected

**Syntax**

```
instancename.of_setcolorlinesecondary ( vl_secondarylinecolor )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_sortdraw |
| *vl_secondarylinecolor* | Long. |

**Return value**

None.
