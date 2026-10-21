# n_cst_colorconv

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Color Conversion Service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_colorconv → n_cst_colorconv`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

N_cst_colorconv includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| cst_ref_x | Constant set to 95.047 | Decimal | Protected |
| cst_ref_y | Constant set to 100.000 | Decimal | Protected |
| cst_ref_z | Constant set to 108.883 | Decimal | Protected |
| ERR_MISSING_PARM | Constant set to -1 | Integer | Protected |
| ERR_OUTOFRANGE_PARM | Constant set to -2 | Integer | Protected |
| OK | Constant set to 1 | Integer | Protected |
| PI | Constant set to Pi(1) | Double | Protected |

## Functions

N_cst_colorconv includes these functions:

### of_cielab2cielch

**Description**

Convert an CIE-L\*AB color value into an CIE_L\*CH\* Color value.

**Access**

Public

**Syntax**

```
instancename.of_cielab2cielch ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cielab_colorattrib. CIE-L\*AB color structure to be converted into CIE_L\*CH\* color value. |
| *astr_to* | s_cielch_colorattrib, passed by reference. CIE_L\*CH\* color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_cielab2xyz

**Description**

Convert an CIE-L\*AB color value into an CIE 1391 XYZ Color space value.

**Access**

Public

**Syntax**

```
instancename.of_cielab2xyz ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cielab_colorattrib. CIE-L\*AB color structure to be converted into XYZ color value. |
| *astr_to* | s_xyz_colorattrib, passed by reference. XYZ color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_cielch2cielab

**Description**

Convert an CIE_L\*CH\* color value into an CIE-L\*AB Color value.

**Access**

Public

**Syntax**

```
instancename.of_cielch2cielab ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cielch_colorattrib. CIE_L\*CH\* to be converted into CIE-L\*AB color value. |
| *astr_to* | s_cielab_colorattrib, passed by reference. CIE-L\*AB color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter -2, Error - Parameter out of range.

### of_cieluv2xyz

**Description**

Convert an CIE-L\*UV value into an CIE 1391 XYZ Color space value.

**Access**

Public

**Syntax**

```
instancename.of_cieluv2xyz ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cieluv_colorattrib. CIE-L\*UV color structure to be converted into XYZ values. |
| *astr_to* | s_xyz_colorattrib, passed by reference. XYZ color structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_cmy2cmyk

**Description**

Convert an CMY color value into an CMYK value.

**Access**

Public

**Syntax**

```
instancename.of_cmy2cmyk ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cmy_colorattrib. CMY value to be converted into CMYK color value. |
| *astr_to* | s_cmyk_colorattrib, passed by reference. CMYK color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_cmy2rgb

**Description**

Convert an CMY color value into an RGB value.

**Access**

Public

**Syntax**

```
instancename.of_cmy2rgb ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cmy_colorattrib. CMY color structure to be converted into RGB color value. |
| *astr_to* | s_rgb_colorattrib, passed by reference. RGB color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_cmyk2cmy

**Description**

Convert an CMYK color value into an CMY value.

**Access**

Public

**Syntax**

```
instancename.of_cmyk2cmy ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_cmyk_colorattrib. CMYK value to be converted into CMY color value. |
| *astr_to* | s_cmy_colorattrib, passed by reference. CMY color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_deg2rad

**Description**

Convert Degrees into Radians.

**Access**

Public

**Syntax**

```
instancename.of_deg2rad ( adec_deg )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *adec_deg* | Decimal. Degrees to be converted into Radians. |

**Return value**

Decimal. result of the conversion in Radians, or null, if adec_rad is null.

### of_hsl2rgb

**Description**

Convert an HSL color value into an RGB value .

**Access**

Public

**Syntax**

```
instancename.of_hsl2rgb ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_hsl_colorattrib. HSL color structure to be converted into RGB values. |
| *astr_to* | s_rgb_colorattrib, passed by reference. RGB structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing Parameter.

### of_hsv2rgb

**Description**

Convert an HSV Color value into an RGB color value.

**Access**

Public

**Syntax**

```
instancename.of_hsv2rgb ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_hsv_colorattrib. |
| *astr_to* | s_rgb_colorattrib, passed by reference. |

**Return value**

Integer. 1, OK -1, Error - missing parameter -2, Error - out of rnage parameter.

### of_hue2rgb

**Description**

return Specified HUE value converted to RGB.

**Access**

Protected

**Syntax**

```
instancename.of_hue2rgb ( adec_v1, adec_v2, adec_vh )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *adec_v1* | Decimal. Hue value 2 to be converted in RGB. |
| *adec_v2* | Decimal. |
| *adec_vh* | Decimal. Hue value H to be converted in RGB. |

**Return value**

Decimal. Hue converteg to RGB value, or NULL if an error occurs.

### of_hunterlab2xyz

**Description**

Convert an an Hunter-Lab color value into CIE 1391 XYZ Color space value.

**Access**

Public

**Syntax**

```
instancename.of_hunterlab2xyz ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_hunterlab_colorattrib. Hunter-Lab color structure to be converted into YXY values. |
| *astr_to* | s_xyz_colorattrib, passed by reference. XYZ color structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_max

**Description**

Find the maximum value in the specified arrays of values.

**Access**

Protected

**Syntax**

```
instancename.of_max ( aa_values )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *aa_values* | Any array. Arrays of values to extract the maximum from. |

**Return value**

Any. decimal : The maximum found in aa_values[], or null, if aa_values[] is null.

### of_min

**Description**

Find the minimum value in the specified arrays of values.

**Access**

Protected

**Syntax**

```
instancename.of_min ( aa_values )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *aa_values* | Any array. Arrays of values to extract the minimum from. |

**Return value**

Any. decimal : The minimum found in aa_values[], or null, if aa_values[] is null.

### of_rad2deg

**Description**

Convert Radians into Degrees.

**Access**

Protected

**Syntax**

```
instancename.of_rad2deg ( adec_rad )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *adec_rad* | Decimal. Radians to be converted into Degrees. |

**Return value**

Decimal. result of the conversion in Degrees, or null, if adec_rad is null.

### of_RGB

**Description**

returns long value corresponding to specified RGB structure.

**Access**

Public

**Syntax**

```
instancename.of_RGB ( astr_rgb )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_rgb* | s_rgb_colorattrib. RGB color structure to be converted in LONG value. |

**Return value**

Long. the converted value, or nuill is an error occurs.

### of_rgb2CMY

**Description**

Convert an RGB color value into an CMY value.

**Access**

Public

**Syntax**

```
instancename.of_rgb2CMY ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_rgb_colorattrib. RGB color structure to be converted into CMY color value. |
| *astr_to* | s_cmy_colorattrib, passed by reference. CMY color structures that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_rgb2hsl

**Description**

Convert an RGB color value into an HSL value .

**Access**

Public

**Syntax**

```
instancename.of_rgb2hsl ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_rgb_colorattrib. RGB color structure to be converted into HSL values. |
| *astr_to* | s_hsl_colorattrib, passed by reference. HSL structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing Parameter.

### of_rgb2hsv

**Description**

Convert an RGB color value into an HSV value .

**Access**

Public

**Syntax**

```
instancename.of_rgb2hsv ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_rgb_colorattrib. RGB color structure to be converted into HSV values. |
| *astr_to* | s_hsv_colorattrib, passed by reference. HSV structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing Parameter.

### of_RGB2XYZ

**Description**

Convert an RGB color value into an CIE 1391 XYZ Color space value .

**Access**

Public

**Syntax**

```
instancename.of_RGB2XYZ ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_rgb_colorattrib. RGB color structure to be converted into RGB values. |
| *astr_to* | s_xyz_colorattrib, passed by reference. CIE 1391 XYZ color space structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing Parameter.

### of_xyz2cielab

**Description**

Convert an CIE 1391 XYZ Color space value into an CIE-L\*AB color value.

**Access**

Protected

**Syntax**

```
instancename.of_xyz2cielab ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_xyz_colorattrib. XYZ color structure to be converted into CIE-L\*AB values. |
| *astr_to* | s_cielab_colorattrib, passed by reference. CIE-L\*AB color structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_xyz2cieluv

**Description**

Convert an CIE 1391 XYZ Color space value into an CIE-L\*UV color value.

**Access**

Protected

**Syntax**

```
instancename.of_xyz2cieluv ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_xyz_colorattrib. XYZ color structure to be converted into CIE-L\*UV values. |
| *astr_to* | s_cieluv_colorattrib, passed by reference. CIE-L\*UV color structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter.

### of_xyz2hunterlab

**Description**

Convert an CIE 1391 XYZ Color space value into an Hunter-Lab color value.

**Access**

Public

**Syntax**

```
instancename.of_xyz2hunterlab ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_xyz_colorattrib. XYZ color structure to be converted into YXY values. |
| *astr_to* | s_hunterlab_colorattrib, passed by reference. Hunter-Lab color structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter -2, Error - Out of range parameter.

### of_Xyz2Rgb

**Description**

Convert an CIE 1391 XYZ Color space value into an RGB color value.

**Access**

Public

**Syntax**

```
instancename.of_Xyz2Rgb ( astr_xyz, astr_rgb )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_xyz* | s_xyz_colorattrib. |
| *astr_rgb* | s_rgb_colorattrib, passed by reference. |

**Return value**

Integer. 1, OK -1, Error - missing parameter -2, Error - out of rnage parameter.

### of_xyz2yxy

**Description**

Convert an RGB color value into an CIE 1391 XYZ Color space value .

**Access**

Public

**Syntax**

```
instancename.of_xyz2yxy ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_xyz_colorattrib. XYZ color structure to be converted into YXY values. |
| *astr_to* | s_yxy_colorattrib, passed by reference. YXY color structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing parameter -2, Error - Out of range parameter.

### of_yxy2xyz

**Description**

Convert an YXY color value into an CIE 1391 XYZ Color space value .

**Access**

Public

**Syntax**

```
instancename.of_yxy2xyz ( astr_from, astr_to )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_colorconv |
| *astr_from* | s_yxy_colorattrib. YXY color structure to be converted into XYZ values. |
| *astr_to* | s_xyz_colorattrib, passed by reference. CIE 1391 XYZ color space structure that will hold the conversion result (by ref) |

**Return value**

Integer. 1, OK -1, Error - Missing Parameter.
