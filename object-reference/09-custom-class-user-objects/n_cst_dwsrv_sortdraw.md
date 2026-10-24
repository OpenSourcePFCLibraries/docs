# n_cst_dwsrv_sortdraw

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Sort order indicator service. Draws the arrow that shows the sort column and order in a DataWindow's column header, for the n_cst_dwsrv_sort column header sorting (of_SetColumnHeader).

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_dwsrv → n_cst_dwsrv → pfc_n_cst_dwsrv_sortdraw → n_cst_dwsrv_sortdraw`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

**Usage**

The sort service creates this service when column header sorting is turned on, and destroys it when it is turned off. To change the indicator's colors or alignment, get it with the n_cst_dwsrv_sort of_GetSortDraw function:

```
n_cst_dwsrv_sortdraw lnv_sortdraw

dw_1.inv_sort.of_SetColumnHeader(TRUE)
lnv_sortdraw = dw_1.inv_sort.of_GetSortDraw()
IF IsValid(lnv_sortdraw) THEN
   lnv_sortdraw.of_SetColorLinePrimary(RGB(0, 0, 128))
   lnv_sortdraw.of_SetAlignment(lnv_sortdraw.RIGHT)
END IF
```

To change how the indicator is drawn, extend n_cst_dwsrv_sortdraw (the extension layer) or a descendant of it: the instance variables and the drawing functions are protected (in earlier PFC releases they were private, so the service couldn't be extended).

## Instance variables

N_cst_dwsrv_sortdraw includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| AUTO | Draw the sort indicator on the left side if the header text is centered, justified or right justified. | Integer | Public |
| LEFT | Draw the sort indicator on the left side. | Integer | Public |
| RIGHT | Draw the sort indicator on the right side. | Integer | Public |
| ii_alignment | The alignment: LEFT, RIGHT, or AUTO (the default) | Integer | Protected |
| il_primaryLineColor, il_secondaryLineColor, il_backGroundLineColor | The colors of the indicator's lines | Long | Protected |
| invo_color | Color service | n_cst_color | Protected |
| invo_conversion | Unit conversion service | n_cst_pbunitconversion | Protected |
| is_band | The band the indicator is drawn in (the default is foreground) | String | Protected |
| is_sortDWObject | The column header the indicator is drawn on | String | Protected |

The variables above with Protected access were Private in earlier PFC releases.

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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

Public (protected in earlier PFC releases)

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
