# n_cst_color

**Description**

Color object. This object contains a set of constants you can reference to specify color values.

**Ancestry**

![Figure](images/ref2-p061-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

To use this object:

1. Declare a variable of type n_cst_color.

   Because PFC defines this object with the autoinstantiate option, you don’t need to code CREATE or DESTROY statements:

   ```
   n_cst_color lnv_color
   ```

2. Use n_cst_color constants as needed:

   ```
   rte_1.SetTextColor  &
      (lnv_color.CYAN)
   ```

## Instance variables

N_cst_color includes instance variables:

| Instance variable | Description | Data type | Access | Usage |
| --- | --- | --- | --- | --- |
| ACTIVE_BORDER | 0x0800000a. | Long | Public |  |
| ACTIVE_TITLE_BAR | 0x08000002. | Long | Public |  |
| ACTIVE_TITLE_BAR_TEXT | 0x08000009. | Long | Public |  |
| APPLICATION_WORKSPACE | Constant set to 268435456 | Integer | Public | Specify colors |
| AQUA | 0x00ffff00. | Long | Public |  |
| BLACK | Constant set to RGB(0, 0, 0) | Integer | Public | Specify colors |
| BLUE | Constant set to RGB(0, 0, 255) | Integer | Public | Specify colors |
| BROWN | Constant set to RGB(128, 128, 0) | Integer | Public | Specify colors |
| BUTTON_DARK_SHADOW | 0x08000015. | Long | Public |  |
| BUTTON_FACE | 0x04000000 (alternate spelling of earlier constant) | Long | Public |  |
| BUTTON_HIGHLIGHT | 0x08000014. | Long | Public |  |
| BUTTON_LIGHT_SHADOW | 0x08000016. | Long | Public |  |
| BUTTON_SHADOW | 0x08000010. | Long | Public |  |
| BUTTON_TEXT | 0x08000012. | Long | Public |  |
| BUTTONFACE | Constant set to 78682240 | Integer | Public | Specify colors |
| CREAM | 0x00f0fbff. | Long | Public |  |
| CYAN | Constant set to RGB(0, 255, 255) | Integer | Public | Specify colors |
| DARK_BLUE | Constant set to RGB(0, 0, 128) | Integer | Public | Specify colors |
| DARK_CYAN | Constant set to RGB(0, 128, 128) | Integer | Public | Specify colors |
| DARK_GRAY | Constant set to RGB(128, 128, 128) | Integer | Public | Specify colors |
| DARK_GREEN | Constant set to RGB(0, 128, 0) | Integer | Public | Specify colors |
| DARK_MAGENTA | Constant set to RGB(128, 0, 128) | Integer | Public | Specify colors |
| DARK_RED | Constant set to RGB(128, 0, 0) | Integer | Public | Specify colors |
| DESKTOP | 0x08000001. | Long | Public |  |
| DISABLED_TEXT | 0x08000011. | Long | Public |  |
| FUCSHIA | 0x00ff00ff. | Long | Public |  |
| GRAY | 0x00808080. | Long | Public |  |
| GREEN | Constant set to RGB(0, 255, 0) | Integer | Public | Specify colors |
| HIGHLIGHT | 0x0800000d. | Long | Public |  |
| HIGHLIGHT_TEXT | 0x0800000e. | Long | Public |  |
| INACTIVE_BORDER | 0x0800000b. | Long | Public |  |
| INACTIVE_TITLE_BAR | 0x08000003. | Long | Public |  |
| INACTIVE_TITLE_BAR_TEXT | 0x08000013. | Long | Public |  |
| LIGHT_GRAY | Constant set to RGB(192, 192, 192) | Integer | Public | Specify colors |
| LIME | 0x0000ff00. | Long | Public |  |
| LINK | 0x08000080. | Long | Public |  |
| LINK_ACTIVE | 0x08000082. | Long | Public |  |
| LINK_HOVER | 0x08000081. | Long | Public |  |
| LINK_VISITED | 0x08000083. | Long | Public |  |
| MAGENTA | Constant set to RGB(255, 0, 255) | Integer | Public | Specify colors |
| MAROON | 0x00000080. | Long | Public |  |
| MEDIUM_GRAY | 0x00a0a0a0. | Long | Public |  |
| MENU_BAR | 0x08000004. | Long | Public |  |
| MENU_TEXT | 0x08000007. | Long | Public |  |
| MINT | 0x00c0e0c0. | Long | Public |  |
| NAVY | 0x00800000. | Long | Public |  |
| OLIVE | 0x00808000. | Long | Public |  |
| ORANGE | 0x000080ff (Note: Painters don't render orange, but run-time does) | Long | Public |  |
| PB_PAINTER_AQUA | 0x00ffff00. | Long | Public |  |
| PB_PAINTER_BLACK | 0x00000000. | Long | Public |  |
| PB_PAINTER_BLUE | 0x00ff0000. | Long | Public |  |
| PB_PAINTER_CREAM | 0x00f0fbff. | Long | Public |  |
| PB_PAINTER_FUCSHIA | 0x00ff00ff. | Long | Public |  |
| PB_PAINTER_GRAY | 0x00808080. | Long | Public |  |
| PB_PAINTER_GREEN | 0x00008000. | Long | Public |  |
| PB_PAINTER_LIME | 0x0000ff00. | Long | Public |  |
| PB_PAINTER_MAROON | 0x00000080. | Long | Public |  |
| PB_PAINTER_MEDIUM_GRAY | 0x00a0a0a0. | Long | Public |  |
| PB_PAINTER_MINT | 0x00c0dcc0. | Long | Public |  |
| PB_PAINTER_NAVY | 0x00800000. | Long | Public |  |
| PB_PAINTER_OLIVE | 0x00008080. | Long | Public |  |
| PB_PAINTER_PURPLE | 0x00800080. | Long | Public |  |
| PB_PAINTER_RED | 0x000000ff. | Long | Public |  |
| PB_PAINTER_SILVER | 0x00c0c0c0. | Long | Public |  |
| PB_PAINTER_SKY | 0x00f0caa6. | Long | Public |  |
| PB_PAINTER_TEAL | 0x00808000. | Long | Public |  |
| PB_PAINTER_WHITE | 0x00ffffff. | Long | Public |  |
| PB_PAINTER_YELLOW | 0x0000ffff. | Long | Public |  |
| PINK | xFFCCFF. | Long | Public |  |
| PURPLE | 0x00800080. | Long | Public |  |
| RED | Constant set to RGB(255, 0, 0) | Integer | Public | Specify colors |
| SCROLL_BAR | 0x08000000. | Long | Public |  |
| SILVER | 0x00c0c0c0. | Long | Public |  |
| SKY | 0x00f0caa6. | Long | Public |  |
| TEAL | 0x00808000. | Long | Public |  |
| TOOLTIP | 0x08000018. | Long | Public |  |
| TOOLTIP_TEXT | 0x08000017. | Long | Public |  |
| TRANSPARENT | Constant set to 553648127 | Integer | Public | Specify colors |
| WHITE | Constant set to RGB(255, 255, 255) | Integer | Public | Specify colors |
| WINDOW_BACKGROUND | Constant set to 1087434968 | Integer | Public | Specify colors |
| WINDOW_FRAME | 0x08000006. | Long | Public |  |
| WINDOW_TEXT | Constant set to 33554592 | Integer | Public | Specify colors |
| YELLOW | Constant set to RGB(255, 255, 0) | Integer | Public | Specify colors |
| YELLOW_STICKY | xFAFAA7. | Long | Public |  |

## Functions

N_cst_color includes these functions:

### of_3DDkShadow

**Description**

Returns 3D Dark Shadow system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_3DDkShadow ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long 3D Dark Shadow system color.

### of_3DLight

**Description**

Returns 3D Light system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_3DLight ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long 3D Light system color.

### of_activeBorder

**Description**

Returns Avtive Border system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_activeBorder ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Active Border system color.

### of_activeCaption

**Description**

Returns Active Caption system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_activeCaption ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Active Caption system color.

### of_appWorkSpace

**Description**

Returns Application WorkSpace system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_appWorkSpace ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Application WorkSpace system color.

### of_aqua

**Description**

Returns Aqua PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_aqua ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Aqua PowerBuilder color.

### of_backGround

**Description**

Returns BackGround system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_backGround ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long BackGround system color.

### of_black

**Description**

Returns Black PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_black ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Black PowerBuilder color.

### of_blue

**Description**

Returns Blue PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_blue ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Blue PowerBuilder color.

### of_brown

**Description**

Returns Brown RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_brown ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Brown RGB color.

### of_buttonAlternateFace

**Description**

Returns Button Alternate Face system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_buttonAlternateFace ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Button Alternate Face system color.

### of_buttonFace

**Description**

Returns Button Face system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_buttonFace ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Button Face system color.

### of_buttonHiLight

**Description**

Returns Button HighLight system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_buttonHiLight ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Button HighLight system color.

### of_buttonShadow

**Description**

Returns Button Shadow system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_buttonShadow ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Button Shadow system color.

### of_buttonText

**Description**

Returns Button Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_buttonText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Button Text system color.

### of_captionText

**Description**

Returns Caption Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_captionText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Caption Text system color.

### of_convert_colorToRGBString

**Description**

Takes a color stored as a long, breaks it up into its RGB components and then creates a string with each component separated by the delimiter indicated. Useful when storing colors in the registry as windows does, ie. 255 255 255 is white.

**Access**

Public

**Syntax**

```
instancename.of_convert_colorToRGBString ( vl_color, vs_delimiter )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |
| *vl_color* | Long. by value, color as a long to reformat. |
| *vs_delimiter* | String. |

**Return value**

String. String color as a 3 part (RGB) string.

### of_convert_RGBStringToColor

**Description**

Takes a color stored as a string, ie. 255 255 255 is white. And combines them into a long color value. Useful when reading colors stored by windows in the registry.

**Access**

Public

**Syntax**

```
instancename.of_convert_RGBStringToColor ( vs_color, vs_delimiter )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |
| *vs_color* | String. by value, color string to convert. |
| *vs_delimiter* | String. by value, delimiter used to separate the RGB components of the color. |

**Return value**

Long. Long color.

### of_cream

**Description**

Returns Cream PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_cream ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Cream PowerBuilder color.

### of_cyan

**Description**

Returns Cyan RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_cyan ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Cyan RGB color.

### of_darkBlue

**Description**

Returns Dark Blue color as a long.

**Access**

Public

**Syntax**

```
instancename.of_darkBlue ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Dark Blue RGB color.

### of_darkCyan

**Description**

Returns Dark Cyan RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_darkCyan ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Dark Cyan RGB color.

### of_darkGray

**Description**

Returns Dark Gray RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_darkGray ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Dark Gray RGB color.

### of_darkGreen

**Description**

Returns Dark Green PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_darkGreen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Dark Green PowerBuilder color.

### of_darkMagenta

**Description**

Returns Dark Magenta RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_darkMagenta ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Dark Magenta RGB color.

### of_darkRed

**Description**

Returns Dark Red RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_darkRed ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Dark Red RGB color.

### of_disabledText

**Description**

Returns of_grayText() color as a long. Purpose of this method is simply to provide a more descriptive call for of_grayText().

**Access**

Public

**Syntax**

```
instancename.of_disabledText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long of_grayText()

### of_fushia

**Description**

Returns Fushia PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_fushia ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Fushia PowerBuilder color.

### of_gradientActiveCaption

**Description**

Returns Gradient Active Caption system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_gradientActiveCaption ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Gradient Active Caption system color.

### of_gradientInActiveCaption

**Description**

Returns Gradient InActive Caption system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_gradientInActiveCaption ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Gradient InActive Caption system color.

### of_gray

**Description**

Returns Gray PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_gray ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Gray PowerBuilder color.

### of_grayText

**Description**

Returns Gray (disabled) Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_grayText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Gray (disabled) Text system color.

### of_green

**Description**

Returns Green RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_green ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Green RGB color.

### of_hiLight

**Description**

Returns High Light System color as a long.

**Access**

Public

**Syntax**

```
instancename.of_hiLight ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long High Light system color.

### of_hiLightText

**Description**

Returns High Light Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_hiLightText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long High Light Text system color.

### of_hotLight

**Description**

Returns Hot Light (tracking) system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_hotLight ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Hot Light (tracking) system color.

### of_hotTracking

**Description**

Returns Hot Tracking system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_hotTracking ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Hot Tracking system color.

### of_inactiveBorder

**Description**

Returns Inactive Border system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_inactiveBorder ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Inactive Border system color.

### of_inactiveCaption

**Description**

Returns InActive Caption system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_inactiveCaption ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long InActive Caption system color.

### of_inActiveCaptionText

**Description**

Returns Inactive Caption Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_inActiveCaptionText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long InActive Caption Text system color.

### of_infoBackGround

**Description**

Returns Info (toolTip) BackGround system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_infoBackGround ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Info (toolTip) BackGround system color.

### of_infoText

**Description**

Returns Info (toolTip) Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_infoText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Info (toolTip) Text system color.

### of_lightGray

**Description**

Returns Light Gray RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_lightGray ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Light Gray RGB color.

### of_lime

**Description**

Returns Lime PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_lime ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Lime PowerBuilder color.

### of_link

**Description**

Returns Link browser color as a long.

**Access**

Public

**Syntax**

```
instancename.of_link ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Link browser color.

### of_linkActive

**Description**

Returns Link Active browser color as a long.

**Access**

Public

**Syntax**

```
instancename.of_linkActive ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Link Active browser color.

### of_linkHover

**Description**

Returns Link Hover browser color as a long.

**Access**

Public

**Syntax**

```
instancename.of_linkHover ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Link Hover browser color.

### of_linkVisited

**Description**

Returns Link Visited browser color as a long.

**Access**

Public

**Syntax**

```
instancename.of_linkVisited ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Link Visited browser color.

### of_magenta

**Description**

Returns Magenta RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_magenta ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Magenta RGB color.

### of_maroon

**Description**

Returns Maroon PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_maroon ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Maroon PowerBuilder color.

### of_mediumGray

**Description**

Returns Medium Gray PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_mediumGray ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Medium Gray PowerBuilder color.

### of_menu

**Description**

Returns Menu system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_menu ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Menu system color.

### of_menuBar

**Description**

Returns Menu Bar system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_menuBar ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Menu Bar system color.

### of_menuHiLight

**Description**

Returns Menu High Light system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_menuHiLight ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Menu High Light system color.

### of_menuText

**Description**

Returns Menu Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_menuText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Menu Text system color.

### of_mint

**Description**

Returns Mint PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_mint ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Mint PowerBuilder color.

### of_navy

**Description**

Returns Navy PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_navy ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Navy PowerBuilder color.

### of_olive

**Description**

Returns Olive PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_olive ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Olive PowerBuilder color.

### of_orange

**Description**

Returns Orange RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_orange ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Orange RGB color.

### of_pink

**Description**

Returns Pink RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_pink ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Pink RGB color.

### of_purple

**Description**

Returns Purple PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_purple ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Purple PowerBuilder color.

### of_red

**Description**

Returns Red PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_red ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Red PowerBuilder color.

### of_reset

**Description**

Takes a color stored as a string, ie. 255 255 255 is white. And combines them into a long color value. Useful when reading colors stored by windows in the registry.

**Access**

Public

**Syntax**

```
instancename.of_reset ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

None.

### of_scrollBar

**Description**

Returns Scroll Bar system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_scrollBar ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Scroll Bar system color.

### of_silver

**Description**

Returns Silver PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_silver ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Silver PowerBuilder color.

### of_sky

**Description**

Returns Sky PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_sky ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Sky PowerBuilder color.

### of_teal

**Description**

Returns Teal PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_teal ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Teal PowerBuilder color.

### of_unRGB

**Description**

Breaks a color as a long into its red, green and blue components.

**Access**

Public

**Syntax**

```
instancename.of_unRGB ( vl_color, ri_red, ri_green, ri_blue )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |
| *vl_color* | Long. by value, color to be split into its RGB components. |
| *ri_red* | Integer, passed by reference. by reference, holds red component. |
| *ri_green* | Integer, passed by reference. by reference, holds green component. |
| *ri_blue* | Integer, passed by reference. by reference, holds blue component. |

**Return value**

None.

### of_white

**Description**

Returns White PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_white ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long White PowerBuilder color.

### of_window

**Description**

Returns Window system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_window ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Window system color.

### of_windowFrame

**Description**

Returns Window Frame system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_windowFrame ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Window Frame system color.

### of_windowText

**Description**

Returns Window Text system color as a long.

**Access**

Public

**Syntax**

```
instancename.of_windowText ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Window Text system color.

### of_yellow

**Description**

Returns Yellow PowerBuilder color as a long.

**Access**

Public

**Syntax**

```
instancename.of_yellow ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Yellow PowerBuilder color.

### of_yellowSticky

**Description**

Returns Yellow Sticky (post it) RGB color as a long.

**Access**

Public

**Syntax**

```
instancename.of_yellowSticky ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_color |

**Return value**

Long. Long Yellow Sticky (post it) RGB color.

