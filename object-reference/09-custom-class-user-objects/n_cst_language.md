# n_cst_language

> Not covered in the original (PowerBuilder 9) edition of this reference. Available in PFC 2025 and later; not available in the 2019 and 2022 versions of PFC.

**Description**

Language service. N_cst_language shows PFC in another language at run time, from a language file: the messages PFC displays, and the captions of windows, controls, menus and DataWindow objects. One copy of PFC serves every language, and translations survive PFC fixes.

**Ancestry**

`nonvisualobject → n_base → pfc_n_cst_language → n_cst_language`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

Enable the service with the n_cst_appmanager of_SetLanguage function, before you open any windows:

```
this.of_SetLanguage(TRUE)
```

When it is created, the service reads `lang\pfc.lng` in the application folder (the folder of the executable, or the current folder when the application runs in the PowerBuilder IDE), the same way PowerBuilder 2025 R2 reads its runtime messages from `lang\default.lng`. To translate PFC, put a language file for your language there; without one, PFC stays in English.

It then reads the application's own language file, `lang\<application>.lng`, where *application* is the name of the application object (for example `lang\peat.lng`). Its entries are added, and take precedence over those of `pfc.lng`. Keep your application's texts there, and your corrections of PFC's, so that updating PFC's `pfc.lng` never touches them.

Use of_SetLanguageFile to start over with another file, for example to let users choose a language, and of_AddLanguageFile to add more files.

PFC ships the English file, `lang\pfc.lng`, which `tools\New-PfcLanguageFile.ps1` generates from the PFC source. First translations for Danish, Dutch, French, German, Italian, Norwegian, Spanish and Swedish are in the [localization](https://github.com/OpenSourcePFCLibraries/localization) repository.

With the service enabled:

- **Messages:** of_MessageBox in the PFC objects shows the entry for the message ID, if the file has one (see "Messages" below).
- **Windows:** w_master translates each window when it opens, before pfc_PreOpen: its title, its controls and its menu (see of_Translate). Captions the application changes in pfc_PreOpen or later are not affected.
- **Popup menus:** the PFC controls translate their popup menus before showing them.
- **Tab pages:** u_tab translates a tab page created on demand when it is first selected.

For other texts, such as a DataStore used to print a report or a text your application builds, call of_Translate, of_TranslateText or of_GetText.

**Language file format**

A language file is a text file in UTF-16 (like `default.lng`), UTF-8, or ANSI. The encoding is read from the byte order mark. Each line is an entry or a comment:

```
# Module: Messages (of_MessageBox), by ID
pfc_logon_enterid="Bitte geben Sie zum Anmelden eine Benutzer-ID ein."
pfc_rowmanager_confirmmultipledelete="Möchten Sie diese %s %s wirklich löschen?"
pfc_rowmanager_confirmmultipledelete.title="Mehrfaches Löschen bestätigen"

# Module: Captions, by English text
"&Cancel"="&Abbrechen"
"&Copy~tCtrl+C"="&Kopieren~tCtrl+C"
"Page Setup"="Seite einrichten"
```

- **Messages and other texts** are identified by an ID: `ID="text"`. IDs are not case sensitive. The entry *ID*.title is the title of a message box.
- **Captions** are identified by their English text: `"English"="translation"`. Captions are case sensitive, and a caption changes only when the file has an entry for its exact text, so captions your application changed to other texts are kept.
- **In the texts:** `%s` is a value, in order, and `%1` to `%9` a value by position, so a translation can change the order. `%%` is a percent sign. The PowerScript escapes `~r~n` (line break), `~t` (tab: in a menu item, before the shortcut), `~"` and `~~` can be used. `&` marks the access key of a caption.
- Lines that start with `#` are comments. When a key appears more than once, the last entry is used.

**What is translated**

| Object | Properties |
| --- | --- |
| Window | Title |
| CommandButton, CheckBox, RadioButton, StaticText, GroupBox, PictureButton, StaticHyperLink | Text |
| Tab page | Text and PowerTipText, and its controls |
| User object | Its controls |
| Menu item | Text, MicroHelp and ToolbarItemText, and its items |
| DataWindow control, DataStore | The text objects of the DataWindow object (except text objects whose text is an expression) and the display values of code tables |

Text the user enters (SingleLineEdit, MultiLineEdit, EditMask) is not translated. Nor are the items of list boxes and drop-down list boxes, because code often uses them as values: for example, w_find compares the search direction with "up" and "down".

**Messages**

All PFC objects with an of_MessageBox function look the message up by its ID: the entry *ID* replaces the message text, and the entry *ID*.title replaces the title, when the file has them. Messages that contain values use the of_MessageBox syntax with values: the text is the English template with placeholders, and the values replace them after the lookup.

```
string ls_parms[]

ls_parms[1] = String(ll_count)
ls_parms[2] = is_displayunits
of_MessageBox("pfc_rowmanager_confirmmultipledelete", "Confirm Multiple Delete", &
   "Are you sure you want to delete these %s %s?", ls_parms, Question!, YesNo!, 1)
```

Your application can use the same functions for its own messages, with its own IDs, and add them to the language file.

The error message service (n_cst_error) is not affected: its messages come from its own message table or file.

**See also**

n_cst_appmanager of_SetLanguage, [n_cst_string](n_cst_string.md) of_Format, [n_cst_error](n_cst_error.md)

## Instance variables

N_cst_language includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| CAPTION | Constant: the prefix of the keys of captions in is_keys | String | Public |
| DEFAULTFILE | Constant: "pfc.lng", the name of the language file in the lang folder of the application | String | Public |
| il_count | The number of entries | Long | Protected |
| is_file | The language file in use (the first one read), or "" | String | Protected |
| is_files[ ] | All the language files read, in order | String | Protected |
| is_keys[ ] | The keys of the entries, sorted | String | Protected |
| is_values[ ] | The texts of the entries | String | Protected |

## Events

N_cst_language includes these events:

### Constructor

**Description**

Reads the default language files, if they exist: `lang\pfc.lng` in the application folder, and then the application's own file (see of_GetDefaultApplicationFile).

## Functions

N_cst_language includes these functions:

### of_AddLanguageFile

**Description**

Reads another language file, keeping the entries read before. Its entries replace those with the same key.

**Access**

Public

**Syntax**

```
instancename.of_AddLanguageFile ( file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language (the n_cst_appmanager default for this is inv_language) |
| *file* | String. The language file, with its path |

**Return value**

Integer. Returns 1 if the file was read, 0 if there is no such file, and -1 if it could not be read.

**Usage**

The service adds the application's default file itself when it is created. Use this function for other files, or to add the application's file for a language you chose with of_SetLanguageFile.

**Examples**

This example switches to German, for PFC and for the application:

```
gnv_app.inv_language.of_SetLanguageFile(is_appfolder + "lang\german\pfc.lng")
gnv_app.inv_language.of_AddLanguageFile(is_appfolder + "lang\german\myapp.lng")
```

### of_Escape

**Description**

Escapes `~`, `"`, tabs and line breaks in a text, to put it between double quotes in a DataWindow Modify expression.

**Access**

Protected

**Syntax**

```
instancename.of_Escape ( text )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *text* | String. The text |

**Return value**

String. The escaped text.

### of_Find

**Description**

Finds an entry.

**Access**

Protected

**Syntax**

```
instancename.of_Find ( key )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *key* | String. An ID (not case sensitive), or CAPTION followed by an English caption (case sensitive) |

**Return value**

Long. The index of the entry in is_keys and is_values, or 0 if there is none.

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
| *instancename* | Instance name of n_cst_language |

**Return value**

String. The folder of the executable, or the current folder when the application runs in the IDE, with a trailing backslash.

### of_GetCount

**Description**

Gets the number of entries in the language file in use.

**Access**

Public

**Syntax**

```
instancename.of_GetCount ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language (the n_cst_appmanager default for this is inv_language) |

**Return value**

Long. The number of entries.

### of_GetDefaultApplicationFile

**Description**

Gets the application's default language file: `lang\<application>.lng` in the application folder, where *application* is the name of the application object.

**Access**

Public

**Syntax**

```
instancename.of_GetDefaultApplicationFile ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |

**Return value**

String. The file name, with its path.

### of_GetDefaultLanguageFile

**Description**

Gets the default language file: `lang\pfc.lng` in the application folder.

**Access**

Public

**Syntax**

```
instancename.of_GetDefaultLanguageFile ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |

**Return value**

String. The file name, with its path.

### of_GetEntry

**Description**

Gets the text of an entry, if the language file has it.

**Access**

Public

**Syntax**

```
instancename.of_GetEntry ( key, text )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *key* | String. The ID of the entry |
| *text* | String, passed by reference. Set to the text of the entry, if there is one |

**Return value**

Boolean. TRUE if the language file has the entry, FALSE otherwise.

### of_GetLanguageFile

**Description**

Gets the language file in use.

**Access**

Public

**Syntax**

```
instancename.of_GetLanguageFile ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |

**Return value**

String. The first language file read (normally `lang\pfc.lng`), with its path, or an empty string if no language file is in use.

### of_GetLanguageFiles

**Description**

Gets all the language files read.

**Access**

Public

**Syntax**

```
instancename.of_GetLanguageFiles ( files )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *files* | String array, passed by reference. The files, in the order they were read |

**Return value**

Integer. The number of files.

### of_GetMessage

**Description**

Gets the title and text of a message from the language file. The PFC of_MessageBox functions call it.

**Access**

Public

**Syntax 1** For a message without values

```
instancename.of_GetMessage ( id, title, text )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *id* | String. The message ID |
| *title* | String, passed by reference. The title; replaced by the entry *id*.title, if there is one |
| *text* | String, passed by reference. The text; replaced by the entry *id*, if there is one and it has no placeholders |

**Syntax 2** For a message with values

```
instancename.of_GetMessage ( id, title, text, values )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *id* | String. The message ID |
| *title* | String, passed by reference. The title; replaced by the entry *id*.title, if there is one |
| *text* | String, passed by reference. The English text with placeholders; replaced by the entry *id*, if there is one, and then the placeholders by the values |
| *values* | String array. The values for the placeholders |

**Return value**

Integer. Returns 1 if the text was replaced by the entry and 0 if not.

### of_GetText

**Description**

Gets a text by its ID, for texts your application builds.

**Access**

Public

**Syntax 1**

```
instancename.of_GetText ( id, default )
```

**Syntax 2** With values

```
instancename.of_GetText ( id, default, values )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language (the n_cst_appmanager default for this is inv_language) |
| *id* | String. The ID of the entry |
| *default* | String. The text to use when the language file has no entry for *id* (the English text) |
| *values* | String array. The values for the placeholders in the text |

**Return value**

String. The text of the entry, or *default*, with the placeholders replaced by the values (Syntax 2).

**Examples**

```
st_status.Text = gnv_app.inv_language.of_GetText &
   ("app_status_ready", "Ready")
```

### of_HasPlaceholders

**Description**

Determines whether a text has placeholders (%s, or %1 - %9).

**Access**

Protected

**Syntax**

```
instancename.of_HasPlaceholders ( text )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *text* | String. The text |

**Return value**

Boolean. TRUE if the text has a placeholder.

### of_Load

**Description**

Reads a language file.

**Access**

Protected

**Syntax**

```
instancename.of_Load ( file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *file* | String. The language file |

**Return value**

Integer. Returns 1 if the file was read and -1 if it could not be opened.

### of_SetLanguageFile

**Description**

Reads a language file, replacing the entries read before.

**Access**

Public

**Syntax**

```
instancename.of_SetLanguageFile ( file )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language (the n_cst_appmanager default for this is inv_language) |
| *file* | String. The language file, with its path, or an empty string to use none |

**Return value**

Integer. Returns 1 if the file was read, 0 if there is no such file (texts stay in English), and -1 if the file could not be read.

**Usage**

Windows already open keep their texts. To change the language of an open window, close and reopen it.

**Examples**

This example reads the language file the user chose, from a lang folder with a subfolder for each language (is_appfolder holds the application folder):

```
gnv_app.inv_language.of_SetLanguageFile &
   (is_appfolder + "lang\" + ddlb_language.Text + "\pfc.lng")
```

### of_Sort

**Description**

Sorts the entries by key, keeping the last entry read for each key, so that of_Find can do a binary search.

**Access**

Protected

**Syntax**

```
instancename.of_Sort ( seq )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *seq* | Long array. The order in which the entries were read |

**Return value**

None.

### of_Translate

**Description**

Translates the captions of a window, a menu, a control, or a DataStore.

**Access**

Public

**Syntax**

```
instancename.of_Translate ( object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language (the n_cst_appmanager default for this is inv_language) |
| *object* | The window (its title, controls and menu), menu or menu item (with its items), control (WindowObject), or DataStore to translate |

**Return value**

Integer. Returns the number of texts translated, or -1 if the object is not valid.

**Usage**

See "What is translated" above. w_master calls this function for each window when it opens, and the PFC controls call it for their popup menus. Call it yourself for a DataStore, or after you change the DataObject of a DataWindow control. Translating a window again changes nothing.

**Examples**

```
lds_report.DataObject = "d_invoice_report"
gnv_app.inv_language.of_Translate(lds_report)
```

### of_TranslateDWObjects

**Description**

Translates the text objects and code table display values of the DataWindow object of a DataWindow control or DataStore.

**Access**

Protected

**Syntax**

```
instancename.of_TranslateDWObjects ( dw )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *dw* | PowerObject. A DataWindow control or DataStore |

**Return value**

Integer. The number of texts translated.

### of_TranslateText

**Description**

Translates one caption.

**Access**

Public

**Syntax**

```
instancename.of_TranslateText ( caption )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language (the n_cst_appmanager default for this is inv_language) |
| *caption* | String. A caption, in English |

**Return value**

String. The translation (the entry `"caption"="translation"`), or *caption* if the language file has none.

### of_Unescape

**Description**

Replaces the PowerScript escapes (`~r`, `~n`, `~t`, `~"`, `~'`, `~~`) in a text of the language file by the characters.

**Access**

Protected

**Syntax**

```
instancename.of_Unescape ( value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_language |
| *value* | String. The text, as written in the language file |

**Return value**

String. The text with the escapes replaced.
