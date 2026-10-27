# PFC Dialog Help

Help for the dialog boxes of PFC, for the people who use an application built with PFC. Each dialog box's **Help** button opens `pfcdlg.pdf`, which is built from these pages, at its topic.

These topics replace the PFCDLG help file (`pfcdlg.chm`), from the archived [PFCDLG-help-file-and-source](https://github.com/OpenSourcePFCLibraries/PFCDLG-help-file-and-source) repository. Their text was taken from its source, `pfcdlg.rtf`, with small corrections.

| Topic | Destination |
| --- | --- |
| [Extended Filter dialog box](w_filterextended.md) | `w_filterextended` |
| [Simple Filter dialog box](w_filtersimple.md) | `w_filtersimple` |
| [Default Filter dialog box](pb_filter_dialog.md) | `pb_filter_dialog` |
| [Find dialog box](w_find.md) | `w_find` |
| [Page Setup dialog box](w_pagesetup.md) | `w_pagesetup` |
| [Replace dialog box](w_replace.md) | `w_replace` |
| [Restore Row dialog box](w_restorerow.md) | `w_restorerow` |
| [Modify Expression dialog box](PB_Modify_Expression.md) | `PB_Modify_Expression` |
| [Sort dialog box (drag and drop)](w_sortdragdrop.md) | `w_sortdragdrop` |
| [Sort dialog box (multi-sort)](w_sortmulti.md) | `w_sortmulti` |
| [Sort dialog box (single item)](w_sortsingle.md) | `w_sortsingle` |
| [Sort dialog box (default)](PB_sort_dialog.md) | `PB_sort_dialog` |
| [Toolbars dialog box](w_toolbars.md) | `w_toolbars` |
| [Zoom dialog box](w_zoom.md) | `w_zoom` |
| [Debug Log](w_debuglog.md) | `w_debuglog` |
| [DataWindow Properties, Services tab](w_dwproperty_servicestab.md) | `w_dwproperty_servicestab` |
| [DataWindow Properties, Buffers tab](w_dwproperty_bufferstab.md) | `w_dwproperty_bufferstab` |
| [DataWindow Properties, Status Flags tab](w_dwproperty_status_flagstab.md) | `w_dwproperty_status_flagstab` |
| [DataWindow services](w_dwpropertyservices.md) | `w_dwpropertyservices` |
| [SQL Spy](w_sqlspy.md) | `w_sqlspy` |
| [SQL Spy Inspect](w_sqlspyinspect.md) | `w_sqlspyinspect` |

The destination is the name of the topic's place in the PDF: `pfcdlg.pdf#nameddest=w_find` opens it at the Find dialog box topic. They are the context strings of the old help file. A dialog box opens its topic with `of_ShowDialogHelp("<destination>")` (see [n_cst_help](../object-reference/09-custom-class-user-objects/n_cst_help.md)).

## Building pfcdlg.pdf

```
pwsh -File dialog-help/build.ps1
```

This needs Node.js and Microsoft Edge. It writes the topics, in the order of `topics.json`, to one HTML document (`build.js`, with `style.css`), prints it to PDF with Edge, and adds a named destination for each topic (`pdfnames.js`). The generated files are in `dialog-help/build`, which isn't kept in the repository.

## Adding a topic

Write the topic as `<destination>.md`, in the form of the others: a title, a description, and the dialog box's options. Add it to `topics.json` and to the table above, and build.
