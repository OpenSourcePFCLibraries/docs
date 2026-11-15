# PFC Revision History

The major changes to the PowerBuilder Foundation Class Library (PFC), and the version that introduced each one. This page doesn't list bug fixes or small enhancements; for those, see each version's repository and the "Rev. History" comments at the top of each PFC object's scripts.

PFC versions follow PowerBuilder versions. The years are those of the PowerBuilder release, or of the PFC readme where one exists.

| Version | Year | Highlights |
| --- | --- | --- |
| [5.0](#pfc-50) | 1996 | The original PFC: ancestor and extension levels, application manager, DataWindow, window and utility services |
| [6.0 and 6.5](#pfc-60-and-65) | 1997–1998 | Lists and trees, ListView and TreeView services, LUW, MRU, timing, DataWindow Properties window, PFCUTIL |
| [7.0](#pfc-70) | 1999 | Attribute objects replace object structures; Win16 and Macintosh dropped |
| [8.0](#pfc-80) | 2001 | Context menus through the ContextMenu event; pfccom32.dll dropped |
| [9.0 and 10.0](#pfc-90-to-100) | 2003–2004 | Maintenance releases; PFC released as open source with PowerBuilder 10 |
| [10.5 to 11.5](#pfc-105-to-115) | 2006–2008 | Updated for each PowerBuilder release |
| [12.0](#pfc-120) | 2010 | ANSI Windows and UNIX support removed |
| [12.5](#pfc-125) | 2011 | DataWindow grid service, window style service, conversion objects; Classic and .NET editions |
| [12.6](#pfc-126) | 2014 | Moved from CodePlex to GitHub |
| [2017](#pfc-2017) | 2017 | First Appeon PowerBuilder release |
| [2019](#pfc-2019) | 2019 | Native Git source control; controls and objects for PowerBuilder 2019 and 2019 R2 |
| [2021](#pfc-2021) | 2021 | Updated for PowerBuilder 2021 |
| [2022](#pfc-2022) | 2022 | Security for newer controls; supporting files moved to their own repositories |
| [2025](#pfc-2025) | 2025 | Solution format, OpenID Connect and OAuth 2.0, PDF help, language files, modern look, tools and unit tests |

## PFC 5.0

The first release of PFC.

- **Two levels**: the ancestor level (pfc_ objects in the PFC libraries) and the extension level (empty descendants in the PFE libraries) that applications use and change.
- **Application manager** (n_cst_appmanager) and the window classes w_master, w_frame, w_sheet and w_response.
- **DataWindow services** (n_cst_dwsrv_*): linkage, filter, find, sort, query mode, multitable update, row manager, row selection, required columns, drop-down search, print preview and report. DataStore versions of several of them (n_cst_dssrv_*).
- **Window services**: sheet manager, status bar and preferences; the resize service (n_cst_resize), the menu service (n_cst_menu) and w_toolbars.
- **Application services**: error and message (n_cst_error), security (n_cst_security), transaction registration, DataWindow caching.
- **Utility services**: string, date/time, numerical, conversion, INI file, SQL parsing, selection, file (n_cst_filesrv) and platform (n_cst_platform), with versions for Windows (16- and 32-bit) and, in 5.0.02, Macintosh and Solaris.
- **Debugging**: the debug service (n_cst_debug) and SQL Spy (n_cst_sqlspy, w_sqlspy).
- **Library Extender**: a wizard in the PowerBuilder IDE (on the Tool tab of the New dialog box), not part of PFC itself, that adds an intermediate extension level between the ancestor and extension levels. It was available from the first release but saw little work after that; it was still in PowerBuilder 10, but because it was part of PowerBuilder, it wasn't included when PFC was released as open source. PFC 2025 has a replacement (see [PFC 2025](#pfc-2025)).

## PFC 6.0 and 6.5

- **New libraries**, PFCUTIL.PBL and PFEUTIL.PBL, for the debugging tools.
- **List services**: linked lists, trees, stacks and queues (n_cst_list, n_cst_tree, n_cst_stack, n_cst_queue and their node objects).
- **ListView and TreeView** controls and services: u_lvs and u_tvs, n_cst_lvsrv and n_cst_tvsrv (data sources, sorting, printing), and the m_lvs and m_tvs menus.
- **Application services**: logical unit of work (n_cst_luw), application preferences, most recently used list (n_cst_mru), metaclass, and timing (n_cst_tmgsingle, n_cst_tmgmultiple).
- **Visual controls**: u_calendar, u_calculator, u_progressbar and the split bar (u_st_splitbar), and the base classes n_base and u_base.
- **DataWindow Properties window** (w_dwproperty, n_cst_dwsrv_property), in place of w_dwdebugger; the DataWindow resize service; the restore row dialog (w_restorerow) in place of w_undelete.
- **AIX and HP-UX** versions of the file and platform services.
- **Constants** renamed in uppercase without prefixes, and register-style functions (of_Register) for the linkage and drop-down search services.
- **PFCOLD.PBL** holds the objects that became obsolete, for migrating applications.

6.5 added no new objects.

## PFC 7.0

- **Attribute objects**: PowerBuilder 7 requires instance structures to be private, so the object structures (os_*) became nonvisual attribute objects, such as n_cst_dwsrv_resizeattrib and n_cst_toolbarattrib.
- **Controls for PowerBuilder 7's new control types**: progress bars (u_hpb, u_vpb), trackbars (u_htb, u_vtb) and hyperlinks (u_phl, u_sth).
- **Removed**: Windows 3.x (16-bit) and Macintosh support.

## PFC 8.0

- **Context menus**: the pop-up menus of the edit, list and OLE controls moved from the RButtonUp event to the ContextMenu event.
- **pfccom32.dll** no longer ships; the Print dialog box call moved into the PowerBuilder virtual machine.
- **Deprecated**: n_trp, after PowerBuilder 8 dropped the Transport object.

## PFC 9.0 to 10.0

Maintenance releases: bug fixes, with no major changes. 9.0 added n_cst_filesrv of_GetDiskSpaceEx, for disks larger than 2 GB.

**Open source** Sybase released PFC as open source as part of the PowerBuilder 10 release. It was maintained on CodePlex, and later on GitHub, by the [OpenSourcePFCLibraries](https://github.com/OpenSourcePFCLibraries) community.

## PFC 10.5 to 11.5

Updated for PowerBuilder 10.5, 11.0 and 11.5, with no major changes.

## PFC 12.0

- **Removed**: ANSI Windows, AIX, HP-UX and Solaris support. The platform and file services (f_setplatform, f_setfilesrv) are for Unicode Windows only.

## PFC 12.5

- **Two editions**: PFC for PowerBuilder Classic and PFC for PowerBuilder .NET.
- **DataWindow grid service** (n_cst_dwsrv_grid, w_grid): column layout and visibility, with the original layout kept so it can be restored.
- **Window style service** (n_cst_winsrv_style): reads and sets a window's Windows styles and extended styles.
- **Conversion objects**: n_cst_colorconv, n_cst_measureconversion and n_cst_pbunitconversion, and many more named colors in n_cst_color.
- **Global function** f_removeduplicate.

## PFC 12.6

- **GitHub**: PFC moved from CodePlex to GitHub, with the changes made on CodePlex after its last release.

## PFC 2017

- Updated for Appeon PowerBuilder 2017, the first release from Appeon.
- **Sort service**: in the drag-and-drop sort dialog box (w_sortdragdrop), columns can be dropped at any position.

## PFC 2019

- **Native Git source control**: the source is kept in a *ws_objects* folder. Developers fork the repository and connect to the workspace, instead of downloading PBLs.
- **Controls for PowerBuilder 2019 and 2019 R2**: u_am (Animation), u_dp (DatePicker), u_mc (MonthCalendar), and in 2019 R2, u_wb (WebBrowser) and u_rbb (RibbonBar).
- **Objects for PowerBuilder 2019 R2's classes**: n_coderobject, n_crypterobject, n_compressorobject, n_extractorobject, n_httpclient, n_restclient and n_smtpclient.
- **The new controls in the services**: the resize, logical unit of work, status bar and conversion services handle them.
- **Databases**: the demo and example applications can use SQL Server as well as SQL Anywhere.

## PFC 2021

- Updated for PowerBuilder 2021.
- **DataStore printing** (n_ds of_SetLegacyPrint), for DataStores without a window handle.

## PFC 2022

- **Security** handles the controls added in recent PowerBuilder versions.
- **Supporting files in their own repositories**: the databases, the help file source, the wizard source, the old readme files and the images. The help files were rebuilt as compiled HTML Help (CHM) and PDF.

## PFC 2025

PFC 2025 comes in two forms: the [2025-Solution](https://github.com/OpenSourcePFCLibraries/2025-Solution) repository, in PowerBuilder 2025's solution format (*.pbsln* and projects), and the [2025-Workspace](https://github.com/OpenSourcePFCLibraries/2025-Workspace) repository, in the workspace format. It's meant for PowerBuilder 2025 R2.

- **Sign-in with an identity provider**: an OpenID Connect logon window (w_openid_logon), with the authorization code flow and PKCE; an OAuth 2.0 token service (n_cst_oauth2), also used to send mail with n_smtpclient.
- **Security**: groups from the identity provider instead of the security database, an optional deny-by-default mode, and every control type secured. The security scanner reads object source, opens solutions and projects, keeps your work when you scan again, and runs from the command line.
- **Help**: a help service (n_cst_help, w_helpviewer) that shows PDF help in the application or in the PDF viewer; the dialog boxes' Help is a PDF file. Compiled HTML Help replaces WinHelp.
- **Language service**: PFC's messages, and window, menu and DataWindow text, come from a language file, which can be generated from the Translation Toolkit dictionaries.
- **A current look**: Segoe UI in place of MS Sans Serif and Tahoma, current images (SVG, with PNG versions), layout around a ribbon bar, and a status bar that follows the UI theme. One resource file, *pfc.pbr*, lists PFC's images and DataWindow objects.
- **Resize and layout**: a minimum window size, the design-time size as the original size, the DataWindow resize service's FIXEDCENTER methods, live resizing with the split bar, and response windows big enough for their controls.
- **Removed**: the JSON service (n_cst_json, w_debugjson), in favor of PowerBuilder's JSONParser and JSONGenerator; the XSLFOP PDF method, in favor of NativePDF.
- **Tools**: the Library Extender (*New-PfcExtensionLayer.ps1*), which replaces the PowerBuilder IDE's Library Extender wizard for solutions and workspaces (see "Library Extender" in [the User's Guide, chapter 7](user-guide/07-pfc-utilities.md#library-extender)), an incremental build script (*Build-Incremental.ps1*), and scripts for language files and translations.
- **Unit tests** with PBUnit (see [Running the PFC Unit Tests](unit-tests.md)).
- **Applications**: the Examples app, PEAT and the security administrator, with ribbons, the UI theme and Fluent icons; a new OpenID Connect demo and an SMTP demo.
- **Documentation**: the manuals converted to Markdown and brought up to date, in the [docs](https://github.com/OpenSourcePFCLibraries/docs) repository.
