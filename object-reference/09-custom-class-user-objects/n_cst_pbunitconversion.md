# n_cst_pbunitconversion

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

PFC Programmatic conversion of dataWindow units.  Goes beyond pixels and PowerBuilder units to include inches, centimeters and twips.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_pbunitconversion → n_cst_pbunitconversion`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

N_cst_pbunitconversion includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| CENTIMETER_1000ths | 1/1000 Centimeter. | Integer | Public |
| INCHES_1000ths | 1/1000 Inch. | Integer | Public |
| PBUNITS | PB Units. | Integer | Public |
| PIXELS | Pixels. | Integer | Public |

## Functions

N_cst_pbunitconversion includes these functions:

### of_centimetersToPBUnitsX

**Description**

Converts centimeters to PBUnits along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_centimetersToPBUnitsX ( vdec_centimeters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_centimeters* | Decimal. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_centimetersToPBUnitsY

**Description**

Converts centimeters to PBUnits along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_centimetersToPBUnitsY ( vdec_centimeters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_centimeters* | Decimal. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_centimetersToPixelsX

**Description**

Converts centimeters to pixels along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_centimetersToPixelsX ( vdec_centimeters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_centimeters* | Decimal. |

**Return value**

Decimal. Decimal Number of pixels.

### of_centimetersToPixelsY

**Description**

Converts centimeters to pixels along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_centimetersToPixelsY ( vdec_centimeters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_centimeters* | Decimal. |

**Return value**

Decimal. Decimal Number of pixels.

### of_centimetersToTwipsX

**Description**

Converts centimeters to twips along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_centimetersToTwipsX ( vdec_centimeters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_centimeters* | Decimal. |

**Return value**

Decimal. Decimal Number of twips.

### of_centimetersToTwipsY

**Description**

Converts centimeters to twips along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_centimetersToTwipsY ( vdec_centimeters )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_centimeters* | Decimal. |

**Return value**

Decimal. Decimal Number of twips.

### of_convertUnitsX

**Description**

Converts PowerBuilder units from one unit of measure to another. Goes beyond PixelsToUnits() and UnitsToPixels() by also supporting 1/1000th inches and 1/1000th centimeters units If working with inches and centimeters, this routine assumes you are passing in the values as whole numbers but in 1000ths, 1000 = 1 inch and the routine will return the value as a whole number representing 1000ths.

**Access**

Public

**Syntax**

```
instancename.of_convertUnitsX ( vdbl_units, vl_fromunits, vl_tounits )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdbl_units* | Double. |
| *vl_fromunits* | Integer. |
| *vl_tounits* | Integer. |

**Return value**

Long. Long New unit value in vl_toUnits units.

### of_convertUnitsY

**Description**

Converts PowerBuilder units from one unit of measure to another. Goes beyond PixelsToUnits() and UnitsToPixels() by also supporting 1/1000th inches and 1/1000th centimeters units If working with inches and centimeters, this routine assumes you are passing in the values as whole numbers but in 1000ths, 1 inch = 1000 and the routine will return the value as a whole number representing 1000ths.

**Access**

Public

**Syntax**

```
instancename.of_convertUnitsY ( vdbl_units, vl_fromunits, vl_tounits )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdbl_units* | Double. |
| *vl_fromunits* | Integer. |
| *vl_tounits* | Integer. |

**Return value**

Long. Long New unit value in vl_toUnits units.

### of_inchesToPBUnitsX

**Description**

Converts inches to PBUnits along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_inchesToPBUnitsX ( vdec_inches )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_inches* | Decimal. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_inchesToPBUnitsY

**Description**

Converts inches to PBUnits along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_inchesToPBUnitsY ( vdec_inches )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_inches* | Decimal. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_inchesToPixelsX

**Description**

Converts inches to pixels along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_inchesToPixelsX ( vdec_inches )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_inches* | Decimal. |

**Return value**

Decimal. Decimal Number of pixels.

### of_inchesToPixelsY

**Description**

Converts inches to pixels along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_inchesToPixelsY ( vdec_inches )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_inches* | Decimal. |

**Return value**

Decimal. Decimal Number of pixels.

### of_inchesToTwipsX

**Description**

Converts inches to twips along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_inchesToTwipsX ( vdec_inches )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_inches* | Decimal. |

**Return value**

Decimal. Decimal Number of twips.

### of_inchesToTwipsY

**Description**

Converts inches to twips along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_inchesToTwipsY ( vdec_inches )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_inches* | Decimal. |

**Return value**

Decimal. Decimal Number of twips.

### of_PBUnitsToCentimetersX

**Description**

Converts PBUnits to centimeters along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 centimeter, you actually that in 1.

**Access**

Public

**Syntax**

```
instancename.of_PBUnitsToCentimetersX ( vl_pbunits )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vl_pbunits* | Long. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_PBUnitsToCentimetersY

**Description**

Converts PBUnits to centimeters along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 centimeter, you actually that in 1.

**Access**

Public

**Syntax**

```
instancename.of_PBUnitsToCentimetersY ( vl_pbunits )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vl_pbunits* | Long. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_PBUnitsToInchesX

**Description**

Converts PBUnits to inches along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 inch, you actually that in 1.

**Access**

Public

**Syntax**

```
instancename.of_PBUnitsToInchesX ( vl_pbunits )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vl_pbunits* | Long. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_PBUnitsToInchesY

**Description**

Converts PBUnits to inches along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_PBUnitsToInchesY ( vl_pbunits )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vl_pbunits* | Long. |

**Return value**

Decimal. Decimal Number of PBUnits.

### of_pixelsToCentimetersX

**Description**

Converts pixels to centimeters along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_pixelsToCentimetersX ( vdec_pixels )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_pixels* | Decimal. |

**Return value**

Decimal. Decimal Number of centimeters.

### of_pixelsToCentimetersY

**Description**

Converts pixels to centimeters along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_pixelsToCentimetersY ( vdec_pixels )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_pixels* | Decimal. |

**Return value**

Decimal. Decimal Number of centimeters.

### of_pixelsToInchesX

**Description**

Converts pixels to inches along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_pixelsToInchesX ( vdec_pixels )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_pixels* | Decimal. |

**Return value**

Decimal. Decimal Number of inches.

### of_pixelsToInchesY

**Description**

Converts pixels to inches along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_pixelsToInchesY ( vdec_pixels )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_pixels* | Decimal. |

**Return value**

Decimal. Decimal Number of inches.

### of_twipsToCentimetersX

**Description**

Converts twips to centimeters along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_twipsToCentimetersX ( vdec_twips )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_twips* | Decimal. |

**Return value**

Decimal. Decimal Number of centimeters.

### of_twipsToCentimetersY

**Description**

Converts twips to centimeters along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 centimeter, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_twipsToCentimetersY ( vdec_twips )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_twips* | Decimal. |

**Return value**

Decimal. Decimal Number of centimeters.

### of_twipsToInchesX

**Description**

Converts twips to inches along the X axis of the monitor. This routine differs from convertUnitsX() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_twipsToInchesX ( vdec_twips )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_twips* | Decimal. |

**Return value**

Decimal. Decimal Number of inches.

### of_twipsToInchesY

**Description**

Converts twips to inches along the Y axis of the monitor. This routine differs from convertUnitsY() in that, instead of passing 1000 for 1 inch, you actually pass in 1.

**Access**

Public

**Syntax**

```
instancename.of_twipsToInchesY ( vdec_twips )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_twips* | Decimal. |

**Return value**

Decimal. Decimal Number of inches.

### of_twipsToPixelsX

**Description**

Converts twips to pixels along the X axis of the monitor.

**Access**

Public

**Syntax**

```
instancename.of_twipsToPixelsX ( vdec_twips )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_twips* | Decimal. |

**Return value**

Decimal. Decimal Number of pixels.

### of_twipsToPixelsY

**Description**

Converts twips to pixels along the Y axis of the monitor.

**Access**

Public

**Syntax**

```
instancename.of_twipsToPixelsY ( vdec_twips )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_pbunitconversion |
| *vdec_twips* | Decimal. |

**Return value**

Decimal. Decimal Number of pixels.
