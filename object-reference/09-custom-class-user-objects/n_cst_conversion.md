# n_cst_conversion

**Description**

Data type conversion service. This service provides functions you can call to convert values from one data type to another. For example, you can call the of_Boolean function to convert an integer or a string into a boolean value.

**Ancestry**

![Figure](images/ref2-p063-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

To use conversion functions:

1. Declare a variable of type n_cst_conversion.

   Because PFC defines this object with the autoinstantiate option, you don’t need to code CREATE or DESTROY statements:

   ```
   n_cst_conversion   inv_conversion
   ```

2. Call conversion service functions as needed.

   This example assumes an inv_conversion instance variable:

   ```
   String    ls_fulltext
   Boolean   lb_fulltext

   ls_fulltext = ProfileString &
      (gnv_app.of_GetUserIniFile( ), &
      "Display", "FullText", "Yes")
   lb_fulltext = &
      inv_conversion.of_Boolean( ls_fulltext )
   ```

**See also**

- [n_cst_numerical](n_cst_numerical.md)
- [n_cst_string](n_cst_string.md)

## Functions

N_cst_conversion includes precoded object functions:

- of_AccessibleRole
- of_Alignment
- of_argcallingconvention
- of_Arrangeopen
- of_arrangetypes
- of_Band
- of_Boolean
- of_border
- of_Borderstyle
- of_Button
- of_clipboardformat
- of_connectprivilege
- of_converttype
- of_cputypes
- of_Date
- of_datetimeformat
- of_dbnotification
- of_direction
- of_displaysizemode
- of_dragmodes
- of_dwbuffer
- of_dwconflictresolution
- of_DWItemStatus
- of_encoding
- of_errorreturn
- of_exceptionaction
- of_fileaccess
- of_filelock
- of_filemode
- of_filetype
- of_fillpattern
- of_flowdirection
- of_fontcharset
- of_fontfamily
- of_fontpitch
- of_graxisdatatype
- of_grcolortype
- of_grdatatype
- of_grgraphtype
- of_grlegendtype
- of_grobjecttype
- of_grresettype
- of_grroundtotype
- of_grscaletype
- of_grscalevalue
- of_grsorttype
- of_grsymboltype
- of_grtictype
- of_helpcommand
- of_htickmarks
- of_Icon
- of_inkcollectionmode
- of_inkcompressionmode
- of_inkeditstatus
- of_inkmode
- of_inkpentip
- of_inkpersistenceformat
- of_inkpiceditmode
- of_inkpicstatus
- of_Integer
- of_keycode
- of_languageid
- of_languagesortid
- of_libdirtype
- of_libexporttype
- of_libimporttype
- of_linestyle
- of_listviewview
- of_location
- of_mailfiletype
- of_maillogonoption
- of_mailreadoption
- of_mailrecipienttype
- of_mailreturncode
- of_maskdatatype
- of_menuitemtype
- of_menumergeoption
- of_menustyle
- of_metadatatype
- of_moncaldisplaystate
- of_moncalrepeattype
- of_object
- of_olefunctioncalltype
- of_omactivatetype
- of_omactivation
- of_omcontentsallowed
- of_omdisplaytype
- of_omlinkupdateoptions
- of_orientationtype
- of_OSType
- of_paragraphsetting
- of_parmtype
- of_pbtypes
- of_pdfmethod
- of_pointer
- of_profileroutinekind
- of_registryvaluetype
- of_richtexttoolbaractivation
- of_rowfocusind
- of_saveastype
- of_savemetadata
- of_scriptkind
- of_setpostype
- of_sizemode
- of_spacing
- of_sqlfunction
- of_sqlpreviewfunction
- of_SQLPreviewType
- of_stgreadmode
- of_stgsharemode
- of_String
- of_syncprocesstype
- of_textcase
- of_textstyle
- of_Time
- of_timerkind
- of_ToolbarAlignment
- of_toolbarstyle
- of_traceactivity
- of_tracecategory
- of_treenavigation
- of_trigevent
- of_typecategory
- of_userobjects
- of_valschemetype
- of_varaccess
- of_variablecardinalitytype
- of_variablekind
- of_vtextalign
- of_vtickmarks
- of_webpagingmethod
- of_weekday
- of_windowanimationstyle
- of_WindowState
- of_windowtype
- of_writemode

### of_AccessibleRole

**Description**

Converts a string value to a AccessibleRole data type value.

**Access**

Public

**Syntax**

```
instancename.of_AccessibleRole ( as_source, ae_accessiblerole )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to AccessibleRole datatype value. |
| *ae_accessiblerole* | Accessiblerole, passed by reference. A AccessibleRole variable passed by reference which will hold the AccessibleRole value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Alignment

**Description**

Converts a string value to a Alignment data type value.

**Access**

Public

**Syntax**

```
instancename.of_Alignment ( as_source, ae_alignment )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to Alignment datatype value. |
| *ae_alignment* | Alignment, passed by reference. A Alignment variable passed by reference which will hold the Alignment value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_argcallingconvention

**Description**

Converts a string value to a argcallingconvention data type value.

**Access**

Public

**Syntax**

```
instancename.of_argcallingconvention ( as_source, ae_argcallingconvention )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to argcallingconventiont datatype value. |
| *ae_argcallingconvention* | Argcallingconvention, passed by reference. A argcallingconventiont variable passed by reference which will hold the argcallingconvention value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Arrangeopen

**Description**

Converts a string value to a Arrangeopen data type value.

**Access**

Public

**Syntax**

```
instancename.of_Arrangeopen ( as_source, ae_arrangeopen )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to Alignment datatype value. |
| *ae_arrangeopen* | Arrangeopen, passed by reference. A Arrangeopen variable passed by reference which will hold the Arrangeopen value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_arrangetypes

**Description**

Converts a string value to a arrangetypes data type value.

**Access**

Public

**Syntax**

```
instancename.of_arrangetypes ( as_source, ae_arrangetypes )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to arrangetypes datatype value. |
| *ae_arrangetypes* | Arrangetypes, passed by reference. A arrangetypes variable passed by reference which will hold the arrangetypes value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Band

**Description**

Converts a string value to a Band data type value.

**Access**

Public

**Syntax**

```
instancename.of_Band ( as_source, ae_band )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to Band datatype value. |
| *ae_band* | Band, passed by reference. A Band variable passed by reference which will hold the Band value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Boolean

**Description**

Returns a boolean representation of the passed integer or string.

**Access**

Public

**Syntax**

```
instancename.of_Boolean ( stringorint )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *stringorint* | String or integer to be converted to a boolean value |

**Return value**

Boolean. Returns values as follows:

- **If** ***stringorint*** **is an integer** Returns TRUE if *stringorint* is 1, FALSE if *stringorint* is 0, and NULL if *stringorint* is any other value or NULL.
- **If** ***stringorint*** **is a string** Returns TRUE if *stringorint* is true, t, yes, y, or 1. Returns FALSE if *stringorint* is false, f, no, n or 0. This function returns NULL if *stringorint* is any other value or NULL.

**Usage**

Call this function to convert a string or integer to a boolean value.

**Examples**

This example calls the of_Boolean function to convert an INI file value to a boolean. It assumes an inv_conversion instance variable:

```
String    ls_fulltext
Boolean   lb_fulltext

ls_fulltext = ProfileString &
   (gnv_app.of_GetUserIniFile(), &
   "Display", "FullText", "Yes")
lb_fulltext = &
   inv_conversion.of_Boolean(ls_fulltext)
```

### of_border

**Description**

Converts a string value to a Border data type value.

**Access**

Public

**Syntax**

```
instancename.of_border ( as_source, ae_border )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to Border datatype value. |
| *ae_border* | Border, passed by reference. A Border variable passed by reference which will hold the Border value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Borderstyle

**Description**

Converts a string value to a Borderstyle data type value.

**Access**

Public

**Syntax**

```
instancename.of_Borderstyle ( as_source, ae_borderstyle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to Borderstyle datatype value. |
| *ae_borderstyle* | Borderstyle, passed by reference. A Borderstyle variable passed by reference which will hold the Borderstyle value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Button

**Description**

Converts a string value to a Button enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_Button ( string, button )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *string* | String or integer to be converted to a button. *String* must be one of the following: |
|  | OK OKCancel YesNo YesNoCancel RetryCancel AbortRetryIgnore |
| *button* | Button enumerated data type to contain the converted string (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

The error service calls this function to convert error message properties into the buttons displayed on message boxes.

**Examples**

This example calls the of_Button function:

```
...
IF ll_row > 0 THEN
   inv_conversion.of_Button &
   (ids_messages.object.button[ll_row], &
   inv_errorpass.ie_buttonstyle)
   inv_conversion.of_Icon &
   (ids_messages.object.icon[ll_row], &
   inv_errorpass.ie_icon)
...
```

### of_clipboardformat

**Description**

Converts a string value to a clipboardformat data type value.

**Access**

Public

**Syntax**

```
instancename.of_clipboardformat ( as_source, ae_clipboardformat )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to clipboardformat datatype value. |
| *ae_clipboardformat* | Clipboardformat, passed by reference. A clipboardformat variable passed by reference which will hold the clipboardformat value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_connectprivilege

**Description**

Converts a string value to a connectprivilege data type value.

**Access**

Public

**Syntax**

```
instancename.of_connectprivilege ( as_source, ae_connectprivilege )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to connectprivilege datatype value. |
| *ae_connectprivilege* | Connectprivilege, passed by reference. A connectprivilege variable passed by reference which will hold the connectprivilege value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_converttype

**Description**

Converts a string value to a converttype data type value.

**Access**

Public

**Syntax**

```
instancename.of_converttype ( as_source, ae_converttype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to converttype datatype value. |
| *ae_converttype* | Converttype, passed by reference. A converttype variable passed by reference which will hold the converttype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_cputypes

**Description**

Converts a string value to a cputypes data type value.

**Access**

Public

**Syntax**

```
instancename.of_cputypes ( as_source, ae_cputypes )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to cputypes datatype value. |
| *ae_cputypes* | Cputypes, passed by reference. A cputypes variable passed by reference which will hold the cputypes value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Date

**Description**

Converts a string value in date or datetime format to a date data type.

**Access**

Public

**Syntax**

```
instancename.of_Date ( string )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *string* | String in date or datetime format to be converted to a date data type |

**Return value**

Date. Returns a date if the function succeeds, 1900-01-01if *string* is an invalid date or datetime, and NULL if *string* is NULL.

**Usage**

Compare this function with the PowerScript function, which requires a string containing a date value as the argument.

**Examples**

This example calls the of_Date function:

```
String    ls_datetimeval = "07/28/71 12:35:14"
Date      ld_date
Time      ltm_time
n_cst_conversion   lnv_conversion

ld_date = lnv_conversion.of_Date(ls_datetimeval)
ltm_time = lnv_conversion.of_Time(ls_datetimeval)
...
```

### of_datetimeformat

**Description**

Converts a string value to a datetimeformat data type value.

**Access**

Public

**Syntax**

```
instancename.of_datetimeformat ( as_source, ae_datetimeformat )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to datetimeformat datatype value. |
| *ae_datetimeformat* | Datetimeformat, passed by reference. A datetimeformat variable passed by reference which will hold the datetimeformat value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_dbnotification

**Description**

Converts a string value to a dbnotification data type value.

**Access**

Public

**Syntax**

```
instancename.of_dbnotification ( as_source, ae_dbnotification )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to dbnotification datatype value. |
| *ae_dbnotification* | Dbnotification, passed by reference. A dbnotification variable passed by reference which will hold the dbnotification value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_direction

**Description**

Converts a string value to a direction data type value.

**Access**

Public

**Syntax**

```
instancename.of_direction ( as_source, ae_direction )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to direction datatype value. |
| *ae_direction* | Direction, passed by reference. A direction variable passed by reference which will hold the direction value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_displaysizemode

**Description**

Converts a string value to a displaysizemode data type value.

**Access**

Public

**Syntax**

```
instancename.of_displaysizemode ( as_source, ae_displaysizemode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to displaysizemode datatype value. |
| *ae_displaysizemode* | Displaysizemode, passed by reference. A displaysizemode variable passed by reference which will hold the displaysizemode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_dragmodes

**Description**

Converts a string value to a dragmodes data type value.

**Access**

Public

**Syntax**

```
instancename.of_dragmodes ( as_source, ae_dragmodes )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to dragmodes datatype value. |
| *ae_dragmodes* | Dragmodes, passed by reference. A dragmodes variable passed by reference which will hold the dragmodes value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_dwbuffer

**Description**

Converts a string value to a dwbuffer data type value.

**Access**

Public

**Syntax**

```
instancename.of_dwbuffer ( as_source, ae_dwbuffer )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to dwbuffer datatype value. |
| *ae_dwbuffer* | Dwbuffer, passed by reference. A dwbuffer variable passed by reference which will hold the dwbuffer value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_dwconflictresolution

**Description**

Converts a string value to a dwconflictresolution data type value.

**Access**

Public

**Syntax**

```
instancename.of_dwconflictresolution ( as_source, ae_dwconflictresolution )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to dwconflictresolution datatype value. |
| *ae_dwconflictresolution* | Dwconflictresolution, passed by reference. A dwconflictresolution variable passed by reference which will hold the dwconflictresolution value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_DWItemStatus

**Description**

Converts a string value to a dwItemStatus enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_DWItemStatus ( originalvalue, dwitemstatus )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *originalvalue* | String to be converted to the dwItemStatus enumerated data type. Valid values are: |
|  | DataModified New NewModified NotModified |
| *dwitemstatus* | DWItemStatus enumerated data type to contain the converted string (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds, -1 if *originalvalue* is not a valid value, and NULL if *originalvalue* is NULL.

**Usage**

The DataWindow Properties dialog box calls this function to convert a string to a DWItemStatus enumerated data type.

**Examples**

This example calls the of_DWItemStatus function:

```
Integer   li_rc
Long   ll_currow
String   ls_desiredstatus
dwItemStatus le_desiredstatus
n_cst_conversion lnv_conversion

ll_currow = dw_requestorview.GetRow()
IF ll_currow > 0 THEN
   ls_desiredstatus = "NotModified"
   li_rc = lnv_conversion.of_DWItemStatus  &
      (ls_desiredstatus, le_desiredstatus)
...
```

### of_encoding

**Description**

Converts a string value to a encoding data type value.

**Access**

Public

**Syntax**

```
instancename.of_encoding ( as_source, ae_encoding )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to encoding datatype value. |
| *ae_encoding* | Encoding, passed by reference. A encoding variable passed by reference which will hold the encoding value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_errorreturn

**Description**

Converts a string value to a errorreturndata type value.

**Access**

Public

**Syntax**

```
instancename.of_errorreturn ( as_source, ae_errorreturn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to errorreturndatatype value. ae_accessiblerole A errorreturnvariable passed by reference which will hold the errorreturnvalue that the string value was converted to. |
| *ae_errorreturn* | Errorreturn, passed by reference. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_exceptionaction

**Description**

Converts a string value to a exceptionaction data type value.

**Access**

Public

**Syntax**

```
instancename.of_exceptionaction ( as_source, ae_exceptionaction )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to exceptionaction datatype value. |
| *ae_exceptionaction* | Exceptionaction, passed by reference. A exceptionaction variable passed by reference which will hold the exceptionaction value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_fileaccess

**Description**

Converts a string value to a fileaccess data type value.

**Access**

Public

**Syntax**

```
instancename.of_fileaccess ( as_source, ae_fileaccess )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to fileaccess datatype value. |
| *ae_fileaccess* | Fileaccess, passed by reference. A fileaccess variable passed by reference which will hold the fileaccess value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_filelock

**Description**

Converts a string value to a filelock data type value.

**Access**

Public

**Syntax**

```
instancename.of_filelock ( as_source, ae_filelock )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to filelock datatype value. |
| *ae_filelock* | Filelock, passed by reference. A filelock variable passed by reference which will hold the filelock value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_filemode

**Description**

Converts a string value to a filemode data type value.

**Access**

Public

**Syntax**

```
instancename.of_filemode ( as_source, ae_filemode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to filemode datatype value. |
| *ae_filemode* | Filemode, passed by reference. A filemode variable passed by reference which will hold the filemode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_filetype

**Description**

Converts a string value to a filetype data type value.

**Access**

Public

**Syntax**

```
instancename.of_filetype ( as_source, ae_filetype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to filetype datatype value. |
| *ae_filetype* | Filetype, passed by reference. A filetype variable passed by reference which will hold the filetype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_fillpattern

**Description**

Converts a string value to a fillpattern data type value.

**Access**

Public

**Syntax**

```
instancename.of_fillpattern ( as_source, ae_fillpattern )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to fillpattern datatype value. |
| *ae_fillpattern* | Fillpattern, passed by reference. A fillpattern variable passed by reference which will hold the fillpattern value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_flowdirection

**Description**

Converts a string value to a flowdirection data type value.

**Access**

Public

**Syntax**

```
instancename.of_flowdirection ( as_source, ae_flowdirection )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to flowdirection datatype value. |
| *ae_flowdirection* | Flowdirection, passed by reference. A flowdirection variable passed by reference which will hold the flowdirection value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_fontcharset

**Description**

Converts a string value to a fontcharset data type value.

**Access**

Public

**Syntax**

```
instancename.of_fontcharset ( as_source, ae_fontcharset )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to fontcharset datatype value. |
| *ae_fontcharset* | Fontcharset, passed by reference. A fontcharset variable passed by reference which will hold the fontcharset value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_fontfamily

**Description**

Converts a string value to a fontfamily data type value.

**Access**

Public

**Syntax**

```
instancename.of_fontfamily ( as_source, ae_fontfamily )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to fontfamily datatype value. |
| *ae_fontfamily* | Fontfamily, passed by reference. A fontfamily variable passed by reference which will hold the fontfamily value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_fontpitch

**Description**

Converts a string value to a fontpitch data type value.

**Access**

Public

**Syntax**

```
instancename.of_fontpitch ( as_source, ae_fontpitch )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to fontpitch datatype value. |
| *ae_fontpitch* | Fontpitch, passed by reference. A fontpitch variable passed by reference which will hold the fontpitch value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_graxisdatatype

**Description**

Converts a string value to a graxisdatatype data type value.

**Access**

Public

**Syntax**

```
instancename.of_graxisdatatype ( as_source, ae_graxisdatatype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to graxisdatatype datatype value. |
| *ae_graxisdatatype* | Graxisdatatype, passed by reference. A graxisdatatype variable passed by reference which will hold the graxisdatatype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grcolortype

**Description**

Converts a string value to a grcolortype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grcolortype ( as_source, ae_grcolortype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grcolortype datatype value. |
| *ae_grcolortype* | Grcolortype, passed by reference. A grcolortype variable passed by reference which will hold the grcolortype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grdatatype

**Description**

Converts a string value to a grdatatype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grdatatype ( as_source, ae_grdatatype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grdatatype datatype value. |
| *ae_grdatatype* | Grdatatype, passed by reference. A grdatatype variable passed by reference which will hold the grdatatype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grgraphtype

**Description**

Converts a string value to a grgraphtype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grgraphtype ( as_source, ae_grgraphtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grgraphtype datatype value. |
| *ae_grgraphtype* | Grgraphtype, passed by reference. A grgraphtype variable passed by reference which will hold the grgraphtype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grlegendtype

**Description**

Converts a string value to a grlegendtype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grlegendtype ( as_source, ae_grlegendtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grlegendtype datatype value. |
| *ae_grlegendtype* | Grlegendtype, passed by reference. A grlegendtype variable passed by reference which will hold the grlegendtype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grobjecttype

**Description**

Converts a string value to a grobjecttype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grobjecttype ( as_source, ae_grobjecttype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grobjecttype datatype value. |
| *ae_grobjecttype* | Grobjecttype, passed by reference. A grobjecttype variable passed by reference which will hold the grobjecttype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grresettype

**Description**

Converts a string value to a grresettype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grresettype ( as_source, ae_grresettype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grresettype datatype value. |
| *ae_grresettype* | Grresettype, passed by reference. A grresettype variable passed by reference which will hold the grresettype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grroundtotype

**Description**

Converts a string value to a grroundtotype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grroundtotype ( as_source, ae_grroundtotype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grroundtotype datatype value. |
| *ae_grroundtotype* | Grroundtotype, passed by reference. A grroundtotype variable passed by reference which will hold the grroundtotype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grscaletype

**Description**

Converts a string value to a grscaletype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grscaletype ( as_source, ae_grscaletype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grscaletype datatype value. |
| *ae_grscaletype* | Grscaletype, passed by reference. A grscaletype variable passed by reference which will hold the grscaletype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grscalevalue

**Description**

Converts a string value to a grscalevalue data type value.

**Access**

Public

**Syntax**

```
instancename.of_grscalevalue ( as_source, ae_grscalevalue )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grscalevalue datatype value. |
| *ae_grscalevalue* | Grscalevalue, passed by reference. A grscalevalue variable passed by reference which will hold the grscalevalue value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grsorttype

**Description**

Converts a string value to a grsorttype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grsorttype ( as_source, ae_grsorttype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grsorttype datatype value. |
| *ae_grsorttype* | Grsorttype, passed by reference. A grsorttype variable passed by reference which will hold the grsorttype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grsymboltype

**Description**

Converts a string value to a grsymboltype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grsymboltype ( as_source, ae_grsymboltype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grsymboltype datatype value. |
| *ae_grsymboltype* | Grsymboltype, passed by reference. A grsymboltype variable passed by reference which will hold the grsymboltype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_grtictype

**Description**

Converts a string value to a grtictype data type value.

**Access**

Public

**Syntax**

```
instancename.of_grtictype ( as_source, ae_grtictype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to grtictype datatype value. |
| *ae_grtictype* | Grtictype, passed by reference. A grtictype variable passed by reference which will hold the grtictype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_helpcommand

**Description**

Converts a string value to a helpcommand data type value.

**Access**

Public

**Syntax**

```
instancename.of_helpcommand ( as_source, ae_helpcommand )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to helpcommand datatype value. |
| *ae_helpcommand* | Helpcommand, passed by reference. A helpcommand variable passed by reference which will hold the helpcommand value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_htickmarks

**Description**

Converts a string value to a htickmarks data type value.

**Access**

Public

**Syntax**

```
instancename.of_htickmarks ( as_source, ae_htickmarks )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to htickmarks datatype value. |
| *ae_htickmarks* | Htickmarks, passed by reference. A htickmarks variable passed by reference which will hold the htickmarks value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Icon

**Description**

Converts a string value to an Icon enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_Icon ( string, icon )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *string* | String or integer to be converted to an icon. *String* must be one of the following: |
|  | None Question Information StopSign Exclamation |
| *icon* | Icon enumerated data type to contain the converted string (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

The error service calls this function to convert error message properties into the icons displayed on message boxes.

**Examples**

This example calls the of_Icon function:

```
...
IF ll_row > 0 THEN
   inv_conversion.of_Button &
   (ids_messages.object.button[ll_row], &
   inv_errorpass.ie_buttonstyle)
   inv_conversion.of_Icon &
   (ids_messages.object.icon[ll_row], &
   inv_errorpass.ie_icon)
...
```

### of_inkcollectionmode

**Description**

Converts a string value to a inkcollectionmode data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkcollectionmode ( as_source, ae_inkcollectionmode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkcollectionmode datatype value. |
| *ae_inkcollectionmode* | Inkcollectionmode, passed by reference. A inkcollectionmode variable passed by reference which will hold the inkcollectionmode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkcompressionmode

**Description**

Converts a string value to a inkcompressionmode data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkcompressionmode ( as_source, ae_inkcompressionmode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkcompressionmode datatype value. |
| *ae_inkcompressionmode* | Inkcompressionmode, passed by reference. A inkcompressionmode variable passed by reference which will hold the inkcompressionmode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkeditstatus

**Description**

Converts a string value to a inkeditstatus data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkeditstatus ( as_source, ae_inkeditstatus )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkeditstatus datatype value. |
| *ae_inkeditstatus* | Inkeditstatus, passed by reference. A inkeditstatus variable passed by reference which will hold the inkeditstatus value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkmode

**Description**

Converts a string value to a inkmode data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkmode ( as_source, ae_inkmode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkmode datatype value. |
| *ae_inkmode* | Inkmode, passed by reference. A inkmode variable passed by reference which will hold the inkmode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkpentip

**Description**

Converts a string value to a inkpentip data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkpentip ( as_source, ae_inkpentip )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkpentip datatype value. |
| *ae_inkpentip* | Inkpentip, passed by reference. A inkpentip variable passed by reference which will hold the inkpentip value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkpersistenceformat

**Description**

Converts a string value to a inkpersistenceformat data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkpersistenceformat ( as_source, ae_inkpersistenceformat )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkpersistenceformat datatype value. |
| *ae_inkpersistenceformat* | Inkpersistenceformat, passed by reference. A inkpersistenceformat variable passed by reference which will hold the inkpersistenceformat value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkpiceditmode

**Description**

Converts a string value to a inkpiceditmode data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkpiceditmode ( as_source, ae_inkpiceditmode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkpiceditmode datatype value. |
| *ae_inkpiceditmode* | Inkpiceditmode, passed by reference. A inkpiceditmode variable passed by reference which will hold the inkpiceditmode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_inkpicstatus

**Description**

Converts a string value to a inkpicstatus data type value.

**Access**

Public

**Syntax**

```
instancename.of_inkpicstatus ( as_source, ae_inkpicstatus )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to inkpicstatus datatype value. |
| *ae_inkpicstatus* | Inkpicstatus, passed by reference. A inkpicstatus variable passed by reference which will hold the inkpicstatus value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Integer

**Description**

Converts a boolean argument to an integer value (converts TRUE to 1 and FALSE to 0).

**Access**

Public

**Syntax**

```
instancename.of_Integer ( boolean )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *boolean* | Boolean to be converted to an integer |

**Return value**

Integer. Returns 1 if *boolean* is TRUE and 0 if *boolean* is FALSE.

**Examples**

This example calls of_Integer to convert a boolean value to an integer (assuming an inv_conversion instance variable):

```
Integer   li_boolean

li_boolean = inv_conversion.of_Integer &
   (cbx_minimize.Checked)
```

### of_keycode

**Description**

Converts a string value to a keycode data type value.

**Access**

Public

**Syntax**

```
instancename.of_keycode ( as_source, ae_keycode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to keycode datatype value. |
| *ae_keycode* | Keycode, passed by reference. A keycode variable passed by reference which will hold the keycode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_languageid

**Description**

Converts a string value to a languageid data type value.

**Access**

Public

**Syntax**

```
instancename.of_languageid ( as_source, ae_languageid )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to languageid datatype value. |
| *ae_languageid* | Languageid, passed by reference. A languageid variable passed by reference which will hold the languageid value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_languagesortid

**Description**

Converts a string value to a languagesortid data type value.

**Access**

Public

**Syntax**

```
instancename.of_languagesortid ( as_source, ae_languagesortid )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to languagesortid datatype value. |
| *ae_languagesortid* | Languagesortid, passed by reference. A languagesortid variable passed by reference which will hold the languagesortid value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_libdirtype

**Description**

Converts a string value to a libdirtype data type value.

**Access**

Public

**Syntax**

```
instancename.of_libdirtype ( as_source, ae_libdirtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to libdirtype datatype value. |
| *ae_libdirtype* | Libdirtype, passed by reference. A libdirtype variable passed by reference which will hold the libdirtype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_libexporttype

**Description**

Converts a string value to a libexporttype data type value.

**Access**

Public

**Syntax**

```
instancename.of_libexporttype ( as_source, ae_libexporttype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to libexporttype datatype value. |
| *ae_libexporttype* | Libexporttype, passed by reference. A libexporttype variable passed by reference which will hold the libexporttype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_libimporttype

**Description**

Converts a string value to a libimporttype data type value.

**Access**

Public

**Syntax**

```
instancename.of_libimporttype ( as_source, ae_libimporttype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to libimporttype datatype value. |
| *ae_libimporttype* | Libimporttype, passed by reference. A libimporttype variable passed by reference which will hold the libimporttype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_linestyle

**Description**

Converts a string value to a linestyle data type value.

**Access**

Public

**Syntax**

```
instancename.of_linestyle ( as_source, ae_linestyle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to linestyle datatype value. |
| *ae_linestyle* | Linestyle, passed by reference. A linestyle variable passed by reference which will hold the linestyle value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_listviewview

**Description**

Converts a string value to a listviewview data type value.

**Access**

Public

**Syntax**

```
instancename.of_listviewview ( as_source, ae_listviewview )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to listviewview datatype value. |
| *ae_listviewview* | Listviewview, passed by reference. A listviewview variable passed by reference which will hold the listviewview value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_location

**Description**

Converts a string value to a location data type value.

**Access**

Public

**Syntax**

```
instancename.of_location ( as_source, ae_location )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to location datatype value. |
| *ae_location* | Location, passed by reference. A location variable passed by reference which will hold the location value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_mailfiletype

**Description**

Converts a string value to a mailfiletype data type value.

**Access**

Public

**Syntax**

```
instancename.of_mailfiletype ( as_source, ae_mailfiletype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to mailfiletype datatype value. |
| *ae_mailfiletype* | Mailfiletype, passed by reference. A mailfiletype variable passed by reference which will hold the mailfiletype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_maillogonoption

**Description**

Converts a string value to a maillogonoption data type value.

**Access**

Public

**Syntax**

```
instancename.of_maillogonoption ( as_source, ae_maillogonoption )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to maillogonoption datatype value. |
| *ae_maillogonoption* | Maillogonoption, passed by reference. A maillogonoption variable passed by reference which will hold the maillogonoption value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_mailreadoption

**Description**

Converts a string value to a mailreadoption data type value.

**Access**

Public

**Syntax**

```
instancename.of_mailreadoption ( as_source, ae_mailreadoption )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to mailreadoption datatype value. |
| *ae_mailreadoption* | Mailreadoption, passed by reference. A mailreadoption variable passed by reference which will hold the mailreadoption value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_mailrecipienttype

**Description**

Converts a string value to a mailrecipienttype data type value.

**Access**

Public

**Syntax**

```
instancename.of_mailrecipienttype ( as_source, ae_mailrecipienttype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to mailrecipienttype datatype value. |
| *ae_mailrecipienttype* | Mailrecipienttype, passed by reference. A mailrecipienttype variable passed by reference which will hold the mailrecipienttype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_mailreturncode

**Description**

Converts a string value to a mailreturncode data type value.

**Access**

Public

**Syntax**

```
instancename.of_mailreturncode ( as_source, ae_mailreturncode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to mailreturncode datatype value. |
| *ae_mailreturncode* | Mailreturncode, passed by reference. A mailreturncode variable passed by reference which will hold the mailreturncode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_maskdatatype

**Description**

Converts a string value to a maskdatatype data type value.

**Access**

Public

**Syntax**

```
instancename.of_maskdatatype ( as_source, ae_maskdatatype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to maskdatatype datatype value. |
| *ae_maskdatatype* | Maskdatatype, passed by reference. A maskdatatype variable passed by reference which will hold the maskdatatype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_menuitemtype

**Description**

Converts a string value to a menuitemtype data type value.

**Access**

Public

**Syntax**

```
instancename.of_menuitemtype ( as_source, ae_menuitemtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to menuitemtype datatype value. |
| *ae_menuitemtype* | Menuitemtype, passed by reference. A menuitemtype variable passed by reference which will hold the menuitemtype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_menumergeoption

**Description**

Converts a string value to a menumergeoption data type value.

**Access**

Public

**Syntax**

```
instancename.of_menumergeoption ( as_source, ae_menumergeoption )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to menumergeoption datatype value. |
| *ae_menumergeoption* | Menumergeoption, passed by reference. A menumergeoption variable passed by reference which will hold the menumergeoption value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_menustyle

**Description**

Converts a string value to a menustyle data type value.

**Access**

Public

**Syntax**

```
instancename.of_menustyle ( as_source, ae_menustyle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to menustyle datatype value. |
| *ae_menustyle* | Menustyle, passed by reference. A menustyle variable passed by reference which will hold the menustyle value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_metadatatype

**Description**

Converts a string value to a metadatatype data type value.

**Access**

Public

**Syntax**

```
instancename.of_metadatatype ( as_source, ae_metadatatype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to metadatatype datatype value. |
| *ae_metadatatype* | Metadatatype, passed by reference. A metadatatype variable passed by reference which will hold the metadatatype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_moncaldisplaystate

**Description**

Converts a string value to a moncaldisplaystate data type value.

**Access**

Public

**Syntax**

```
instancename.of_moncaldisplaystate ( as_source, ae_moncaldisplaystate )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to moncaldisplaystate datatype value. |
| *ae_moncaldisplaystate* | Moncaldisplaystate, passed by reference. A moncaldisplaystate variable passed by reference which will hold the moncaldisplaystate value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_moncalrepeattype

**Description**

Converts a string value to a moncalrepeattype data type value.

**Access**

Public

**Syntax**

```
instancename.of_moncalrepeattype ( as_source, ae_moncalrepeattype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to moncalrepeattype datatype value. |
| *ae_moncalrepeattype* | Moncalrepeattype, passed by reference. A moncalrepeattype variable passed by reference which will hold the moncalrepeattype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_object

**Description**

Converts a string value to a object data type value.

**Access**

Public

**Syntax**

```
instancename.of_object ( as_source, ae_object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to object datatype value. |
| *ae_object* | Object, passed by reference. A object variable passed by reference which will hold the object value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

**Usage**

In PFC 2025 and later, of_object and the of_String syntax for object values handle every object type in PowerBuilder 2025, including types such as TabbedBar, StatusBar, SMTPClient, and the PDF builder classes. In the 2019 and 2022 versions of PFC, some newer types are not handled and of_object returns -1 for them.

### of_olefunctioncalltype

**Description**

Converts a string value to a olefunctioncalltype data type value.

**Access**

Public

**Syntax**

```
instancename.of_olefunctioncalltype ( as_source, ae_olefunctioncalltype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to olefunctioncalltype datatype value. |
| *ae_olefunctioncalltype* | Olefunctioncalltype, passed by reference. A olefunctioncalltype variable passed by reference which will hold the olefunctioncalltype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_omactivatetype

**Description**

Converts a string value to a omactivatetype data type value.

**Access**

Public

**Syntax**

```
instancename.of_omactivatetype ( as_source, ae_omactivatetype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to omactivatetype datatype value. |
| *ae_omactivatetype* | Omactivatetype, passed by reference. A omactivatetype variable passed by reference which will hold the omactivatetype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_omactivation

**Description**

Converts a string value to a omactivation data type value.

**Access**

Public

**Syntax**

```
instancename.of_omactivation ( as_source, ae_omactivation )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to omactivation datatype value. |
| *ae_omactivation* | Omactivation, passed by reference. A omactivation variable passed by reference which will hold the omactivation value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_omcontentsallowed

**Description**

Converts a string value to a omcontentsallowed data type value.

**Access**

Public

**Syntax**

```
instancename.of_omcontentsallowed ( as_source, ae_omcontentsallowed )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to omcontentsallowed datatype value. |
| *ae_omcontentsallowed* | Omcontentsallowed, passed by reference. A omcontentsallowed variable passed by reference which will hold the omcontentsallowed value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_omdisplaytype

**Description**

Converts a string value to a omdisplaytype data type value.

**Access**

Public

**Syntax**

```
instancename.of_omdisplaytype ( as_source, ae_omdisplaytype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to omdisplaytype datatype value. |
| *ae_omdisplaytype* | Omdisplaytype, passed by reference. A omdisplaytype variable passed by reference which will hold the omdisplaytype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_omlinkupdateoptions

**Description**

Converts a string value to a omlinkupdateoptions data type value.

**Access**

Public

**Syntax**

```
instancename.of_omlinkupdateoptions ( as_source, ae_omlinkupdateoptions )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to omlinkupdateoptions datatype value. |
| *ae_omlinkupdateoptions* | Omlinkupdateoptions, passed by reference. A omlinkupdateoptions variable passed by reference which will hold the omlinkupdateoptions value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_orientationtype

**Description**

Converts a string value to a omlinkupdateoptions data type value.

**Access**

Public

**Syntax**

```
instancename.of_orientationtype ( as_source, ae_orientationtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to omlinkupdateoptions datatype value. ae_omlinkupdateoptions A omlinkupdateoptions variable passed by reference which will hold the omlinkupdateoptions value that the string value was converted to. |
| *ae_orientationtype* | Orientationtype, passed by reference. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_OSType

**Description**

Converts a string value to an OSTypes enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_OSType ( originalvalue, ostype)
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *originalvalue* | String to be converted to the OSType enumerated data type. Valid values are: |
|  | AIX HPUX Macintosh (obsolete) OSF1 (obsolete) SOL2 Windows WindowsNT |
| *ostype* | OSTypes variable into which the function returns the value (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds, -1 if *originalvalue* is not a valid value, and NULL if *originalvalue* is NULL.

**Examples**

This example calls the of_OSType function:

```
OSTypes  lost_type
String   ls_original
Integer  li_return
n_cst_conversion  lnv_conversion

ls_original = "Windows"
li_return = lnv_conversion.of_OSType  &
 (ls_original, lost_type)
...
```

### of_paragraphsetting

**Description**

Converts a string value to a paragraphsetting data type value.

**Access**

Public

**Syntax**

```
instancename.of_paragraphsetting ( as_source, ae_paragraphsetting )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to paragraphsetting datatype value. |
| *ae_paragraphsetting* | Paragraphsetting, passed by reference. A paragraphsetting variable passed by reference which will hold the paragraphsetting value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_parmtype

**Description**

Converts a string value to a parmtype data type value.

**Access**

Public

**Syntax**

```
instancename.of_parmtype ( as_source, ae_parmtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to parmtype datatype value. |
| *ae_parmtype* | Parmtype, passed by reference. A parmtype variable passed by reference which will hold the parmtype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_pbtypes

**Description**

Converts a string value to a pbtypes data type value.

**Access**

Public

**Syntax**

```
instancename.of_pbtypes ( as_source, ae_pbtypes )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to pbtypes datatype value. |
| *ae_pbtypes* | Pbtypes, passed by reference. A pbtypes variable passed by reference which will hold the pbtypes value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_pdfmethod

**Description**

Converts a string value to a pdfmethod data type value.

**Access**

Public

**Syntax**

```
instancename.of_pdfmethod ( as_source, ae_pdfmethod )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to pdfmethod datatype value. |
| *ae_pdfmethod* | Pdfmethod, passed by reference. A pdfmethod variable passed by reference which will hold the pdfmethod value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_pointer

**Description**

Converts a string value to a pointer data type value.

**Access**

Public

**Syntax**

```
instancename.of_pointer ( as_source, ae_pointer )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to pointer datatype value. |
| *ae_pointer* | Pointer, passed by reference. A pointer variable passed by reference which will hold the pointer value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_profileroutinekind

**Description**

Converts a string value to a profileroutinekind data type value.

**Access**

Public

**Syntax**

```
instancename.of_profileroutinekind ( as_source, ae_profileroutinekind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to profileroutinekind datatype value. |
| *ae_profileroutinekind* | Profileroutinekind, passed by reference. A profileroutinekind variable passed by reference which will hold the profileroutinekind value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_registryvaluetype

**Description**

Converts a string value to a registryvaluetype data type value.

**Access**

Public

**Syntax**

```
instancename.of_registryvaluetype ( as_source, ae_registryvaluetype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to registryvaluetype datatype value. |
| *ae_registryvaluetype* | Registryvaluetype, passed by reference. A registryvaluetype variable passed by reference which will hold the registryvaluetype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_richtexttoolbaractivation

**Description**

Converts a string value to a richtexttoolbaractivation data type value.

**Access**

Public

**Syntax**

```
instancename.of_richtexttoolbaractivation ( as_source, ae_richtexttoolbaractivation )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to richtexttoolbaractivation datatype value. |
| *ae_richtexttoolbaractivation* | Richtexttoolbaractivation, passed by reference. A richtexttoolbaractivation variable passed by reference which will hold the richtexttoolbaractivation value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_rowfocusind

**Description**

Converts a string value to a rowfocusind data type value.

**Access**

Public

**Syntax**

```
instancename.of_rowfocusind ( as_source, ae_rowfocusind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to rowfocusind datatype value. |
| *ae_rowfocusind* | Rowfocusind, passed by reference. A rowfocusind variable passed by reference which will hold the rowfocusind value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_saveastype

**Description**

Converts a string value to a saveastype data type value.

**Access**

Public

**Syntax**

```
instancename.of_saveastype ( as_source, ae_saveastype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to saveastype datatype value. |
| *ae_saveastype* | Saveastype, passed by reference. A saveastype variable passed by reference which will hold the saveastype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_savemetadata

**Description**

Converts a string value to a savemetadata data type value.

**Access**

Public

**Syntax**

```
instancename.of_savemetadata ( as_source, ae_savemetadata )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to savemetadata datatype value. |
| *ae_savemetadata* | Savemetadata, passed by reference. A savemetadata variable passed by reference which will hold the savemetadata value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_scriptkind

**Description**

Converts a string value to a scriptkind data type value.

**Access**

Public

**Syntax**

```
instancename.of_scriptkind ( as_source, ae_scriptkind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to scriptkind datatype value. |
| *ae_scriptkind* | Scriptkind, passed by reference. A scriptkind variable passed by reference which will hold the scriptkind value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_setpostype

**Description**

Converts a string value to a setpostype data type value.

**Access**

Public

**Syntax**

```
instancename.of_setpostype ( as_source, ae_setpostype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to setpostype datatype value. |
| *ae_setpostype* | Setpostype, passed by reference. A setpostype variable passed by reference which will hold the setpostype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_sizemode

**Description**

Converts a string value to a sizemode data type value.

**Access**

Public

**Syntax**

```
instancename.of_sizemode ( as_source, ae_sizemode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to sizemode datatype value. |
| *ae_sizemode* | Sizemode, passed by reference. A sizemode variable passed by reference which will hold the sizemode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_spacing

**Description**

Converts a string value to a spacing data type value.

**Access**

Public

**Syntax**

```
instancename.of_spacing ( as_source, ae_spacing )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to spacing datatype value. |
| *ae_spacing* | Spacing, passed by reference. A spacing variable passed by reference which will hold the spacing value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_sqlfunction

**Description**

Converts a string value to a sqlfunction data type value.

**Access**

Public

**Syntax**

```
instancename.of_sqlfunction ( as_source, ae_sqlfunction )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to sqlfunction datatype value. |
| *ae_sqlfunction* | Sqlfunction, passed by reference. A sqlfunction variable passed by reference which will hold the sqlfunction value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_sqlpreviewfunction

**Description**

Converts a string value to a sqlpreviewfunction data type value.

**Access**

Public

**Syntax**

```
instancename.of_sqlpreviewfunction ( as_source, ae_sqlpreviewfunction )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to sqlpreviewfunction datatype value. |
| *ae_sqlpreviewfunction* | Sqlpreviewfunction, passed by reference. A sqlpreviewfunction variable passed by reference which will hold the sqlpreviewfunction value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_SQLPreviewType

**Description**

Converts a string value to the SQLPreviewType enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_SQLPreviewType ( originalvalue, sqlpreview )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *originalvalue* | String to be converted to the SQLPreviewType enumerated data type. Valid values are: |
|  | Insert Update Delete Retrieve |
| *sqlpreview* | SQLPreviewType variable into which the function returns the value (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds, -1 if *originalvalue* is not a valid value, and NULL if *originalvalue* is NULL.

**Examples**

This example calls the of_SQLPreviewType function:

```
SQLPreviewType   lsql_type
String    ls_statement

ls_statement = "Insert"
inv_conversion.of_SQLPreviewType &
   (ls_statement, lsql_type)
```

### of_stgreadmode

**Description**

Converts a string value to a stgreadmode data type value.

**Access**

Public

**Syntax**

```
instancename.of_stgreadmode ( as_source, ae_stgreadmode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to stgreadmode datatype value. |
| *ae_stgreadmode* | Stgreadmode, passed by reference. A stgreadmode variable passed by reference which will hold the stgreadmode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_stgsharemode

**Description**

Converts a string value to a stgsharemode data type value.

**Access**

Public

**Syntax**

```
instancename.of_stgsharemode ( as_source, ae_stgsharemode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to stgsharemode datatype value. |
| *ae_stgsharemode* | Stgsharemode, passed by reference. A stgsharemode variable passed by reference which will hold the stgsharemode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_String

Converts various data types to a string. There are two syntaxes, depending on the original data type:

| To | Use |
| --- | --- |
| Convert a boolean to a string | Syntax 1 |
| Convert SQLPreviewType, ToolbarAlignment, Icon, Button, DWItemStatus, WindowState, or OSTypes to a string | Syntax 2 |

| Syntax 1 | To convert a boolean to a string |
| --- | --- |

**Description**

Creates a string from a boolean.

**Access**

Public

**Syntax**

```
instancename.of_String ( boolean {, returntype } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *boolean* | Boolean value to be converted to a string |
| *returntype* (optional) | String specifying how the function formats the return value. Valid values are: |
|  | • TRUEFALSE Returns TRUE or FALSE (default) |
|  | • TF Returns T or F |
|  | • YESNO Returns YES or NO |
|  | • YN Returns Y or N |
|  | • ZEROONE Returns 1 or 0 |

**Return value**

String. Returns a string corresponding to the passed boolean value. The string’s contents vary depending on the *returntype* argument.

**Usage**

Use Syntax 2 to convert a SQLPreviewType, ToolbarAlignment, Icon, Button, DWItemStatus, WindowState, or OSTypes to a string.

**Examples**

This example calls the of_String function:

```
Date      ldt_date
Boolean   lb_leapyear

ldt_date = Today( )
lb_leapyear = inv_datetime.of_IsLeapYear(ldt_date)
MessageBox("Leap Year Test", &
   "Leap year = " + &
   inv_conversion.of_String(lb_leapyear,’YESNO’))
```

| Syntax 2 | To convert a SQLPreviewType, ToolbarAlignment, Icon, Button, |
| --- | --- |

**DWItemStatus, WindowState, or OSTypes**

**Description**

Creates a string from a SQLPreviewType, ToolbarAlignment, Icon, Button, DWItemStatus, WindowState, or OSTypes enumerated variable.

**Access**

Public

**Syntax**

```
instancename.of_String ( input )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *input* | SQLPreviewType, ToolbarAlignment, Icon, Button, DWItemStatus, WindowState, or OSTypes enumerated variable to be converted to a string |

**Return value**

String. Returns values as follows:

- **If** ***input*** **is a SQLPreviewType** Returns one of the following values:

Delete Insert Retrieve Update ! (invalid argument)

Returns one of the following values:

- **If** ***input*** **is a ToolbarAlignment** Returns one of the following values:

Bottom Floating Left Right Top ! (invalid argument)

- **If** ***input*** **is an Icon** Returns one of the following values:

None Information StopSign Information Exclamation ! (invalid argument)

- **If** ***input*** **is a Button** Returns one of the following values:

OK OKCancel YesNo YesNoCancel RetryCancel AbortRetryIgnore ! (invalid argument)

- **If** ***input*** **is a DWItemStatus** Returns one of the following values:

DataModified New NewModified NotModified ! (invalid argument)

- **If** ***input*** **is a WindowState** Returns one of the following values:

Maximized Minimized Normal ! (invalid argument)

- **If** ***input*** **is an OSTypes** Returns one of the following values:

AIX HPUX Macintosh (obsolete) OSF1 (obsolete) SOL2 Windows WindowsNT ! (invalid argument)

**Usage**

Call this function to convert a SQLPreviewType, ToolbarAlignment, Icon, Button, DWItemStatus, WindowState, or OSTypes enumerated variable to a string.

Use Syntax 1 to convert a boolean to a string.

**Examples**

This example calls the of_String function to convert a ToolbarAlignment to a string:

```
String    ls_string

ls_string = inv_conversion.of_String &
   (gnv_app.of_GetFrame().ToolbarAlignment)
```

### of_syncprocesstype

**Description**

Converts a string value to a syncprocesstype data type value.

**Access**

Public

**Syntax**

```
instancename.of_syncprocesstype ( as_source, ae_syncprocesstype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to syncprocesstype datatype value. |
| *ae_syncprocesstype* | Syncprocesstype, passed by reference. A syncprocesstype variable passed by reference which will hold the syncprocesstype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_textcase

**Description**

Converts a string value to a textcase data type value.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_textcase ( as_source, ae_textcase )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to textcase datatype value. |
| *ae_textcase* | Textcase, passed by reference. A textcase variable passed by reference which will hold the textcase value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

**Syntax 2**

Converts the textcase enumerated datatype to a readable string representation.

Access: Public

**Syntax**

```
instancename.of_textcase ( ae_textcase )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *ae_textcase* | Textcase. The textcase value to be converted to a string. |

**Return value**

String. A string representation of the textcase value. If ae_textcase is NULL, the function returns NULL. If ae_textcase is Invalid, the function returns '!'.

### of_textstyle

**Description**

Converts a string value to a textstyle data type value.

**Access**

Public

**Syntax**

```
instancename.of_textstyle ( as_source, ae_textstyle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to textstyle datatype value. |
| *ae_textstyle* | Textstyle, passed by reference. A textstyle variable passed by reference which will hold the textstyle value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_Time

**Description**

Converts a string value in time or datetime format to a time data type.

**Access**

Public

**Syntax**

```
instancename.of_Time ( string )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *string* | String in time or datetime format to be converted to a time data type |

**Return value**

Time. Returns a time if the function succeeds, 00:00:00.000000 if *string* is an invalid time or datetime, and NULL if *string* is NULL.

**Examples**

This example calls the of_Time function:

```
String    ls_datetimeval = "07/28/71 12:35:14"
Date      ld_date
Time      ltm_time
n_cst_conversion   lnv_conversion

ld_date = lnv_conversion.of_Date(ls_datetimeval)
ltm_time = lnv_conversion.of_Time(ls_datetimeval)
...
```

### of_timerkind

**Description**

Converts a string value to a timerkind data type value.

**Access**

Public

**Syntax**

```
instancename.of_timerkind ( as_source, ae_timerkind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to timerkind datatype value. |
| *ae_timerkind* | Timerkind, passed by reference. A timerkind variable passed by reference which will hold the timerkind value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_ToolbarAlignment

**Description**

Converts a string value to the ToolbarAlignment enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_ToolbarAlignment ( originalvalue, toolbaralign )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *originalvalue* | String to be converted to the SQLPreviewType enumerated data type. Valid values are: |
|  | Bottom Floating Left Right Top |
| *toolbaralign* | ToolbarAlignment variable into which the function returns the value (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds, -1 if *originalvalue* is not a valid value, and NULL if *originalvalue* is NULL.

**Examples**

This example calls the of_ToolbarAlignment function:

```
ToolbarAlignment   le_alignment
Integer            li_index, li_rc
n_cst_conversion   lnv_conversion

li_index = of_GetListBoxIndex &
   (lb_toolbar.SelectedItem())
IF li_index > 0 THEN
   li_rc = lnv_conversion.of_ToolbarAlignment &
   (This.text, le_alignment)
   IF li_rc = 1 THEN
   istr_toolbar[li_index].e_alignment = &
      le_alignment
   END IF
END IF
```

### of_toolbarstyle

**Description**

Converts a string value to a toolbarstyle data type value.

**Access**

Public

**Syntax**

```
instancename.of_toolbarstyle ( as_source, ae_toolbarstyle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to toolbarstyle datatype value. |
| *ae_toolbarstyle* | Toolbarstyle, passed by reference. A toolbarstyle variable passed by reference which will hold the toolbarstyle value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_traceactivity

**Description**

Converts a string value to a traceactivity data type value.

**Access**

Public

**Syntax**

```
instancename.of_traceactivity ( as_source, ae_traceactivity )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to traceactivity datatype value. |
| *ae_traceactivity* | Traceactivity, passed by reference. A traceactivity variable passed by reference which will hold the traceactivity value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_tracecategory

**Description**

Converts a string value to a tracecategory data type value.

**Access**

Public

**Syntax**

```
instancename.of_tracecategory ( as_source, ae_tracecategory )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to tracecategory datatype value. |
| *ae_tracecategory* | Tracecategory, passed by reference. A tracecategory variable passed by reference which will hold the tracecategory value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_treenavigation

**Description**

Converts a string value to a treenavigation data type value.

**Access**

Public

**Syntax**

```
instancename.of_treenavigation ( as_source, ae_treenavigation )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to treenavigation datatype value. |
| *ae_treenavigation* | Treenavigation, passed by reference. A treenavigation variable passed by reference which will hold the treenavigation value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_trigevent

**Description**

Converts a string value to a trigevent data type value.

**Access**

Public

**Syntax**

```
instancename.of_trigevent ( as_source, ae_trigevent )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to trigevent datatype value. |
| *ae_trigevent* | Trigevent, passed by reference. A trigevent variable passed by reference which will hold the trigevent value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_typecategory

**Description**

Converts a string value to a typecategory data type value.

**Access**

Public

**Syntax**

```
instancename.of_typecategory ( as_source, ae_typecategory )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to typecategory datatype value. |
| *ae_typecategory* | Typecategory, passed by reference. A typecategory variable passed by reference which will hold the typecategory value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_userobjects

**Description**

Converts a string value to a userobjects data type value.

**Access**

Public

**Syntax**

```
instancename.of_userobjects ( as_source, ae_userobjects )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to userobjects datatype value. |
| *ae_userobjects* | Userobjects, passed by reference. A userobjects variable passed by reference which will hold the userobjects value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_valschemetype

**Description**

Converts a string value to a valschemetype data type value.

**Access**

Public

**Syntax**

```
instancename.of_valschemetype ( as_source, ae_valschemetype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to valschemetype datatype value. |
| *ae_valschemetype* | Valschemetype, passed by reference. A valschemetype variable passed by reference which will hold the valschemetype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_varaccess

**Description**

Converts a string value to a varaccess data type value.

**Access**

Public

**Syntax**

```
instancename.of_varaccess ( as_source, ae_varaccess )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to varaccess datatype value. |
| *ae_varaccess* | Varaccess, passed by reference. A varaccess variable passed by reference which will hold the varaccess value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_variablecardinalitytype

**Description**

Converts a string value to a variablecardinalitytype data type value.

**Access**

Public

**Syntax**

```
instancename.of_variablecardinalitytype ( as_source, ae_variablecardinalitytype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to variablecardinalitytype datatype value. |
| *ae_variablecardinalitytype* | Variablecardinalitytype, passed by reference. A variablecardinalitytype variable passed by reference which will hold the variablecardinalitytype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_variablekind

**Description**

Converts a string value to a variablekind data type value.

**Access**

Public

**Syntax**

```
instancename.of_variablekind ( as_source, ae_variablekind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to variablekind datatype value. |
| *ae_variablekind* | Variablekind, passed by reference. A variablekind variable passed by reference which will hold the variablekind value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_vtextalign

**Description**

Converts a string value to a vtextalign data type value.

**Access**

Public

**Syntax**

```
instancename.of_vtextalign ( as_source, ae_vtextalign )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to vtextalign datatype value. |
| *ae_vtextalign* | Vtextalign, passed by reference. A vtextalign variable passed by reference which will hold the vtextalign value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_vtickmarks

**Description**

Converts a string value to a vtickmarks data type value.

**Access**

Public

**Syntax**

```
instancename.of_vtickmarks ( as_source, ae_vtickmarks )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to vtickmarks datatype value. |
| *ae_vtickmarks* | Vtickmarks, passed by reference. A vtickmarks variable passed by reference which will hold the vtickmarks value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_webpagingmethod

**Description**

Converts a string value to a webpagingmethod data type value.

**Access**

Public

**Syntax**

```
instancename.of_webpagingmethod ( as_source, ae_webpagingmethod )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to webpagingmethod datatype value. |
| *ae_webpagingmethod* | Webpagingmethod, passed by reference. A webpagingmethod variable passed by reference which will hold the webpagingmethod value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_weekday

**Description**

Converts a string value to a weekday data type value.

**Access**

Public

**Syntax**

```
instancename.of_weekday ( as_source, ae_weekday )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to weekday datatype value. |
| *ae_weekday* | Weekday, passed by reference. A weekday variable passed by reference which will hold the weekday value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_windowanimationstyle

**Description**

Converts a string value to a windowanimationstyle data type value.

**Access**

Public

**Syntax**

```
instancename.of_windowanimationstyle ( as_source, ae_windowanimationstyle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to windowanimationstyle datatype value. |
| *ae_windowanimationstyle* | Windowanimationstyle, passed by reference. A windowanimationstyle variable passed by reference which will hold the windowanimationstyle value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_WindowState

**Description**

Converts a string value to a WindowState enumerated data type.

**Access**

Public

**Syntax**

```
instancename.of_WindowState ( string, windowstate )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *string* | String or integer to be converted to a windowstate. *String* must be one of the following: |
|  | Maximized Minimized Normal |
| *windowstate* | WindowState enumerated data type to contain the converted string (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Examples**

This example is from the n_cst_error of_GetError function:

```
WindowState   lws_state
Integer       li_return
n_cst_conversion lnv_conversion

li_return = lnv_conversion.of_WindowState &
   ("maximized", lws_state)
```

### of_windowtype

**Description**

Converts a string value to a windowtype data type value.

**Access**

Public

**Syntax**

```
instancename.of_windowtype ( as_source, ae_windowtype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to windowtype datatype value. |
| *ae_windowtype* | Windowtype, passed by reference. A windowtype variable passed by reference which will hold the windowtype value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.

### of_writemode

**Description**

Converts a string value to a writemode data type value.

**Access**

Public

**Syntax**

```
instancename.of_writemode ( as_source, ae_writemode )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_conversion |
| *as_source* | String. The string value to be converted to writemode datatype value. |
| *ae_writemode* | Writemode, passed by reference. A writemode variable passed by reference which will hold the writemode value that the string value was converted to. |

**Return value**

Integer. 1 if a successful conversion was made. If as_source value is NULL, function returns -1 If as_source value is Invalid, function returns -1.
