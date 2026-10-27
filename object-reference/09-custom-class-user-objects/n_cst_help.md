# n_cst_help

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

Help service. N_cst_help shows a PDF help file at a topic: in a window of the application ([w_helpviewer](../02-window-objects/w_helpviewer.md)), or in the user's PDF viewer. It shows the application's help file (the pfc_Help event of w_master) and the help of the PFC dialog boxes, whose Help buttons call w_master of_ShowDialogHelp. Compiled HTML Help (.chm) and WinHelp (.hlp) files are still shown with the ShowHelp function.

**Ancestry**

`nonvisualobject → n_base → pfc_n_cst_help → n_cst_help`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

Enable the service with the n_cst_appmanager of_SetHelp function, and set the help file with of_SetHelpFile:

```
this.of_SetHelpFile("myapp.pdf")
this.of_SetHelp(TRUE)
```

A help file without a path is looked for in the current folder and then in the folder of the application. Put `pfcdlg.pdf`, the help of the PFC dialog boxes, there too. It is built from the [dialog help](../../dialog-help/README.md) in this repository.

Without the service, w_master and the dialog boxes create one when they need it, which shows help in the application.

**Where help is shown**

By default, a PDF help file is shown in w_helpviewer, a window of the application with a browser control (u_wb, Microsoft Edge WebView2), whose PDF viewer opens the file at the topic. It needs nothing besides the WebView2 runtime, which Windows includes. The window stays open, and the next help is shown in it.

To show help in the user's PDF viewer (the program that opens .pdf files), call of_SetViewer:

```
gnv_app.inv_help.of_SetViewer(gnv_app.inv_help.PDFVIEWER)
```

PFC opens the file at the topic in Microsoft Edge, Google Chrome, Mozilla Firefox, Brave, Adobe Acrobat and Acrobat Reader, and SumatraPDF (see of_GetViewerCommand). Another viewer opens the file at its start.

**Topics**

A topic is a named destination in the PDF file, and the file is opened as `file.pdf#nameddest=<destination>`:

- A help topic number, as w_master's ia_helptypeid holds it, is the destination `topic_<number>` (see of_GetDestination). A topic number was the help context number of a compiled help file, so an application keeps its numbers.
- A string is the destination itself. The PFC dialog boxes use the names of their windows: `w_find`, `w_sortmulti`, and so on.

A PDF file has named destinations only if the program that made it writes them. Edge and WebView2 read them only from the document's name tree (the /Names /Dests dictionary, PDF 1.2), not from the older /Dests dictionary. The PFC help files get them from a script, `pdfnames.js`, which adds a name tree to a PDF from its /Dests dictionary (Edge's print to PDF writes one, for the elements a link in the document points to) or from its bookmarks (for a PDF from Word's export). See `dialog-help/pdfnames.js`.

**See also**

n_cst_appmanager of_SetHelp and of_SetHelpFile, [w_helpviewer](../02-window-objects/w_helpviewer.md), [w_master](../02-window-objects/w_master.md) pfc_Help and of_ShowDialogHelp

## Instance variables

N_cst_help includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| DEFAULTDIALOGHELPFILE | Constant: "pfcdlg.pdf", the help file of the PFC dialog boxes | String | Public |
| INAPP | Constant: 1, help is shown in the application (w_helpviewer) | Integer | Public |
| PDFVIEWER | Constant: 2, help is shown in the user's PDF viewer | Integer | Public |
| ii_viewer | Where PDF help files are shown: INAPP (the default) or PDFVIEWER | Integer | Protected |
| is_dialoghelpfile | The help file of the PFC dialog boxes | String | Protected |

## Functions

N_cst_help includes these functions:

### of_CleanDestination

**Description**

Keeps the characters a destination's name can have here: letters, digits, and "_", "-" and ".". The destination goes into a URL and a command line.

**Access**

Protected

**Syntax**

```
instancename.of_CleanDestination ( destination )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *destination* | String. A named destination |

**Return value**

String. The destination's letters, digits, "_", "-" and ".".

### of_GetApplicationFolder

**Description**

Gets the folder of the application.

**Access**

Protected

**Syntax**

```
instancename.of_GetApplicationFolder ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |

**Return value**

String. The folder of the executable, or the current folder when the application runs in the IDE, with a trailing backslash.

### of_GetDestination

**Description**

Gets the named destination of a help topic number.

**Access**

Public

**Syntax**

```
instancename.of_GetDestination ( topic )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *topic* | Long. A help topic number (a help context number of a compiled help file) |

**Return value**

String. `topic_<number>`, or an empty string for a number of 0 or less.

### of_GetDialogHelpFile

**Description**

Gets the help file of the PFC dialog boxes.

**Access**

Public

**Syntax**

```
instancename.of_GetDialogHelpFile ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |

**Return value**

String. The help file, pfcdlg.pdf unless of_SetDialogHelpFile set another.

### of_GetPath

**Description**

Finds a help file.

**Access**

Protected

**Syntax**

```
instancename.of_GetPath ( file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *file* | String. A help file, with or without a path |

**Return value**

String. The full path of the file: as given, if it exists; otherwise in the current folder or the folder of the application. Returns an empty string if the file isn't found.

### of_GetURL

**Description**

Gets the file: URL of a file, with a named destination.

**Access**

Public

**Syntax**

```
instancename.of_GetURL ( path, destination )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *path* | String. The full path of the file |
| *destination* | String. A named destination in the file, or an empty string |

**Return value**

String. The URL, with `#nameddest=<destination>` when a destination is given. Spaces and the characters that have a meaning in a URL (`%`, `#` and `?`) are escaped, and the destination keeps only its letters, digits, "_", "-" and ".".

**Examples**

```
// file:///C:/Program%20Files/MyApp/myapp.pdf#nameddest=topic_1010
ls_url = gnv_app.inv_help.of_GetURL("C:\Program Files\MyApp\myapp.pdf", "topic_1010")
```

### of_GetViewer

**Description**

Gets where PDF help files are shown.

**Access**

Public

**Syntax**

```
instancename.of_GetViewer ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |

**Return value**

Integer. INAPP or PDFVIEWER.

### of_GetViewerCommand

**Description**

Gets the command line that opens a PDF file at a named destination in a PDF viewer.

**Access**

Public

**Syntax**

```
instancename.of_GetViewerCommand ( viewer, path, destination )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *viewer* | String. The program that opens PDF files, with its path |
| *path* | String. The full path of the PDF file |
| *destination* | String. The named destination, or an empty string |

**Return value**

String. The command line, or an empty string if PFC doesn't know how the program opens a file at a destination:

| Viewer | Command line |
| --- | --- |
| Microsoft Edge (msedge.exe), Google Chrome (chrome.exe), Mozilla Firefox (firefox.exe), Brave (brave.exe) | `"viewer" "file:///path#nameddest=destination"` |
| Adobe Acrobat (acrobat.exe), Acrobat Reader (acrord32.exe) | `"viewer" /A "nameddest=destination" "path"` |
| SumatraPDF (sumatrapdf.exe) | `"viewer" -named-dest destination "path"` |

**Usage**

To support another viewer, extend this function in n_cst_help.

### of_IsCompiledHelp

**Description**

Tells whether a help file is a compiled help file, which ShowHelp shows.

**Access**

Public

**Syntax**

```
instancename.of_IsCompiledHelp ( file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *file* | String. A help file |

**Return value**

Boolean. True for a compiled HTML Help (.chm) or WinHelp (.hlp) file; False for any other file.

### of_SetDialogHelpFile

**Description**

Sets the help file of the PFC dialog boxes.

**Access**

Public

**Syntax**

```
instancename.of_SetDialogHelpFile ( file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *file* | String. The help file, pfcdlg.pdf by default. Without a path, it is looked for in the current folder and then in the folder of the application |

**Return value**

Integer. Returns 1 if it succeeds and -1 for an empty or null file name.

### of_SetViewer

**Description**

Sets where PDF help files are shown.

**Access**

Public

**Syntax**

```
instancename.of_SetViewer ( viewer )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *viewer* | Integer. INAPP to show help in the application (w_helpviewer), the default, or PDFVIEWER to show it in the user's PDF viewer |

**Return value**

Integer. Returns 1 if it succeeds and -1 for another value.

**Examples**

This example uses the user's choice, saved in the application's INI file:

```
If ProfileString(ls_inifile, "Application", "HelpViewer", "InApp") = "PDFViewer" Then
   gnv_app.inv_help.of_SetViewer(gnv_app.inv_help.PDFVIEWER)
End If
```

### of_ShowDialogHelp

**Description**

Shows the help of a PFC dialog box, from the help file set with of_SetDialogHelpFile.

**Access**

Public

**Syntax**

```
instancename.of_ShowDialogHelp ( destination )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *destination* | String. The topic of the dialog box: the name of the PFC window without its prefix, for example "w_find" |

**Return value**

Integer. Returns 1 if it succeeds and -1 if the help file doesn't exist or couldn't be shown.

**Usage**

The dialog boxes call w_master of_ShowDialogHelp, which uses gnv_app.inv_help if the application started the service.

### of_ShowHelp

**Description**

Shows a help file at a topic, or from its start.

**Access**

Public

**Syntax**

```
instancename.of_ShowHelp ( file {, destination } )
instancename.of_ShowHelp ( file, topic )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *file* | String. The help file: a PDF file, or a compiled HTML Help (.chm) or WinHelp (.hlp) file. Without a path, it is looked for in the current folder and then in the folder of the application |
| *destination* | String. For a PDF file, the named destination to show, or an empty string for the start of the file. For a compiled help file, a keyword, or an empty string for its contents |
| *topic* | Long. A help topic number: in a PDF file, the destination `topic_<number>`, and in a compiled help file, its help context number |

**Return value**

Integer. Returns 1 if it succeeds and -1 if the file doesn't exist or couldn't be shown.

**Usage**

A PDF file is shown where of_SetViewer says. A compiled help file is shown with ShowHelp: with Keyword!, Topic! or Index!, as w_master pfc_Help did before.

**Examples**

```
// The topic of a window, by its help topic number
gnv_app.inv_help.of_ShowHelp(gnv_app.of_GetHelpFile(), 1010)

// A named destination
gnv_app.inv_help.of_ShowHelp("myapp.pdf", "getting_started")
```

### of_ShowInApp

**Description**

Shows a PDF file in the help window of the application, w_helpviewer, which is opened if it isn't open.

**Access**

Protected

**Syntax**

```
instancename.of_ShowInApp ( url )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *url* | String. The file: URL of the PDF file, with its destination (see of_GetURL) |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs.

### of_ShowInViewer

**Description**

Opens a PDF file in the program that opens PDF files on the computer, at the destination when PFC knows how the program does that (see of_GetViewerCommand); otherwise at the file's start.

**Access**

Protected

**Syntax**

```
instancename.of_ShowInViewer ( path, destination )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_help |
| *path* | String. The full path of the PDF file |
| *destination* | String. The named destination, or an empty string |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs.
