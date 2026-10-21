# n_cst_security

**Description**

Security service. PFC can handle many of your application’s security needs. It includes administrative components and a runtime security object, n_cst_security. N_cst_security includes instance variables as well as precoded events and functions. This discussion describes only those functions you code in an application.

For complete information on security in PFC, see the *PFC User’s Guide*.

**Ancestry**

![Figure](images/ref2-p648-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Object relationships**

- [n_cst_string](n_cst_string.md)
- [n_ds](../08-standard-class-user-objects/n_ds.md)
- [n_tr](../08-standard-class-user-objects/n_tr.md)

**Usage**

To use the PFC security system, you must first define users and groups, then associate them with windows and controls, as described in the *PFC User’s Guide*.

To use n_cst_security in an application:

1. Create the object by calling the n_cst_appmanager of_SetSecurity function (this example is from an n_cst_appmanager pfc_Open event:

   ```
   this.of_SetSecurity(TRUE)
   ```

2. Establish a transaction object for the security database. This example assumes an itr_sec instance variable of type n_tr on n_cst_appmanager:

   ```
   itr_sec = CREATE n_tr
   CONNECT using itr_sec;
   ```

3. Initialize the security object by calling the of_InitSecurity function:

   ```
   this.inv_security.of_InitSecurity &
   (itr_sec, "EISAPP", &
      gnv_app.of_GetUserID(), "Default")
   ```

**N_cst_appmanager pfc_Open** The steps listed above might all be coded in the n_cst_appmanager pfc_Open event.

4. Disconnect from the database and destroy the transaction object when the application closes. This example might be coded in the n_cst_appmanager pfc_Close event:

   ```
   DISCONNECT using itr_sec;
   Destroy itr_sec
   ```

5. In the Open or pfc_PreOpen events of windows for which you want to apply security, call the of_SetSecurity function:

   ```
   IF NOT &
      gnv_app.inv_security.of_SetSecurity(this) THEN
      MessageBox("Security", &
         "Unable to set security")
      Close(this)
   END IF
   ```

**See also**

n_cst_appmanager

## Instance variables

N_cst_security includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| DISABLE | Constant set to 'D' | String | Public |
| ENABLE | Constant set to 'E' | String | Public |
| ib_initscanning |  | Boolean | Protected |
| ib_initsecurity |  | Boolean | Protected |
| ib_precache |  | Boolean | Protected |
| ids_apps |  | n_ds | Protected |
| ids_groups |  | n_ds | Protected |
| ids_info |  | n_ds | Protected |
| ids_items |  | n_ds | Protected |
| ids_updates |  | n_ds | Protected |
| ii_libcnt |  | Integer | Protected |
| ii_numgroups |  | Integer | Protected |
| il_numberofrows |  | Long | Protected |
| inv_string |  | n_cst_string | Protected |
| INVISIBLE | Constant set to 'I' | String | Public |
| is_app |  | String | Protected |
| is_currfilter |  | String | Protected |
| is_defaultgroup |  | String | Protected |
| is_disabledborder |  | String | Protected |
| is_enabledborder |  | String | Protected |
| is_keyword |  | String | Protected |
| is_liblist[ ] |  | String | Protected |
| is_separator |  | String | Protected |
| is_userID |  | String | Protected |
| itr_trans |  | n_tr | Protected |
| NOTSET | Constant set to '' | String | Public |

## Events

N_cst_security includes these events:

### Constructor

**Description**

Create all needed datastore objects.

**Syntax**

```
instancename.EVENT Constructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |

**Return value**

None.

### Destructor

**Description**

Destroy all created datastore objects.

**Syntax**

```
instancename.EVENT Destructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |

**Return value**

None.

## Functions

N_cst_security includes many precoded object functions. The functions you call from an application are documented here:

- of_addobject
- of_FindEntry
- of_GetPermissions
- of_GetTag
- of_GetType
- of_InitScanProcess
- of_InitSecurity
- of_LoadSecurity
- of_ScanControlArray
- of_ScanDatawindow
- of_ScanWindow
- of_SetControlArray
- of_SetControlStatus
- of_SetDataWindowColumns
- of_SetMenu
- of_SetMenuStatus
- of_SetSecurity
- of_SetState

### of_addobject

**Description**

Add an objects information to the template Datastore.

**Access**

Protected

**Syntax**

```
instancename.of_addobject ( as_app, as_winname, as_object, as_objecttype, as_desc )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_app* | String. application. |
| *as_winname* | String. window name. |
| *as_object* | String. object name. |
| *as_objecttype* | String. object type. |
| *as_desc* | String. description of object. |

**Return value**

Integer. integer; Return code from import string.

### of_FindEntry

**Description**

Used by the scanning process, if the entry is found then it is discarded from the datastore. We discard it so that it will not deleted or updated in the database.

**Access**

Protected

**Syntax**

```
instancename.of_FindEntry ( as_win, as_object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_win* | String. string; window to be found. |
| *as_object* | String. string; object to be found. |

**Return value**

Boolean. boolean (true if found otherwise false)

### of_GetPermissions

**Description**

Checks the security table to get the objects permission.

**Access**

Public

**Syntax**

```
instancename.of_GetPermissions ( as_object, as_control )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_object* | String. object to check security on. |
| *as_control* | String. Name of object/control to check security for. |

**Return value**

String. ENABLED, DISABLED, NOTSET, INVISIBLE '!' = Error.

### of_GetTag

**Description**

parses the passed string. If the string is empty it returns an empty string if the string contains a keyword that matches what is in ics_keyword (default is 'microhelp', default seperator is ';') then the value for the keyword is returned if none of the aboove is true then the original string is returned.

**Access**

Protected

**Syntax**

```
instancename.of_GetTag ( as_tag )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_tag* | String. string; Tag value. |

**Return value**

String. string;.

### of_GetType

**Description**

Provide ASCII format of typeof() function return.

**Access**

Public

**Syntax**

```
instancename.of_GetType ( a_object, as_desc )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *a_object* | WindowObject. windowobject ; Object that we want to determine the type of. |
| *as_desc* | String, passed by reference. |

**Return value**

String. Name of the object type.

### of_InitScanProcess

**Description**

Initialize the database connection, application and library search path. Used when scanning applications.

**Access**

Public

**Syntax**

```
instancename.of_InitScanProcess ( a_trans, as_app, as_lib_list )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *a_trans* | n_tr. n_tr ; used to connect to the database. |
| *as_app* | String. string; application id. |
| *as_lib_list* | String array. string; applications library search path. |

**Return value**

Integer. Integer; 1 for success. -1 = transaction not connected.

### of_InitSecurity

**Description**

Initializes security parameters.

**Access**

Public

**Syntax**

```
application.instancename.of_InitSecurity ( transaction, appname, user,
group {, precache } )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *instancename* | Instance name of n_cst_security (the n_cst_appmanager default is inv_security) |
| *transaction* | N_tr variable for the security database connection. You must connect to the database before calling this function |
| *appname* | String specifying the application name, as defined in the security database |
| *user* | String specifying the user ID, as defined in the security database |
| *group* | String specifying the default group. PFC uses this group if no group is defined in the database for *user* |
| *precache* (optional) | Boolean specifying whether to preload all security settings for the user (the default is FALSE) |

**Return value**

Integer. Returns values as follows:

- **1** Success
- **-1** Transaction not connected
- **-2** Application not in database
- **-3** User ID not in database
- **-4** User is not a member of any groups and specified default group does not exist
- **-5** Default group not specified
- **-6** Retrieval error

**Usage**

You typically call this function in the n_cst_appmanager pfc_Open event.

You must call the n_cst_appmanager of_SetSecurity function before calling this function. You must call this function before calling the n_cst_security of_SetSecurity function.

**Examples**

This example calls the of_InitSecurity function. It assumes an itr_sec instance variable of type n_tr:

```
Integer  li_return

itr_sec = CREATE n_tr
CONNECT using itr_sec;

li_return = this.inv_security.of_InitSecurity &
   (this.itr_sec, "EISAPP", &
       gnv_app.of_GetUserID(), "Default")
...
```

### of_LoadSecurity

**Description**

Reads in the security inrofmatino about the window for the current user.

**Access**

Protected

**Syntax**

```
instancename.of_LoadSecurity ( as_object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_object* | String. name of object to load security for. |

**Return value**

Integer. 1 if there is security on the object 0 if there is not security -1 for error.

### of_ScanControlArray

**Description**

Scans the passed control array. It matchs up the controls with their corresponding entries in the database and sets them accordingly.

**Access**

Protected

**Syntax**

```
instancename.of_ScanControlArray ( as_win_name, ao_objects, as_object_name )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_win_name* | String. string ; window name. |
| *ao_objects* | WindowObject array. array of window objects; control array to scan. |
| *as_object_name* | String. name of object that owns the control array. If the control array is owned by the window then this parameter is blank. |

**Return value**

Integer. Returns 1 = success.

### of_ScanDatawindow

**Description**

Scans the datawindow object and captures the information about each column.

**Access**

Protected

**Syntax**

```
instancename.of_ScanDatawindow ( as_win_name, adw_scan, as_object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_win_name* | String. string; name of window. |
| *adw_scan* | DataWindow. datawindow ; DW to be scanned. |
| *as_object* | String. string; Object that owns the datawindow control; if the object and the wondow are the same then this parameter is blank. |

**Return value**

Integer. (-1: unable to open datawindow object; -2 error on object create otherwise the number of columns that were found.

### of_ScanWindow

**Description**

Scans the passed window and captures the relevant information about all of the controls and datawindow columns on the window.

**Access**

Public

**Syntax**

```
instancename.of_ScanWindow ( aw_win )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *aw_win* | Window. |

**Return value**

Integer. Returns 1 = Success, -1 = error of some sort, -2 = database error.

### of_SetControlArray

**Description**

Scans the passed control array and set the security as needed on the controls. If the control is a tab or User object then it is exploded into it's controls.

**Access**

Protected

**Syntax**

```
instancename.of_SetControlArray ( as_window, ao_objects, as_objectname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_window* | String. Name of window. |
| *ao_objects* | GraphicObject array. control array. |
| *as_objectname* | String. name of object that owns the control array. blank if the window if the owner of the array. |

**Return value**

Integer. The number of controls set 0 = Nothing set.

### of_SetControlStatus

**Description**

Figure out the kind of control that was passed and then set it's status as needed.

**Syntax 1**

Access: Protected

**Syntax**

```
instancename.of_SetControlStatus ( ago_item, as_window, as_object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *ago_item* | GraphicObject. control to be set. |
| *as_window* | String. name of window that the control is on. |
| *as_object* | String. object that the control is on within the window. |

**Return value**

Integer. The number of controls set 0 = Nothing was set -1 = an error occurred.

**Syntax 2**

Access: Protected

**Syntax**

```
instancename.of_SetControlStatus ( ago_item, as_window, as_object, as_itemname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *ago_item* | GraphicObject. control to be set. |
| *as_window* | String. name of window that the control is on. |
| *as_object* | String. object that the control is on within the window. |
| *as_itemname* | String. name to use instead of the derived name. |

**Return value**

Integer. The number of controls set 0 = Nothing was set -1 = an error occurred.

### of_SetDataWindowColumns

**Description**

Sets the columns on the passed datawindow control based on the current contents of the ids_items datastore. Note: The ids_items datastore must have already been filtered appropriately before calling this function.

**Access**

Protected

**Syntax**

```
instancename.of_SetDataWindowColumns ( adw_obj )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *adw_obj* | DataWindow. datawindow. |

**Return value**

Integer. the number of columns set -1 = error occured.

### of_SetMenu

**Description**

Sets the menu items on the passed menu based on the current contents of the ids_items datastore. Note: The ids_items datastore must have already been filtered appropriately before calling this function.

**Access**

Protected

**Syntax**

```
instancename.of_SetMenu ( as_objname, am_menu )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_objname* | String. string ; Name of object that the menu is part of. This could be a window or a menu. |
| *am_menu* | Menu. menu ; Menu that is to be set. |

**Return value**

Integer. The number of items set on the menu.

### of_SetMenuStatus

**Description**

Set the passed menu item,set it's status as needed and pass back how it was set if the override flag is set then do not even lookup the settings, but use the passed settings.

**Access**

Protected

**Syntax**

```
instancename.of_SetMenuStatus ( am_item, as_window, ab_override )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *am_item* | Menu, passed by reference. |
| *as_window* | String. name of window that the menu is on. |
| *ab_override* | Boolean. menu item is to be disabled and it's toolbar item (if any) is to be made invisible. This is because it's parent menu item has been set to either invisible or disabled. |

**Return value**

Integer. Returns 1 = Success.

### of_SetSecurity

**Description**

Establishes security for a window, menu, or window control, hiding and/or disabling controls, as specified for the user in the security database.

**Access**

Public

**Syntax**

```
application.instancename.of_SetSecurity ( object )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *instancename* | Instance name of n_cst_security (the n_cst_appmanager default for this is inv_security) |
| *object* | Window, GraphicObject, or DataWindow variable containing the window, DataWindow, or window control for which security is applied |

**Return value**

Boolean. Returns TRUE if the function succeeds and FALSE if an error occurs.

**Usage**

Call this function in a window Open or pfc_PreOpen event to apply security to a window, hiding and/or disabling controls, as specified for the user in the security database.

**Examples**

This example calls the of_SetSecurity function:

```
IF NOT &
   gnv_app.inv_security.of_SetSecurity(this) THEN
       MessageBox("Security", &
          "Unable to set security")
   Close(this)
END IF
```

### of_SetState

**Description**

Gets the status of the passed window control pair and then sets the passed attributes appropriately. If the attribute is already set to what we want it to be then DO NOT set it again.

**Access**

Protected

**Syntax**

```
instancename.of_SetState ( as_win, as_itemname, ab_enabled, ab_visible )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_security |
| *as_win* | String. string; window name. |
| *as_itemname* | String. string control name. |
| *ab_enabled* | Boolean, passed by reference. boolean; enabled attribute of the control. |
| *ab_visible* | Boolean, passed by reference. boolean; visible attribute of the control. |

**Return value**

Integer. Returns 0 = Control not found, 1 = Success.
