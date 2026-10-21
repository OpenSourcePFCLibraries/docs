# Deploying a PFC Application

**About this chapter**

This chapter explains considerations related to PFC application deployment.

| Contents Topic | Page |
| --- | --- |
| Choosing a deployment strategy | 227 |
| Using PBR files | 229 |
| Deploying database tables | 229 |
| Deploying PFC dialog box Help | 230 |

## Choosing a deployment strategy

You use PFC to build production-strength applications. As with all production-strength applications, deploying a PFC application requires careful planning and implementation.

**Your goal**

Your deployment strategy must provide user workstations with everything they need to execute a PFC application:

- Application executable (EXE) file
- Application PBDs or DLLs (if not using a single EXE file)
- PFC PBDs or DLLs (if not using a single EXE file)
- Other files and entries used by your application (ActiveX controls, registry entries, INI files, bitmaps, and so on)
- PowerBuilder execution modules (may already be installed on the user workstation)
- Database client software (may already be installed on the user workstation)

**Four deployment options**

A PFC application has the same four deployment options as any other PowerBuilder application. Each of these options has relative advantages and disadvantages that you need to consider before choosing a deployment strategy:

| Deployment option | Advantages | Disadvantages |
| --- | --- | --- |
| Pcode executable | Single file Simple deployment | Large (minimum 3M) To update, you must regenerate the entire application |
| Compiled executable | Single file Simple deployment Compiled code | Very large (minimum 8M) To update, you must regenerate the entire application |
| Pcode PBDs | Smaller EXE To update, you can replace a single PBD | Multiple files Needs separate set of physical files |
| Compiled DLLs | Smaller EXE Compiled code To update, you can replace a single DLL | Multiple files Needs separate set of physical files |

**Physical file issues** If your applications use Pcode PBDs or compiled DLLs, they usually need a separate set of physical files for each deployed PFC application. This is because of the internal interdependencies that trickle down from high-level extension objects, such as w_master, n_cst_dwsrv, n_cst_winsrv, and n_cst_dssrv.

See “Setting up the application manager”.

**Using a common set of physical files** If no deployed application has made changes to either the PFC ancestor layer or the PFC extension layer, applications can share PBD or DLL files. But to ensure ease of maintenance and upgrade, it’s still best to provide separate physical PBD and DLL files for each deployed application.

## Using PBR files

PFC ships with six PBR files:

- *One* for use when placing the bitmaps in the *EXE*
- *A set of five* for use when distributing *PBDs or DLLs*

Use these files as follows:

| Deployment method | PBR file(s) to use | What happens when you deploy *with* PBR | What happens when you deploy *without* PBR |
| --- | --- | --- | --- |
| Placing the bitmaps in a single EXE | Pfc.pbr (This PBR includes dynamic DataWindow references) | Bitmaps and dynamically referenced DataWindow objects are copied into the EXE | *This option will not work* (dynamic DataWindow references will fail) |
| Distributing PBDs or DLLs | Pfcapsrv.pbr Pfcdwsrv.pbr Pfcmain.pbr Pfcutil.pbr | The bitmaps named in each PBR file are copied into the associated PBD or DLL | You must deploy bitmap files separately and make sure they are in a directory that is accessible at execution |
|  | Pfcwnsrv.pbr |  | time |

## Deploying database tables

PFC ships with the PFC.DB database.

**Table references**

Although no PFC services reference PFC.DB directly, certain services reference tables that were originally shipped in PFC.DB:

| PFC service | Tables referenced |
| --- | --- |
| Error message service (n_cst_error) | Messages |
| Security service (n_cst_security) | Security_apps |
|  | Security_groupings |
|  | Security_info |
|  | Security_template |
|  | Security_users |

**What to do**

To minimize the number of database connections held by your application, it’s usually best to move these tables to the application database.

In any case, your application deployment strategy must provide for user access to all database tables required by the application. This includes installing client software, updating INI files, updating registry entries, and all other database deployment considerations outlined in the database deployment discussion in *Application Techniques*.

## Deploying PFC dialog box Help

PFC includes the PFCDLG.HLP file, which contains online Help for PFC dialog boxes. If your application uses PFC dialog boxes (such as w_find, w_replace, and w_sortdragdrop) you should deploy PFCDLG.HLP so users will have dialog box Help.

PFC also includes PFCDLG.RTF, which contains the source text for PFC dialog box Help. If your application makes specific use of PFC dialog boxes, you can modify this file and recompile the Help file.
