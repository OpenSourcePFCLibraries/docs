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

The Help for PFC dialog boxes is a PDF file, `pfcdlg.pdf`. If your application uses PFC dialog boxes (such as w_find, w_replace, and w_sortdragdrop), deploy `pfcdlg.pdf` with it, in the application's folder, so users will have dialog box Help. Each dialog box's Help button opens the file at the dialog box's topic. By default it's shown in a window of the application, which needs only the Microsoft Edge WebView2 runtime that Windows includes. To show it in the user's PDF viewer instead, or to give the file another name or location, use the help service ([n_cst_help](../object-reference/09-custom-class-user-objects/n_cst_help.md)) and its of_SetViewer and of_SetDialogHelpFile functions.

Download `pfcdlg.pdf` from the docs repository: [pfcdlg.pdf](https://github.com/OpenSourcePFCLibraries/docs/raw/main/dialog-help/pfcdlg.pdf). Its source is the [dialog help](../dialog-help/README.md), one Markdown page per dialog box. If your application makes specific use of PFC dialog boxes, you can change those pages and build the file again, as the dialog help's README describes.

**Earlier versions of PFC** In the 2019 and 2022 versions of PFC, the dialog box Help is the compiled help file `pfcdlg.chm` (earlier, `PFCDLG.HLP`), from the archived [PFCDLG-help-file-and-source](https://github.com/OpenSourcePFCLibraries/PFCDLG-help-file-and-source) repository.

## Deploying PFC's images

Some PFC objects show pictures of their own: the message box (w_message) shows an icon for each kind of message, the drag-and-drop Sort dialog box (w_sortdragdrop) uses drag icons, and a printed TreeView (u_tv and n_cst_tvsrv_print of_PrintTree) draws its lines, expand and collapse boxes, and default item pictures with pictures. PFC names these files without a path, so deploy them where your application finds files: beside the executable, in a folder on the system path, or compiled into the executable or a PBD by listing them in a PBR file (see “Using PBR files”).

The files are in the `pfc libs\images` folder of the [2025-Solution](https://github.com/OpenSourcePFCLibraries/2025-Solution/tree/master/pfc%20libs/images) and [2025-Workspace](https://github.com/OpenSourcePFCLibraries/2025-Workspace) repositories, whose README lists which object uses each one. They're SVG, PNG and ICO files named `pfc_*`, so they don't clash with your application's own images. If you replace one with your own picture, keep its file name.

**Earlier versions of PFC** The 2019 and 2022 versions of PFC use bitmaps and icons with other names (`info.bmp`, `folder.bmp`, `arrowl.ico` and so on): in 2019, in that repository's `images` folder, and in 2022, from the [PFC-Image-Files](https://github.com/OpenSourcePFCLibraries/PFC-Image-Files) repository.
