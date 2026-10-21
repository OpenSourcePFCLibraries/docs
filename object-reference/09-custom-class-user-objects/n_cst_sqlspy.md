# n_cst_sqlspy

**Description**

SQL Spy debugging service, a development tool that helps you debug applications by logging and optionally displaying the SQL that DataWindows submit to the database. Do not use this functionality in production applications.

N_cst_sqlspy includes instance variables as well as precoded events and functions. This discussion describes only those functions you code in a typical application.

For complete information on using SQL Spy, see the *PFC User’s Guide*.

**Ancestry**

![Figure](images/ref2-p660-1.png)

**Library**

PF

- PFCUTIL.PBL
- PFEUTIL.PBL

**Object relationships**

- d_sqlspyprint
- [n_cst_conversion](n_cst_conversion.md)
- [n_ds](../08-standard-class-user-objects/n_ds.md)
- w_sqlspy
- w_sqlspyinspect

**Usage**

You typically call most n_cst_sqlspy functions from within the application manager. To use SQL Spy:

1. Enable the debugging service by calling the n_cst_appmanager of_SetDebug function:

   ```
   this.of_SetDebug(TRUE)
   ```

2. Enable SQL Spy by calling the n_cst_debug of_SetSQLSpy function:

   ```
   this.inv_debug.of_SetSQLSpy(TRUE)
   ```

3. Specify the log file by calling the n_cst_sqlspy of_SetLogFile function:

   ```
   this.inv_debug.inv_sqlspy.of_SetLogFile &
      ("c:\debug\temp\appdbug.log")
   ```

4. Call other n_cst_sqlspy functions, as necessary to log and optionally display DataWindow update SQL.

**See also**

- [n_cst_appmanager](n_cst_appmanager.md)
- [n_cst_debug](n_cst_debug.md)

## Functions

N_cst_sqlspy includes many precoded object functions. The functions you call from an application are documented here:

- of_GetAlwaysOnTop
- of_OpenSQLSpy
- of_SetAlwaysOnTop
- of_SetBatchMode
- of_SetLogFile
- of_SQLSyntax

### of_GetAlwaysOnTop

**Description**

Reports whether the w_sqlspy window always displays on top of other windows.

**Access**

Public

**Syntax**

```
application.debug.sqlspy.of_GetAlwaysOnTop ( )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *debug* | Instance name of n_cst_debug (the n_cst_appmanager default is inv_debug) |
| *sqlspy* | Instance name of n_cst_sqlspy (the n_cst_debug default is inv_sqlspy) |

**Return value**

Boolean. Returns TRUE if the w_sqlspy window is always on top and FALSE if it is not.

**Examples**

This example calls the of_GetAlwaysOnTop function:

```
Boolean  ib_ontop

ib_ontop = &
   gnv_app.inv_debug.inv_sqlspy.of_GetAlwaysOnTop()
...
```

### of_OpenSQLSpy

**Description**

Opens or closes the w_sqlspy window. This window displays the contents of the log file specified in the of_SetLogFile function.

**Access**

Public

**Syntax**

```
application.debug.sqlspy.of_OpenSQLSpy ( boolean )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *debug* | Instance name of n_cst_debug (the n_cst_appmanager default is inv_debug) |
| *sqlspy* | Instance name of n_cst_sqlspy (the n_cst_debug default is inv_sqlspy) |
| *boolean* | Boolean specifying whether to open (TRUE) or close (FALSE) the w_sqlspy window |

**Return value**

Integer. Returns 1 if the function succeeds, -1 if an error occurs, and 0 if no action is taken.

**Examples**

This example calls the of_OpenSQLSpy function:

```
gnv_app.inv_debug.inv_sqlspy.of_OpenSQLSpy(TRUE)
```

### of_SetAlwaysOnTop

**Description**

Controls whether the w_sqlspy window always displays on top of other windows.

**Access**

Public

**Syntax**

```
application.debug.sqlspy.of_SetAlwaysOnTop ( boolean )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *debug* | Instance name of n_cst_debug (the n_cst_appmanager default is inv_debug) |
| *sqlspy* | Instance name of n_cst_sqlspy (the n_cst_debug default is inv_sqlspy) |
| *boolean* | Boolean indicating whether to always display w_sqlspy on top of other windows (TRUE) or to let other windows display on top of w_sqlspy (FALSE) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Examples**

This example calls the of_SetAlwaysOnTop function:

```
...
gnv_app.inv_debug.inv_sqlspy.of_SetAlwaysOnTop &
 (FALSE)
...
```

### of_SetBatchMode

**Description**

Controls whether the service displays the w_sqlspyinspect dialog box before updating the database. This dialog box displays the SQL to be submitted to the database.

**Access**

Public

**Syntax**

```
application.debug.sqlspy.of_SetBatchMode ( boolean )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *debug* | Instance name of n_cst_debug (the n_cst_appmanager default is inv_debug) |
| *sqlspy* | Instance name of n_cst_sqlspy (the n_cst_debug default is inv_sqlspy) |
| *boolean* | Boolean indicating whether to display the w_sqlspyinspect dialog box (TRUE) or not (FALSE) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Examples**

This example calls the of_SetBatchMode function:

```
gnv_app.inv_debug.inv_sqlspy.of_SetBatchMode &
   (FALSE)
```

### of_SetLogFile

**Description**

Specifies the file into which the SQL Spy service logs DataWindow SQL.

**Access**

Public

**Syntax**

```
application.debug.sqlspy.of_SetLogFile ( logfile )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *debug* | Instance name of n_cst_debug (the n_cst_appmanager default is inv_debug) |
| *sqlspy* | Instance name of n_cst_sqlspy (the n_cst_debug default is inv_sqlspy) |
| *logfile* | Fully qualified name of the file into which the SQL Spy service copies DataWindow update SQL and other information |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

Call this function with an empty string to disable log file processing.

**Examples**

This example calls the of_SetLogFile function:

```
this.inv_debug.inv_sqlspy.of_SetLogFile &
   ("c:\debug\temp\appdbug.log")
```

### of_SQLSyntax

**Description**

Specifies SQL syntax to be copied to the log file, optionally displaying it in the w_sqlspyinspect dialog box.

**Access**

Public

**Syntax**

```
application.debug.sqlspy.of_SQLSyntax ( heading {, sql {, oktopause } } )
```

| Argument | Description |
| --- | --- |
| *application* | Global variable of type n_cst_appmanager (this must be gnv_app) |
| *debug* | Instance name of n_cst_debug (the n_cst_appmanager default is inv_debug) |
| *sqlspy* | Instance name of n_cst_sqlspy (the n_cst_debug default is inv_sqlspy) |
| *heading* | String specifying a heading for the log file |
| *sql* (optional) | String specifying the SQL statement to be logged |
| *oktopause* (optional) | Boolean specifying whether to pause statement execution for display in the w_sqlspyinspect dialog box. The default is FALSE |

**Return value**

Integer. Returns values as follows:

- 2 Function succeeded; do not process this statement
- 1 Function succeeded; do not process other pending updates
- 0 Function succeeded; continue processing DataWindow updates
- -1 Error

**Usage**

The SQL Spy service calls this function automatically for all DataWindow and EXEC IMMEDIATE statements automatically. You can call it to log native SQL statements.

To display the statement in the w_sqlspyinspect dialog box, *oktopause* must be TRUE and batch mode must have been disabled previously by calling the of_SetBatchMode(FALSE) function

**Examples**

This example calls the of_SQLSyntax function:

```
String   ls_sql

ls_sql = "SELECT * FROM employee;"
gnv_app.inv_debug.inv_sqlspy.of_SQLSyntax &
   ("Native SQL", ls_sql, TRUE)
...
```
