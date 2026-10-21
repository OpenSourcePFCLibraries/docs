# PFC Utilities

**About this chapter**

This chapter describes the PFC utilities and how to use them.

| Contents Topic | Page |
| --- | --- |
| DataWindow Properties window | 207 |
| SQL Spy | 210 |
| Security | 213 |
| Library Extender | 225 |
| Migration Assistant | 226 |

## DataWindow Properties window

The DataWindow Properties window allows you to:

- Selectively enable and disable DataWindow services
- View the PFC syntax for the selected service
- Access and modify DataWindow properties interactively, including:

DataWindow buffers Row and column status Statistics Properties of all objects on the DataWindow object

The DataWindow Properties service is invoked in Lesson 4, “Build the First Sheet Window” of the PFC tutorial.

**DataWindow Properties window tab**

The DataWindow Properties window has three tabs:

- **Services** Displays a list of DataWindow services. Select a service and click Enable or Disable as needed. Click Properties to display information for the currently selected service:

  ![Figure](images/ug-p218-1.png)

- **Buffers** Click the right mouse button to display a pop-up menu that allows you to manipulate rows:

  ![Figure](images/ug-p218-2.png)

- **Status flags** Change DataWindow status flags as necessary. The Assist Status Change check box allows you to perform two-step status changes in one step:

  ![Figure](images/ug-p219-1.png)

**Service dialog box tabs**

Each service displays its own set of tabs that display its properties. This example shows the tabs for the sort service:

- **General** Displays information about the selected service:

  ![Figure](images/ug-p219-2.png)

- **Syntax** Displays the PFC syntax used for the selected service:

  ![Figure](images/ug-p220-1.png)

**Usage**

Use the DataWindow Properties window to debug and test your application and its use of DataWindow services.

**To display the DataWindow properties window:**

1. Enable the DataWindow Properties service by calling the u_dw of_SetProperty function:

   ```
   this.of_SetProperty(TRUE)
   ```

2. When the DataWindow displays, right-click and select DataWindow Properties.

   The DataWindow Properties window displays.

## SQL Spy

The SQL Spy utility traps and saves SQL automatically for DataWindows and EXEC IMMEDIATE SQL statements. You can also use SQL Spy to display and optionally modify DataWindow SQL statements, and to log native SQL.

**Modifying SQL** If you are using an ODBC data source, you must set DisableBind to 1 in the connect string.

SQL Spy logs SQL to a file, which you can optionally display in a pop-up window.

**Usage**

To use SQL Spy, you call functions to enable the utility, to specify the log file, and to control display of the w_sqlspy window. You can also call a function to log native SQL.

You typically initialize SQL Spy from the application manager pfc_Open event, although you can call SQL Spy functions from anywhere within an application.

**To enable SQL Spy:**

1. Enable the debugging service by calling the n_cst_appmanager of_SetDebug function:

   ```
   this.of_SetDebug(TRUE)
   ```

2. Enable SQL Spy by calling the n_cst_debug of_SetSQLSpy function:

   ```
   this.inv_debug.of_SetSQLSpy(TRUE)
   ```

3. (Optional) Specify a log file by calling the n_cst_sqlspy of_SetLogFile function:

   ```
   this.inv_debug.inv_sqlspy.of_SetLogFile &
          ("c:\MyPFCApps\ThisApp\appdbug.log")
   ```

**To display the w_sqlspy pop-up window:**

- Call the n_cst_sqlspy of_OpenSQLSpy function:

  ```
  gnv_app.inv_debug.inv_sqlspy.of_OpenSQLSpy(TRUE)
  ```

The w_sqlspy pop-up window displays the most recent entries in the log file:

![Figure](images/ug-p222-1.png)

The w_sqlspyinspect dialog box allows you view and optionally modify SQL before the DataWindow submits it to the database.

**To display the w_sqlspyinspect dialog box:**

- Call the n_cst_sqlspy of_SetBatchMode(FALSE) function:

  ```
  gnv_app.inv_debug.inv_sqlspy.of_SetBatchMode &
         (FALSE)
  ```

**To use the w_sqlspyinspect dialog box:**

1. Update the database, inserting, deleting, or modifying rows.

   The w_sqlinspect dialog box displays:

   ![Figure](images/ug-p222-2.png)

2. Review the SQL statement, optionally modifying values.
3. Click the appropriate command button:
   - **Step** Updates the current row and displays information for the next row to be updated
   - **Resume** Updates the current row and updates all remaining rows; disable the SQL Spy inspect capability
   - **Cancel** Does not update the current row and displays the next row to be updated
   - **Cancel All** Does not update all remaining rows

**To log a SQL statement manually:**

- Code the n_cst_sqlspy of_SQLSyntax function, passing the SQL to be logged:

  ```
  String ls_sql

  ls_sql = "SELECT * FROM employee;"
  gnv_app.inv_debug.inv_sqlspy.of_SQLSyntax &
         ("Native SQL", String(Now()) + ": " + &
            String(Today()) + ": " + ls_sql)
  ...
  ```

## Security

PFC provides a database-driven security system that requires minimal coding in your applications. It allows you to populate a security database with information, including:

- Window controls
- DataWindow columns
- User objects
- Menu items

You then create a matrix of users and groups, controlling access to these items.

At execution time, PFC selectively enables, disables, or hides secured items, as specified in the security database.

The PFC security system includes:

- **The security administration utility** Allows you to define users, groups, items to be secured, and user access.
- **The security scanner** Scans user-specified objects to gather information on all items that can be secured.
- **The security database** Contains information on users, groups, items to be secured, and user access to those secured items.

**Delivered as a local database** PFC provides a local database to hold security information. However, when you implement security, you will want to use a server database.

**Security by exception**

The PFC security capability provides security by exception. By default, the security system uses the object’s current settings. This means that PFC modifies settings only where specified explicitly in the security database.

**The process**

The security administration utility is a PowerBuilder application you run in order to:

- Define users and groups
- Run the security scanner
- Define security for objects and controls
- Associate users and groups with objects and controls

In your applications, you add code to implement security:

| In this object | Add this code |
| --- | --- |
| Application manager | Call the n_cst_appmanager of_SetSecurity function to enable the security service, n_cst_security |
| Application manager or frame window | Establish a Transaction object, connect to the security database, and call the n_cst_security of_InitSecurity function |
|  | The of_InitSecurity function allows you to set a default group for the user. The security system uses this group if there are no other group settings for the user |
| Windows that require security | Call the of_SetSecurity function in the window Open event |

For more information on enabling security in your applications, see “Implementing security in an application”.

### Defining users and groups

**Overview**

To use PFC security, you must define users and groups. A user can be a member of zero or more groups; user settings always override group settings.

**Usage**

You use the security administration utility to define users and groups, as well as associate users with groups.

**Use an existing target file** If you already have a target file for your security administration utility, add it to your PowerBuilder workspace, make sure it includes all the PFC libraries in its library list, and skip the first four steps in the following procedure.

**To define users:**

1. Add an Existing Application target to your PowerBuilder workspace (select File>New from the PowerBuilder menu bar, click the Target tab, click the Existing Application target icon, and click OK).
2. On the Choose Library and Application page of the target wizard, select the pfcsecurity_admin application in the PFCSECAD.PBL library in the PFC\Security directory and click Next.
3. On the Set Library Search Path page of the target wizard, add all the PFC libraries to the library list and click Next.
4. On the Specify Target File page of the target wizard, click Finish.

   The default target filename has the same name as the security application you selected with a PBT extension.

5. Select Run>Select And Run from the PowerBuilder menu bar, select the security_admin target, and click OK.

   **Security administration database and INI file** If there are problems connecting to the PFC.DB database, check the PFCSECAD.INI file and your workstation’s ODBC settings.

   If you have moved the PFC security tables from PFC.DB to some other database, you must update the Database section of the PFCSECAD.INI file to reflect the appropriate database connection parameters.

6. Select File>User/Groups from the security administration utiltiy menu bar.

   The User/Group Management window displays:

   ![Figure](images/ug-p226-1.png)

7. Right-click in the Users column and select Add Item.

   The Add User dialog box displays:

   ![Figure](images/ug-p226-2.png)

8. Type a user name and description. The user name must correspond to a user ID that your application can access at runtime.
9. Click OK.
10. Continue adding users as necessary.
11. Select File>Save from the menu bar.

**To define groups:**

1. Right-click in the Groups column and select Add Group.

   The Add Group dialog box displays:

   ![Figure](images/ug-p227-1.png)

2. Type a group name, description, and priority. Zero is the highest priority; however, user specifications override group specifications.
3. Click OK.
4. Continue adding groups as necessary.
5. Select File>Save from the menu bar.

**To associate users with groups:**

- Drag the user and drop it over the group.

**To remove a user from a group:**

1. Right-click on the user and select Delete Item.

   The Delete User from Group dialog box displays.

2. Click OK.
3. Select File>Save from the menu bar.

**To modify a previously defined user or group:**

1. Right-click on the item and select Edit Item.

   The Edit User or Edit Group dialog box displays.

2. Modify information as necessary.
3. Click OK.
4. Select File>Save from the menu bar.

### Running the security scanner

The security scanner examines all the windows, DataWindows, menus, and user objects in an application. It saves to the PFC database information on:

- Windows
- Window controls
- For DataWindow controls, information on the columns in the associated DataWindow object
- Menu items
- User objects and tab controls; collects information on all controls defined on the user object or tab page

**Usage**

You can run the security scanner from PowerBuilder or you run it from the security administration utility.

**To run the security scanner from PowerBuilder:**

1. To your workspace, add an Existing Application target that uses the PFCSECSC.PBL library and the pfcsecurity_scanner application.

   **Use an existing target if available** If there is already a target file for the pfcsecurity_scanner application, just add this file to your workspace instead of creating a new target file.

2. Select Run>Select And Run, choose the pfcsecurity_scanner target and click OK.

   **If you have trouble connecting** If there are problems connecting to the PFC.DB database, check the PFCSECAD.INI file and your workstation’s ODBC settings.

**To run the security scanner from within the security administration utility:**

1. Select and run the security administration utility (PFCSECAD.PBT).

   See “Defining users and groups” for steps on adding the security administration target file to your workspace.

2. Select File>Scan Application from the security administration utility menu bar.

   The Select Application dialog box displays a list of the applications defined in the Application section of the PB.INI file:

   ![Figure](images/ug-p229-1.png)

3. Select the application to be scanned and click Select.

   The Select Objects to be Scanned dialog box displays:

   ![Figure](images/ug-p229-2.png)

4. Press CTRL+click or SHIFT+click to select the objects to be scanned.

   **Selecting objects** To minimize the size of the security database, do not select objects for which you will never assign security.

5. Click Scan.

   **Scanner executable file** The security administration utility uses the *pfcsecsc.exe* file to perform the scan. PowerBuilder installs this file in the PFC Security directory.

6. When scanning completes, click Exit.

**To customize the controls for which security is enabled:**

1. Select and run the security administration utility.
2. Select File>Templates from the security administration utility menu bar.

   The Template Management window displays:

   ![Figure](images/ug-p230-1.png)

3. Double-click on the application you just scanned.

   A list of windows displays.

4. Double-click on one of the windows.

   A list of controls displays:

   ![Figure](images/ug-p231-1.png)

5. Modify descriptions as appropriate.

   Modifying descriptions on this window can make things clearer when associating users and groups with windows, window controls, and menu items.

6. Delete items that you will not secure by right-clicking over the item and selecting Delete.

   Deleting unnecessary items reduces the size of the security database, increasing performance.

7. When you are through, select File>Save from the menu bar.
8. Continue this process with all objects to be secured.

### Defining security for users and groups

After running the scanner to record objects and controls and selectively deleting items that don’t require securing, you specify security by associating users and groups with objects and controls.

**Usage**

For each user and group, you enable or disable access to window controls, DataWindow columns, user objects, and menu items for each object to be secured.

Users may belong to zero or more groups. User settings always take precedence over group settings. If there are no user settings, then the group setting with the highest priority is used (zero is the highest priority).

**To define security for a user or group:**

1. Select and run the security administration utility (PFCSECAD.PBT).

   See “Defining users and groups” for steps on adding the security administration target file to your workspace.

2. Select File>Users/Objects from the menu bar.

   The User/Object Management window displays:

   ![Figure](images/ug-p232-1.png)

3. Click the Users drop-down list and select a user for whom to set security.
4. Double-click the application containing the objects to be secured.
5. Select the All radio button (if it’s not already selected).

   You are now ready to secure items.

   ![Figure](images/ug-p232-2.png)

6. For items to be secured, use the Status drop-down list to specify Enabled, Disabled, or Invisible (Not Set makes no change to the object’s settings).
7. When you are finished, select File>Save from the menu bar.
8. Continue with the object until you are finished with all users and groups.
9. Continue with other objects.

### Implementing security in an application

Once you have defined a security database, enable the security service in your application.

**Usage**

Enabling the security service in your application involves:

- Enabling the security service
- Establishing a database connection to the database that contains the security tables and communicating this information to the security service
- Enabling the security service on the appropriate windows

**To enable the security service for an application:**

- Call the n_cst_appmanager of_SetSecurity function:

  ```
  gnv_app.of_SetSecurity(TRUE)
  ```

**To establish a connection to the database containing the security tables and communicate it to the security system:**

1. Create a Transaction object and connect to the database (this example assumes an itr_security instance variable on a customized n_cst_appmanager descendant):

   ```
   gnv_app.itr_security = CREATE n_tr
   gnv_app.itr_security.of_Init &
          (gnv_app.of_GetAppINIFile(), "Security")

   gnv_app.itr_security.of_Connect()
   ```

**Security table placement** To minimize the number of database connections held by your application, place the security tables in the application database.

2. Call the n_cst_security of_InitSecurity function:

   ```
   Integer li_return

   li_return = &
          gnv_app.inv_security.of_InitSecurity &
             (gnv_app.itr_security, "EISAPP", &
                gnv_app.of_GetUserID(), "Default")
   ```

**To enable security for a window:**

- Call the n_cst_security of_SetSecurity function in the window’s Open or pfc_PreOpen event:

  ```
  gnv_app.inv_security.of_SetSecurity(this)
  ```

### Maintaining the security database

The PFC security system tables are delivered in the PFC.DB local database. The PFC security tables are:

- Security_apps
- Security_groups
- Security_info
- Security_template
- Security_users

You can use the PFC.DB local database to define users and groups, scan objects, and define access privileges. However, you will need to migrate these tables to a server database before deploying applications. The PFC security system and the security database are designed for easy migration to a server database:

- All database interactions for PFC security are via DataWindows (there is no embedded SQL)
- The PFC security system enforces cascading deletes manually

**Usage**

To enable security for all of your application’s users, move the PFC security tables to a server database.

**To migrate PFC security tables to a server database:**

1. Use the Pipeline painter to move table definitions and data to a server database. Retain the table and column names as much as possible.
2. Use the DataWindow painter to access the PFC security DataWindows. Note the following:
   - Preserve the DataWindow’s column order and DataWindow column names.
   - If necessary, use the Select Painter to change the name of the associated database tables or columns to match those on the server database. Remember not to change the name of the DataWindow columns.
3. In your application, populate Transaction object fields as appropriate for the server database containing the security tables.

## Library Extender

You use the PFC Library Extender to automatically create and populate an intermediate extension level between two existing levels, redefining the inheritance hierarchy.

By supplying the Library Extender with the names of the upper and lower levels, the Library Extender:

- Creates a new PBL
- Creates objects in the new PBL that descend from objects in the upper level
- Recreates objects in the lower level such that they descend from objects in the new PBL

  ![Figure](images/ug-p236-1.png)

Typically you would use the Library Extender to add an intermediate level (or levels) between the PFC ancestor level and the PFC extension level. Adding corporate and departmental extensions to intermediate extension levels allows the application programmer to make full use of the extension level.

**Usage**

The Library Extender is available on the Tool tab in the New dialog box.

For complete usage information, see the Library Extender online Help.

## Migration Assistant

The Migration Assistant scans PowerBuilder libraries (PBLs) and highlights usage of obsolete functions and events. Obsolete functions and events still work in the current version of PowerBuilder but may not work in future versions. If you plan on maintaining an application in the future, it's best to use current syntax and events.

**Usage**

The Migration Assistant is available on the Tool tab in the New dialog box.

For complete usage information, see the Migration Assistant online Help.
