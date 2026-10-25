# n_cst_dwsrv_grid

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Grid DataWindow service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_dwsrv → n_cst_dwsrv → pfc_n_cst_dwsrv_grid → n_cst_dwsrv_grid`

**Library**

- PFCDWSRV.PBL
- PFEDWSRV.PBL

## Instance variables

N_cst_dwsrv_grid includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_Original |  | Boolean | Protected |
| inv_apppref |  | n_cst_apppreference | Protected |
| is_DialogTitle |  | String | Protected |

## Events

N_cst_dwsrv_grid includes these events:

### Constructor

**Description**

Initialise the grid service.

**Syntax**

```
instancename.EVENT Constructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

None.

### pfc_showdialog

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_showdialog ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

None.

## Functions

N_cst_dwsrv_grid includes these functions:

### of_apply

**Description**

Apply actual layout defined in the service repository.

**Access**

Public

**Syntax**

```
instancename.of_apply ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. Returns 1 - Success, -1 - Failure.

**Usage**

This function is automatically called when clicking on the Apply or OK button of the Grid Service Dialog..

### of_getdialogtitle

**Description**

Returns the title displayed by the service dialog.

**Access**

Public

**Syntax**

```
instancename.of_getdialogtitle ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

String. The title of the service dfialog.

**Usage**

Call this function to get the actual Grid service dialog Title.

### of_getlayoutdata

**Description**

Get actual layout and prepare it to be ASCII compatible in order to be readable in any kind of files it can be saved into (INI, REG or XML). This format consist by replacing : - Horizontal Tab characters (~t) by comma, - Carriage Return (~r) & New line characters (~n) by #.

**Access**

Protected

**Syntax**

```
instancename.of_getlayoutdata ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

String. The actual layout string in ASCII compatible format.

**Usage**

This method is automatically called by the of_Save() method.

### of_load

**Description**

Restore last saved layout of the requestor dw control.

**Access**

Public

**Syntax**

```
instancename.of_load ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. 1, Success -1, Failure.

**Usage**

This method is automatically called when the service is activated though the call of the method of_SetGrid(TRUE)

It restores the user's layout when the application keeps user preferences (the application preference service has a user key or user INI file) and one was saved, and otherwise the layout saved at application level (see of_save).

### of_populate

**Description**

Populates the service repository and keep a copy as the original layout the fist time it is called.

**Access**

Public

**Syntax**

```
instancename.of_populate ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. 1, Success -1, Failure.

**Usage**

This function is automatically called when opening the service Dialog.

### of_restoreoriginalcopy

**Description**

Restore the original layout into the service repository.

**Access**

Public

**Syntax**

```
instancename.of_restoreoriginalcopy ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. 1, Success -1, Failure.

**Usage**

This function is automatically called when calling the of_Cancel() method.

### of_restoreoriginallayout

**Description**

Restore the original layout and re-apply it.

**Access**

Public

**Syntax**

```
instancename.of_restoreoriginallayout ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. Returns 1 - Success, -1 - Failure.

**Usage**

This function is automatically called when clicking on the APPLY or OK button of the Grid Dialog Service when the Restore Original Layout option is requested.

### of_save

**Description**

Store tha actual layout of the requestor dw control using the Application Preference service.

**Access**

Public

**Syntax**

```
instancename.of_save ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. 1, Success -1, Failure.

**Usage**

This method is automatically called when the method of_SetGrid(FALSE) is called at requestor dw control level, which u_dw also does when it is destroyed.

The layout is saved through the application preference service (n_cst_apppreference), under the names of the window and the DataWindow control:

- When the application keeps user preferences (a user key or user INI file), the layout is a user preference: it is saved as gridlayout.*window*.*control* under the user key, or in the AppUserPref section of the user INI file, so each user has a layout of their own.
- Otherwise, it is saved at application level: under the application key, or in the application INI file in a section named after the window.

Earlier PFC releases saved the layout only at application level, so an application with only user preferences didn't save it at all.

An INI file must exist before the layout can be saved in it.

### of_setdialogtitle

**Description**

Set the title of the service dialog.

**Access**

Public

**Syntax**

```
instancename.of_setdialogtitle ( as_title )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |
| *as_title* | String. The title to be used by the service dialog. |

**Return value**

Integer. 1, Sucess -1, Failure.

**Usage**

Call this method to set the service dialog title before calling the pfc_showdialog() event.

### of_setlayoutdata

**Description**

Apply passed layout as the actual one.

**Access**

Protected

**Syntax**

```
instancename.of_setlayoutdata ( as_layout )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |
| *as_layout* | String. The string containing the layout to be applied in compatible ASCII format. See of_getlayoutdata() method for more information about the format used. |

**Return value**

Integer. An integer > than zero in case of success, or an integer &lt; than zero if an error occurs.

**Usage**

This method is automatically called by the of_load() method.

### of_setoriginalcopy

**Description**

Make a copy of the original layout for further user.

**Access**

Public

**Syntax**

```
instancename.of_setoriginalcopy ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. always return Success.

**Usage**

This method is called by the of_populate() method.

### of_showdialog

**Description**

Display the service dialog.

**Access**

Protected

**Syntax**

```
instancename.of_showdialog ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_dwsrv_grid |

**Return value**

Integer. 1, Success -1, Failure.

**Usage**

This method is automatically called by the pfc_showdialog() event.
