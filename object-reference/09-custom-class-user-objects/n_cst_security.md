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

## Functions

N_cst_security includes many precoded object functions. The functions you call from an application are documented here:

- of_InitSecurity
- of_SetSecurity

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
