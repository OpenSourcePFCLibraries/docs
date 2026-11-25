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
- **New services**: the environment service (n_cst_environment), which reports on the host system, and a JSON service (n_cst_json, removed again in PFC 2025).
- **Extended services**: n_cst_string (e-mail address checks, URL encoding, removing punctuation), n_cst_numerical (bitwise operations, and hexadecimal, octal and binary numbers), n_cst_conversion (more types, and number formats such as 1.234,56), n_cst_filesrv (directory trees, short and long path names, temporary files), n_cst_platform (system folders, system colors, DPI and system metrics; memory as LongLong), n_cst_apppreference (an XML file as well as an INI file or the registry), n_cst_inifile and n_cst_metaclass.
- **DataWindow services**: a sort order indicator in the column headers; LIKE and NOT LIKE operators; the thousands separator and the first day of the week from the Windows regional settings.
- **Windows and controls**: pfc_PrePrint and pfc_PostPrint events in w_master, a w_response the user can resize, a pfc_PositionChanged event in u_htb and u_vtb, and center positions in the resize service.

## PFC 12.6

- **GitHub**: PFC moved from CodePlex to GitHub, with the changes made on CodePlex after its last release.

## PFC 2017

- Updated for Appeon PowerBuilder 2017, the first release from Appeon.
- **Sort service**: in the drag-and-drop sort dialog box (w_sortdragdrop), columns can be dropped at any position.

## PFC 2019

- **Native Git source control**: the source is kept in a *ws_objects* folder. Developers fork the repository and connect to the workspace, instead of downloading PBLs.
- **Controls for PowerBuilder 2019 and 2019 R2**: u_am (Animation), u_dp (DatePicker), u_mc (MonthCalendar), and in 2019 R2, u_wb (WebBrowser) and u_rbb (RibbonBar).
- **Objects for PowerBuilder 2019 R2's classes**: n_coderobject, n_crypterobject, n_compressorobject, n_extractorobject, n_httpclient and n_restclient.
- **The new controls in the services**: the resize, logical unit of work, status bar and conversion services handle them.
- **Databases**: the demo and example applications can use SQL Server as well as SQL Anywhere.

## PFC 2021

- Updated for PowerBuilder 2021.
- **DataStore printing** (n_ds of_SetLegacyPrint), for DataStores without a window handle, and n_ds of_PrintSetup.

## PFC 2022

- **Security** handles the controls added in recent PowerBuilder versions.
- **Supporting files in their own repositories**: the databases, the help file source, the wizard source, the old readme files and the images. The help files were rebuilt as compiled HTML Help (CHM) and PDF.

## PFC 2025

PFC 2025 comes in two forms: the [2025-Solution](https://github.com/OpenSourcePFCLibraries/2025-Solution) repository, in PowerBuilder 2025's solution format (*.pbsln* and projects), and the [2025-Workspace](https://github.com/OpenSourcePFCLibraries/2025-Workspace) repository, in the workspace format. It's meant for PowerBuilder 2025 R2.

- **Sign-in with an identity provider**: an OpenID Connect logon window (w_openid_logon), with the authorization code flow and PKCE; an OAuth 2.0 token service (n_cst_oauth2), also used to send mail with n_smtpclient, a new wrapper of PowerBuilder's SMTPClient class.
- **Security**: groups from the identity provider instead of the security database, an optional deny-by-default mode, and every control type secured. The security scanner reads object source, opens solutions and projects, keeps your work when you scan again, and runs from the command line.
- **Help**: a help service (n_cst_help, w_helpviewer) that shows PDF help in the application or in the PDF viewer; the dialog boxes' Help is a PDF file. Compiled HTML Help replaces WinHelp.
- **Language service**: PFC's messages, and window, menu and DataWindow text, come from a language file, which can be generated from the Translation Toolkit dictionaries.
- **A current look**: Segoe UI in place of MS Sans Serif and Tahoma, current images (SVG, with PNG versions), layout around a ribbon bar, and a status bar that follows the UI theme. One resource file, *pfc.pbr*, lists PFC's images and DataWindow objects. MS Sans Serif is a bitmap font that doesn't scale with the display or use ClearType, and fixed-size bitmaps turn blocky or blurry when they're scaled, so these changes are what let a DPI-aware PFC application look right at high DPI. PFC's own images are in the repository (*pfc libs\images*), so [PFC-Image-Files](https://github.com/OpenSourcePFCLibraries/PFC-Image-Files) no longer has to be on the path.
- **Resize and layout**: a minimum window size, the design-time size as the original size, the DataWindow resize service's FIXEDCENTER methods, live resizing with the split bar, and response windows big enough for their controls.
- **Removed**:
  - the JSON service (n_cst_json, w_debugjson), in favor of PowerBuilder's JSONParser and JSONGenerator
  - the XSLFOP PDF method, in favor of NativePDF
  - the wrappers of obsolete PowerBuilder classes: Connection (n_cn), for EAServer; Inet and InternetResult (n_inet, n_ir), in favor of OpenURL and HTTPClient; Service (n_srv); and ErrorLogging (pfc_n_errorlogging), for EAServer and MTS components
  - saving the DDETimeOut property in the application preference service, since DDE is obsolete
- **Tools**: the Library Extender (*New-PfcExtensionLayer.ps1*), which replaces the PowerBuilder IDE's Library Extender wizard for solutions and workspaces (see "Library Extender" in [the User's Guide, chapter 7](user-guide/07-pfc-utilities.md#library-extender)), an incremental build script (*Build-Incremental.ps1*), and scripts for language files and translations.
- **Unit tests** with PBUnit (see [Running the PFC Unit Tests](unit-tests.md)).
- **Code quality**: Visual Expert was run on the project, and every finding was dealt with: fixed, confirmed as a false positive, or risk-accepted where the fix would break the interface that existing applications are built on.
- **Applications**: the Examples app, PEAT and the security administrator, with ribbons, the UI theme, Fluent icons and Segoe UI.
  - **Examples app**: new examples for the language, security, timing, transaction registration and utility services, the DataStore, grid, query mode and report services, the ribbon bar, the sheet manager and a controls gallery; column header sorting in the Sort Service example and restoring deleted rows in the Row Manager example; the Metaclass, Logical Unit of Work, Recursive Tree View and split bar examples rebuilt; the PFC 5.0 TreeView and ListView examples, and the catalog entries for Rich Text Edit examples that no longer existed, removed. The catalog is read from text files in the repository, and F1 opens the example's help topic.
  - **OpenID Connect demo** (new): signs users in with an identity provider, with the password grant or with the authorization code flow and PKCE in the browser, and applies PFC security from the groups the provider reports. PEAT's OpenID Connect logon moved here.
  - **SMTP demo** (new): sends mail with n_smtpclient and an OAuth 2.0 access token from n_cst_oauth2, with the authorization code flow in the browser, the device code flow, or client credentials.
- **Documentation**: the manuals converted to Markdown and brought up to date, in the [docs](https://github.com/OpenSourcePFCLibraries/docs) repository.

## Updates to PFC 2019 and 2022

In October and November 2026, some of the PFC 2025 changes were also made in the [2019](https://github.com/OpenSourcePFCLibraries/2019) and [2022](https://github.com/OpenSourcePFCLibraries/2022) repositories:

- **Security**: the deny-by-default mode, restrictions kept in place after application code changes a control, and newer and unknown control types handled. The security scanner scans a target's source, merges re-scans and runs from the command line.
- **Resize and layout**: a minimum window size, the design-time size as the original size, the DataWindow resize service's FIXEDCENTER methods, live resizing with the split bar, response windows big enough for their controls, and the MDI client area laid out around a ribbon bar.
- **Status bar**: follows the UI theme's colors, and displays correctly on Windows 10 and later.
- **Help and building**: compiled HTML Help instead of WinHelp (2019; PFC 2022 already used it), and a script that builds the targets from the command line (*tools\build.ps1*).

The 2019 and 2022 versions don't have Segoe UI, the new images, sign-in with an identity provider, OAuth 2.0, n_smtpclient, or the language and help services.
