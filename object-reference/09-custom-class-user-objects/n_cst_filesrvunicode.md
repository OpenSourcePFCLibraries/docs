# n_cst_filesrvunicode

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Unicode File handler service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_filesrv → n_cst_filesrv → pfc_n_cst_filesrvunicode → n_cst_filesrvunicode`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Events

N_cst_filesrvunicode includes these events:

### Constructor

**Description**

Set the instance variables for the directory separator and wildcard for all files for this OS.

**Syntax**

```
instancename.EVENT Constructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |

**Return value**

None.

## Functions

N_cst_filesrvunicode includes these functions:

### of_ChangeDirectory

**Description**

Change the current working directory.

**Access**

Public

**Syntax**

```
instancename.of_ChangeDirectory ( as_newdirectory )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_newdirectory* | String. The name of the new working directory; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_ConvertFileDatetimeToPB

**Description**

Convert a sytem file type to PowerBuilder Date and Time.

**Access**

Protected

**Syntax**

```
instancename.of_ConvertFileDatetimeToPB ( astr_filetime, ad_filedate, at_filetime )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *astr_filetime* | os_filedatetime. The os_filedatetime structure containing the system date/time for the file. |
| *ad_filedate* | Date, passed by reference. The file date in PowerBuilder Date format passed by reference. |
| *at_filetime* | Time, passed by reference. The file time in PowerBuilder Time format passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_ConvertPBDatetimeToFile

**Description**

Convert PowerBuilder Date and Time to the sytem file type.

**Access**

Protected

**Syntax**

```
instancename.of_ConvertPBDatetimeToFile ( ad_filedate, at_filetime, astr_filetime )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *ad_filedate* | Date. The file date in PowerBuilder Date format. |
| *at_filetime* | Time. The file time in PowerBuilder Time format. |
| *astr_filetime* | os_filedatetime, passed by reference. The os_filedatetime structure to contain the system date/time for the file, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_CreateDirectory

**Description**

Create a new directory.

**Access**

Public

**Syntax**

```
instancename.of_CreateDirectory ( as_directoryname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_directoryname* | String. The name of the directory to be created; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_DirectoryExists

**Description**

Check if the specified directory exists.

**Access**

Public

**Syntax**

```
instancename.of_DirectoryExists ( as_directoryname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_directoryname* | String. The name of the directory to be checked; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

Boolean. True if the directory exists, False if it does not.

### of_DirList

**Description**

List the contents of a directory (Name, Date, Time, and Size).

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_DirList ( as_filespec, al_filetype, anv_dirlist )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filespec* | String. The file spec. to list (including wildcards); an absolute path may be specified or it will be relative to the current working directory. |
| *al_filetype* | Long. A number representing one or more types of files to include in the list, see PowerBuilder Help on the DirList listbox function for an explanation. |
| *anv_dirlist* | n_cst_dirattrib array, passed by reference. An array of n_cst_dirattrib structure whichl will contain the results, passed by reference. |

**Return value**

Long. The number of elements in anv_DirList if successful, -1 if an error occurrs.

**Syntax 2**

List the contents of a directory (Name).

Access: Public

**Syntax**

```
instancename.of_DirList ( as_filespec, as_dirlist )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filespec* | String. The file spec. to list (including wildcards); an absolute path may be specified or it will be relative to the current working directory. |
| *as_dirlist* | String array, passed by reference. An array of string whichl will contain the results, passed by reference. |

**Return value**

Long. The number of elements in as_DirList if successful, -1 if an error occurrs.

### of_FileRename

**Description**

Rename or move a file or directory.

**Access**

Public

**Syntax**

```
instancename.of_FileRename ( as_sourcefile, as_targetfile )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_sourcefile* | String. The file to rename. |
| *as_targetfile* | String. The new file name. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetAltFilename

**Description**

Get the alternate file name name for a Win32 long file.

**Access**

Public

**Syntax**

```
instancename.of_GetAltFilename ( as_longfilename )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_longfilename* | String. The long file name for which the alternate (short) file name is desired; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

String. The alternate file name (without the path), returns an empty string if an error occurrs.

### of_GetCreationDatetime

**Description**

Get the date and time a file was created.

**Access**

Public

**Syntax**

```
instancename.of_GetCreationDatetime ( as_filename, ad_date, at_time )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file for which you want its date and time; an absolute path may be specified or it will be relative to the current working directory. |
| *ad_date* | Date, passed by reference. The date the file was created, passed by reference. |
| *at_time* | Time, passed by reference. The time the file was created, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetCurrentDirectory

**Description**

Return the current working directory.

**Access**

Public

**Syntax**

```
instancename.of_GetCurrentDirectory ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |

**Return value**

String. string The current working directory, "" if error.

### of_GetDiskSpace

**Description**

Get space information about a drive.

**Access**

Public

**Syntax**

```
instancename.of_GetDiskSpace ( as_drive, al_totalspace, al_freespace )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_drive* | String. The letter of the drive to be checked. |
| *al_totalspace* | Long, passed by reference. The total number of bytes on the drive, passed by reference. |
| *al_freespace* | Long, passed by reference. The number of bytes free, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetDiskSpaceEX

**Description**

Get space information of more than 2G bytes about a drive.

**Access**

Public

**Syntax**

```
instancename.of_GetDiskSpaceEX ( as_drive, adec_totalspace, adec_freespace )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_drive* | String. The letter of the drive to be checked. |
| *adec_totalspace* | Decimal, passed by reference. The total number of bytes on the drive, passed by reference. |
| *adec_freespace* | Decimal, passed by reference. The number of bytes free, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetDriveType

**Description**

Determine the type of a drive.

**Access**

Public

**Syntax**

```
instancename.of_GetDriveType ( as_drive )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_drive* | String. The letter of the drive to be checked. |

**Return value**

ULong. The type of the drive: 2 - floppy drive, 3 - hard drive, 4 - network drive, 5 - cdrom drive, 6 - ramdisk, any other value is the result of an error.

### of_GetFileAttributes

**Description**

Get the attributes for a file.

**Access**

Public

**Syntax**

```
instancename.of_GetFileAttributes ( as_filename, ab_readonly, ab_hidden, ab_system, ab_subdirectory, ab_archive )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The file for which you want the attributes; an absolute path may be specified or it will be relative to the current working directory. |
| *ab_readonly* | Boolean, passed by reference. The Read-Only attribute, passed by reference. |
| *ab_hidden* | Boolean, passed by reference. The Hidden attribute, passed by reference. |
| *ab_system* | Boolean, passed by reference. The System attribute, passed by reference. |
| *ab_subdirectory* | Boolean, passed by reference. The Subdirectory attribute, passed by reference. |
| *ab_archive* | Boolean, passed by reference. The Archive attribute, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetFileSize

**Description**

Get the size (in bytes) of a file.

**Access**

Public

**Syntax**

```
instancename.of_GetFileSize ( as_filename )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file whose size is desired; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

Double. The size of the file if successful, -1 if an error occurrs.

### of_GetLastAccessDate

**Description**

Get the date a file was last accessed (opened). Note: This function only returns the Date because Last Access Time is not stored by the operating system.

**Access**

Public

**Syntax**

```
instancename.of_GetLastAccessDate ( as_filename, ad_date )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file for which you want its date; an absolute path may be specified or it will be relative to the current working directory. |
| *ad_date* | Date, passed by reference. The date the file was last accessed, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetLastWriteDatetime

**Description**

Get the date and time a file was last modified.

**Access**

Public

**Syntax**

```
instancename.of_GetLastWriteDatetime ( as_filename, ad_date, at_time )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file for which you want its date and time; an absolute path may be specified or it will be relative to the current working directory. |
| *ad_date* | Date, passed by reference. The date the file was last modified, passed by reference. |
| *at_time* | Time, passed by reference. The time the file was last modified, passed by reference. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_GetLongFilename

**Description**

Get the Win32 long file name for an alternate file name.

**Access**

Public

**Syntax**

```
instancename.of_GetLongFilename ( as_altfilename )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_altfilename* | String. The alternate (short) file name for which the long file name is desired; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

String. The long file name (without the path), returns an empty string if an error occurrs.

### of_maxpath

**Description**

List the contents of a directory (Name).

**Access**

Protected

**Syntax**

```
instancename.of_maxpath ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |

**Return value**

Long. The number of elements in as_DirList if successful, -1 if an error occurrs.

### of_RemoveDirectory

**Description**

Deleate a directory.

**Access**

Public

**Syntax**

```
instancename.of_RemoveDirectory ( as_directoryname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_directoryname* | String. The name of the directory to be deleted; an absolute path may be specified or it will be relative to the current working directory. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_SetCreationDatetime

**Description**

Set the Creation Date/Time stamp on a file.

**Access**

Public

**Syntax**

```
instancename.of_SetCreationDatetime ( as_filename, ad_date, at_time )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file to be updated. ad_FileDate The date to be set. at_FileTime The time to be set. |
| *ad_date* | Date. |
| *at_time* | Time. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_SetFileAttributes

**Description**

Set the attributes of a file. If null is passed for any of the attributes, it will not be changed.

**Access**

Public

**Syntax**

```
instancename.of_SetFileAttributes ( as_filename, ab_readonly, ab_hidden, ab_system, ab_archive )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The file whose attributes you want to set; an absolute path may be specified or it will be relative to the current working directory. |
| *ab_readonly* | Boolean. The new value for the Read-Only attribute. |
| *ab_hidden* | Boolean. The new value for the Hidden attribute. |
| *ab_system* | Boolean. The new value for the System attribute. |
| *ab_archive* | Boolean. The new value for the Archive attribute. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_SetLastAccessDate

**Description**

Set the Last Access Date on a file.

**Access**

Public

**Syntax**

```
instancename.of_SetLastAccessDate ( as_filename, ad_date )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file to be updated. ad_FileDate The date to be set. |
| *ad_date* | Date. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_SetLastWriteDatetime

**Description**

Set the Date/Time stamp on a file.

**Access**

Public

**Syntax**

```
instancename.of_SetLastWriteDatetime ( as_filename, ad_date, at_time )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_filesrvunicode |
| *as_filename* | String. The name of the file to be updated. ad_FileDate The date to be set. at_FileTime The time to be set. |
| *ad_date* | Date. |
| *at_time* | Time. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.
