# n_cst_inifile

**Description**

INI file service. Provides functions to access and update INI files.

**Ancestry**

![Figure](images/ref2-p467-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Object relationships**

- [n_cst_filesrv](n_cst_filesrv.md)
- [n_cst_string](n_cst_string.md)

**Usage**

To use this object:

1. Define an instance variable for n_cst_inifile. For MDI applications, this might be a frame-level instance variable (inv_ini_handler in this example), created in the frame window’s Open event:

   ```
   n_cst_inifile  inv_ini_handler
   ```

Because PFC defines this object with the autoinstantiate option, you don’t need to code CREATE or DESTROY statements.

2. Use n_cst_inifile object functions as needed:
   - Use of_GetKeys to retrieve all keys for a specific section
   - Use of_GetSections to retrieve all section names in the INI file
   - Use of_Delete to remove an entire section from the INI file

**Using ProfileInt, ProfileString, and SetProfileString** Use the ProfileInt, ProfileString, and SetProfileString PowerScript functions to access INI file entries one at a time.

**See also**

n_cst_string

## Events

N_cst_inifile contains a precoded event:

Constructor

### Constructor

**Description**

Initializes the is_lineend instance variable with the platform-specific line end character or characters.

**Usage**

This event executes when the object is created.

## Functions

N_cst_inifile contains object functions:

- of_Delete
- of_GetKeys
- of_GetLineEnding
- of_GetSections
- of_SetLineEnding

### of_Delete

**Description**

Removes the specified entry or section from an INI file.

**Access**

Public

**Syntax**

```
instancename.of_Delete ( file, section {, key } )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_inifile |
| *file* | String naming the INI file containing the entry or section to be deleted |
| *section* | String naming the section to be deleted. If you also specify *key*, this value names the section containing the entry to be deleted |
| *key* (optional) | String naming the INI file entry to be deleted |

**Return value**

Integer. Returns one of the following values:

1. Function succeeded; entry was deleted
1. Section does not exist within *file*

-1 File error -2 *file* does not exist

**Examples**

This example removes the CustApp section:

```
Integer   li_return

li_return = inv_ini_handler.of_Delete &
   (gnv_app.of_GetAppINIFile(), "CustApp")
IF li_return <> 1 THEN
   MessageBox("Delete", "Entry not deleted")
END IF
```

### of_GetKeys

**Description**

Retrieves all keys from a specified section.

**Access**

Public

**Syntax**

```
instancename.of_GetKeys ( file, sectionname, keynames )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_inifile |
| *file* | String naming the INI file containing the section whose keys are retrieved |
| *sectionname* | String containing the name of the section whose keys are retrieved |
| *keynames* | String array to contain the section’s key names (passed by reference) |

**Return value**

Integer. Returns one of the following values:

- >0 The number of keys retrieved
- 0 Either there are no keys that exist for the section or the section does not exist
- -1 File error
- -2 The INI file has not been specified or does not exist

**Usage**

You can use the list of keys to retrieve all of the section's key values.

**Examples**

This example retrieves all the keys in the CustApp section and displays the list in the lb_keys ListBox:

```
String   ls_keys[ ]
Integer  li_count, li_size

li_size = inv_ini_handler.of_GetKeys &
   (gnv_app.of_GetAppINIFile(), "CustApp", ls_keys)
lb_keys.Reset()
FOR li_count = 1 to li_size
   lb_keys.AddItem(ls_keys[li_count])
NEXT
```

### of_GetLineEnding

**Description**

Retrieves the platform-specific character or characters used to end lines in an INI file.

**Access**

Public

**Syntax**

```
instancename.of_GetLineEnding ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_inifile |

**Return value**

String. Returns the line end character or characters.

**Examples**

This example calls the of_GetLineEnding function:

```
n_cst_inifile  lnv_ini
String  ls_lineend

ls_lineend = lnv_ini.of_GetLineEnding()
CHOOSE CASE ls_lineend
CASE "~n"
   MessageBox("Line Ending",  &
      "Newline - UNIX")
CASE "~r"
...
CASE "~r~n"
...
```

### of_GetSections

**Description**

Retrieves all sections from an INI file.

**Access**

Public

**Syntax**

```
instancename.of_GetSections ( file, sectionnames )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_inifile |
| *file* | String naming the INI file whose sections are retrieved |
| *sectionnames* | String array into which the function places the section names (passed by reference) |

**Return value**

Integer. Returns one of the following values:

>0 The number of sections retrieved -1 File error -2 The INI file has not been specified or does not exist

**Usage**

You can then use the list of sections to retrieve a section’s keys.

**Examples**

This example retrieves all the sections in the specified INI file and displays the list in the lb_sections ListBox:

```
String  ls_section[ ]
Integer li_count, li_size

li_size = inv_ini_handler.of_GetSections  &
   (gnv_app.of_GetAppINIFile(), ls_section)
lb_sections.Reset( )
FOR li_count = 1 to li_size
   lb_sections.AddItem(ls_section[li_count])
NEXT
```

### of_SetLineEnding

**Description**

Specifies the platform-specific character or characters used to end lines in an INI file.

**Access**

Public

**Syntax**

```
instancename.of_SetLineEnding ( character )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_inifile |
| *character* | String containing the line end character or characters: |
|  | **• ~r~n** Carriage return - newline (Windows) |

**Return value**

Integer. Returns 1 if the function succeeds -1 if an error occurs.

**Examples**

This example is from the n_cst_inifile Constructor event:

```
Environment  lenv_obj

GetEnvironment (lenv_obj)
if IsValid (lenv_obj) then
   choose case lenv_obj.ostype
       case aix!, osf1!, hpux!, aix!
          of_SetLineEnding("~n")
...
case else
      of_SetLineEnding("~r~n")
   end choose
else
   of_SetLineEnding ("~r~n")
end if
```
