# n_cst_platformunicode

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Unicode Cross Platform service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_platform → n_cst_platform → pfc_n_cst_platformunicode → n_cst_platformunicode`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

N_cst_platformunicode includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| FOLDER_ADMINTOOLS | &lt;user name>\Start Menu\Programs\Administrative Tools. | Integer | Public |
| FOLDER_ALTSTARTUP | non-localized Startup. | Integer | Public |
| FOLDER_APPDATA | &lt;user name>\Application Data. | Integer | Public |
| FOLDER_APPLICATIONDATA | Constant set to 26 | Integer | Public |
| FOLDER_BITBUCKET | Constant set to 10 | Integer | Public |
| FOLDER_CDBURN_AREA | Temporary burn directory. | Integer | Public |
| FOLDER_COMMON_ADMINTOOLS | All Users\Start Menu\Programs\Administrative Tools. | Integer | Public |
| FOLDER_COMMON_ALTSTARTUP | non-localized common Startup. | Integer | Public |
| FOLDER_COMMON_APPDATA | All Users\Application Data. | Integer | Public |
| FOLDER_COMMON_APPLICATIONDATA | Constant set to 35 | Integer | Public |
| FOLDER_COMMON_DESKTOPDIRECTORY | All Users\Desktop. | Integer | Public |
| FOLDER_COMMON_DOCUMENTS | All Users\Documents. | Integer | Public |
| FOLDER_COMMON_FAVORITES | Constant set to 31 | Integer | Public |
| FOLDER_COMMON_MUSIC | All Users\My Music. | Integer | Public |
| FOLDER_COMMON_OEM_LINKS | OEM Links. | Integer | Public |
| FOLDER_COMMON_PICTURES | All Users\My Pictures. | Integer | Public |
| FOLDER_COMMON_PROGRAMS | All Users\Start Menu\Programs. | Integer | Public |
| FOLDER_COMMON_STARTMENU | All Users\Start Menu. | Integer | Public |
| FOLDER_COMMON_STARTUP | All Users\Startup. | Integer | Public |
| FOLDER_COMMON_TEMPLATES | All Users\Templates. | Integer | Public |
| FOLDER_COMMON_VIDEO | All Users\My Video. | Integer | Public |
| FOLDER_CONNECTIONS | Network and Dial-up Connections. | Integer | Public |
| FOLDER_CONTROLPANEL | My Computer\Control Panel. | Integer | Public |
| FOLDER_COOKIES | Constant set to 33 | Integer | Public |
| FOLDER_DESKTOP | &lt;desktop>. | Integer | Public |
| FOLDER_DESKTOPDIRECTORY | &lt;user name>\Desktop. | Integer | Public |
| FOLDER_DRIVES | My Computer. | Integer | Public |
| FOLDER_FAVORITES | &lt;user name>\Favorites. | Integer | Public |
| FOLDER_FONTS | windows\fonts. | Integer | Public |
| FOLDER_HISTORY | Constant set to 34 | Integer | Public |
| FOLDER_INTERNET_CACHE | Constant set to 32 | Integer | Public |
| FOLDER_INTERNETEXPLORER | Internet Explorer (icon on desktop) | Integer | Public |
| FOLDER_LOCAL_APPDATA | &lt;user name>\Local Settings\Application Data (non-roaming) | Integer | Public |
| FOLDER_LOCAL_APPLICATIONDATA | Constant set to 28 | Integer | Public |
| FOLDER_MYDOCUMENTS | My Documents. | Integer | Public |
| FOLDER_MYMUSIC | "My Music" folder. | Integer | Public |
| FOLDER_MYNETWORKPLACES | Constant set to 18 | Integer | Public |
| FOLDER_MYPICTURES | C:\Program Files\My Pictures. | Integer | Public |
| FOLDER_MYVIDEO | "My Videos" folder. | Integer | Public |
| FOLDER_NETHOOD | &lt;user name>\nethood. | Integer | Public |
| FOLDER_NETWORK | Network Neighborhood (My Network Places) | Integer | Public |
| FOLDER_PERSONAL | Constant set to 5 | Integer | Public |
| FOLDER_PRINTERS | My Computer\Printers. | Integer | Public |
| FOLDER_PRINTHOOD | &lt;user name>\PrintHood. | Integer | Public |
| FOLDER_PROFILE | USERPROFILE. | Integer | Public |
| FOLDER_PROGRAM_FILES | C:\Program Files. | Integer | Public |
| FOLDER_PROGRAM_FILES_COMMON | C:\Program Files\Common. | Integer | Public |
| FOLDER_PROGRAM_FILES_COMMONX86 | x86 Program Files\Common on RISC. | Integer | Public |
| FOLDER_PROGRAM_FILESX86 | x86 C:\Program Files on RISC. | Integer | Public |
| FOLDER_PROGRAMS | Start Menu\Programs. | Integer | Public |
| FOLDER_RECENT | &lt;user name>\Recent. | Integer | Public |
| FOLDER_RECYCLEBIN | &lt;desktop>\Recycle Bin. | Integer | Public |
| FOLDER_RESOURCES | Resources directory. | Integer | Public |
| FOLDER_RESOURCES_LOCALIZED | Localized resources directory. | Integer | Public |
| FOLDER_SENDTO | &lt;user name>\SendTo. | Integer | Public |
| FOLDER_STARTMENU | &lt;user name>\Start Menu. | Integer | Public |
| FOLDER_STARTUP | Start Menu\Programs\Startup. | Integer | Public |
| FOLDER_SYSTEM | GetSystemDirectory() | Integer | Public |
| FOLDER_SYSTEMX86 | x86 system directory on RISC. | Integer | Public |
| FOLDER_TEMPLATES | &lt;user name>\Templates. | Integer | Public |
| FOLDER_WINDOWS | GetWindowsDirectory() | Integer | Public |
| HRESULT_E_FAIL | 0x80004005. | ULong | Public |
| HRESULT_E_FILE_NOT_FOUND | 0x80070002. | ULong | Public |
| HRESULT_E_INVALIDARG | 0x80070057. | ULong | Public |
| HRESULT_S_OK | 0x00000000. | ULong | Public |
| MAX_FILE_AND_PATH_LENGTH | Constant set to 259 | Integer | Public |
| MAX_PATH_LENGTH | Constant set to 247 | Integer | Public |

## Events

N_cst_platformunicode includes these events:

### Constructor

**Description**

Unicode platform object.

**Syntax**

```
instancename.EVENT Constructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

None.

## Functions

N_cst_platformunicode includes these functions:

### of_FindWindow

**Description**

Return the handle of the window passed in by window name (Window Title)

**Access**

Public

**Syntax**

```
instancename.of_FindWindow ( as_window_name )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |
| *as_window_name* | String. window text to search for. |

**Return value**

UnsignedLong. ulong - window handle.

### of_GetActiveWindowBorder

**Description**

Get the size of the active window's border.

**Access**

Public

**Syntax**

```
instancename.of_GetActiveWindowBorder ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

Integer. int.

### of_GetComputerName

**Description**

Return the the computer name the user is using.

**Access**

Public

**Syntax**

```
instancename.of_GetComputerName ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

String. computer name.

### of_GetFreeMemory

**Description**

returns the number of bytes of memory currently available.

**Access**

Public

**Syntax**

```
instancename.of_GetFreeMemory ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

LongLong. bytes of memory.

### of_GetKnownFolderPath

**Description**

Obtains the path to a windows folder using the SHGetFolderPath Windows API call. The folder code contains the CLSID of the requested folder. Notes: Public integer constant instance vars (their names all begin with FOLDER_xxxxxx) can be used for ai_folderpath. The ShGetFolderPath API is deprecated. It was superceded in Windows Vista by SHGetKnownFolderPath. When PB becomes no longer supported on versions of Windows prior to Vista, the code here can be adapted to call the newer Windows API.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_GetKnownFolderPath ( ai_foldercode, as_folderpath )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |
| *ai_foldercode* | Integer. identifies the requested folder. |
| *as_folderpath* | String, passed by reference. (by ref) - receives the requested folder path. |

**Return value**

Integer. success (0) - error (-1) ai_foldercode is valid, but the folder does not exist - error (-2) ai_foldercode is invalid - error (-3) unknown HResult returned by the SHGetFolderPath API.

**Syntax 2**

Access: Public

**Syntax**

```
instancename.of_GetKnownFolderPath ( ai_foldercode, ab_currentpath, as_folderpath )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |
| *ai_foldercode* | Integer. identifies the requested folder. |
| *ab_currentpath* | Boolean. TRUE -> Identify current path FALSE -> Identify default path, if it exists. |
| *as_folderpath* | String, passed by reference. (by ref) - receives the requested folder path. |

**Return value**

Integer. success (0) - error (-1) ai_foldercode is valid, but the folder does not exist - error (-2) ai_foldercode is invalid - error (-3) The file cannot be found - error (-4) unknown HResult returned by the SHGetFolderPath API.

### of_GetPhysicalMemory

**Description**

Return the total physical memory (RAM) installed in the machine.

**Access**

Public

**Syntax**

```
instancename.of_GetPhysicalMemory ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

LongLong. total memory.

### of_GetSystemDirectory

**Description**

Return the window's system directory.

**Access**

Public

**Syntax**

```
instancename.of_GetSystemDirectory ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

String. system directory "" if error.

### of_GetTextSize

**Description**

Calculates the size of a text object in pixels.

**Access**

Public

**Syntax**

```
instancename.of_GetTextSize ( aw_obj, as_text, as_fontface, ai_fontsize, ab_bold, ab_italic, ab_underline, ai_height, ai_width )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |
| *aw_obj* | Window, passed by reference. Window where temporary text will be created. |
| *as_text* | String. The text to be sized. |
| *as_fontface* | String. The font used. |
| *ai_fontsize* | Integer. The point size of the font. |
| *ab_bold* | Boolean. True - Bold, False - Normal. |
| *ab_italic* | Boolean. True - Yes, False - No. |
| *ab_underline* | Boolean. True - Yes, False - No. |
| *ai_height* | Integer, passed by reference. the height of the object in pixels. |
| *ai_width* | Integer, passed by reference. the width of the object in pixels. |

**Return value**

Integer. Integer 1 if successful, -1 if an error occurrs.

**Usage**

For text with line breaks (`~r~n`, `~n`, or `~r`), *ai_width* is the width of the widest line and *ai_height* the height of all the lines; an empty line is as high as a line with a space. Earlier versions measured the text as one line.

### of_GetUserID

**Description**

Return the user id/name currently logged into a network.

**Access**

Public

**Syntax**

```
instancename.of_GetUserID ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

String. user id/name.

### of_GetWindowsDirectory

**Description**

Return the window's directory.

**Access**

Public

**Syntax**

```
instancename.of_GetWindowsDirectory ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

String. windows directoy "" if error.

### of_GetWindowText

**Description**

Return the window title text.

**Access**

Public

**Syntax**

```
instancename.of_GetWindowText ( ai_handle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |
| *ai_handle* | UnsignedInteger. |

**Return value**

String. window text "" if error.

### of_maxpath

**Description**

Unicode platform object.

**Access**

Public

**Syntax**

```
instancename.of_maxpath ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |

**Return value**

Integer.

### of_PlaySound

**Description**

Play a sound file.

**Access**

Public

**Syntax**

```
instancename.of_PlaySound ( as_file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_platformunicode |
| *as_file* | String. sound file to play. |

**Return value**

Integer.
