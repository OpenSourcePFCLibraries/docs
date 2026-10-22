# u_tv

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension TreeView class.

**Ancestry**

`treeview → pfc_u_tv → u_tv`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

## Instance variables

U_tv includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |
| ids_Buffer |  | n_ds | Protected |
| il_DragSource |  | Long | Public |
| il_DragTarget |  | Long | Public |
| il_queue[ ] |  | Long | Protected |
| inv_ds[ ] |  | n_cst_tvattrib | Protected |
| is_pfckeydelimiter |  | String | Protected |
| istr_ds[ ] |  | n_cst_tvattrib | Protected |
| itr_obj |  | n_tr | Protected |

## Events

U_tv includes these events:

### BeginDrag

**Description**

Save the handle of the item that is being dragged in the instance variable il_DragSource.

**Syntax**

```
instancename.EVENT BeginDrag ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### Constructor

**Description**

Create the temporary buffer DataStore. It will be used to retrieve the rows for a level of the TreeView.

**Syntax**

```
instancename.EVENT Constructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### Destructor

**Description**

Destroy the DataStores that were created when the data sources were registered.

**Syntax**

```
instancename.EVENT Destructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### DragDrop

**Description**

Save the handle of the item that is being dropped on in the instance variable il_DragTarget. The user should extend this script to allow dragging and dropping TreeView items from one branch to another. il_DragSource will equal the handl of the item being dropped. NOTE: You should verify that source is this TreeView control.

**Syntax**

```
instancename.EVENT DragDrop ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### EndLabelEdit

**Description**

Change the label column in the appropriate DataStore to be the new label text. This only works if the label column is updatable. If a computed column is being used for the label, override this script with appropriate code. NOTE: Update() is NOT called for the DataStore. This is left to the user to perform. If the label column is also part of the key, or is used as a retrieval argument for any of its children, this item should be refreshed with of_RefreshItem.

**Syntax**

```
instancename.EVENT EndLabelEdit ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### Getfocus

**Description**

If appropriate, notify the parent window that this control got focus.

**Syntax**

```
instancename.EVENT Getfocus ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### ItemExpanding

**Description**

If this is the first time the item is expanded, call of_PopulateLevel to populate it with its children. This is done in this event as opposed to the ItemPopulate event because it needs to be executed again if the children are deleted (of_RefreshItem).

**Syntax**

```
instancename.EVENT ItemExpanding ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

None.

### pfc_searchcompare

**Description**

This event is triggered by the of_SearchChild function (which is called by of_FindItem). It does the actual comparison between a TreeView item and the target being searched for. If a more complex comparison is desired, this event should be overridden.

**Syntax**

```
instancename.EVENT pfc_searchcompare ( al_handle, as_attribute, aa_target, ab_respectcase, ab_fullcompare )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the item being compared. |
| *as_attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_target* | Any. A variable of type Any containg the search target. |
| *ab_respectcase* | Boolean. True - search is case sensitive, False - search is not case sensitive. Only used if the target is a string. |
| *ab_fullcompare* | Boolean. True - Label or Data and Target must be equal, False - Label or Data can contain Target (uses POS() function). Only used if the target is a string. |

**Return value**

Boolean. Returns True - a match was found, False - no match.

## Functions

U_tv includes these functions:

### of_BuildTree

**Description**

Build the data to populate the DataWindow that will be printed to print a TreeView. This function is called by of_PrintTree and is recurrsive.

**Access**

Protected

**Syntax**

```
instancename.of_BuildTree ( al_handle, as_picts, as_levelpicts )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the TreeView item to start building the tree. |
| *as_picts* | String. The file names for the picture and selected picture to display. |
| *as_levelpicts* | String. The file names for all the pictures and selected pictures to display when using a different picture for each level. |

**Return value**

String. The ImportString data to populate the DataWindow that will be printed.

### of_CreateKey

**Description**

Add a computed column to the DataWindow object that will contain all the keys concatenated together. This is necessary to be able to find a unique row.

**Access**

Protected

**Syntax**

```
instancename.of_CreateKey ( ads_obj )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ads_obj* | n_ds, passed by reference. The DataStore to create the computed column on. |

**Return value**

Integer. Returns 1 - the key was created successfully, -1 - the DataWindow object did not have any key columns assigned.

### of_DeleteItem

**Description**

Delete an item from the TreeView. The item's row will be DELETED from its DataStore (the user must call the Update(), however). All its children will be removed and their rows DISCARDED from their DataStores. Refrential integrity is left to the user.

**Access**

Public

**Syntax**

```
instancename.of_DeleteItem ( al_handle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the item to be delete. |

**Return value**

Integer. Returns 1 - the item was deleted successfully, -1 - an error occurred.

### of_DiscardChildren

**Description**

Remove all the items from the TreeView below a specified item. All appropriate rows will be discarded from the DataStores.

**Access**

Public

**Syntax**

```
instancename.of_DiscardChildren ( al_handle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the item for which all child items will be removed. |

**Return value**

Integer. Returns 1 - the children were removed successfully, -1 - an error occurred.

### of_FindFirstItemLevel

**Description**

Find the first item on a level.

**Access**

Public

**Syntax**

```
instancename.of_FindFirstItemLevel ( ai_level, al_handle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The Level of the TreeView for which the first item is being sought. |
| *al_handle* | Long. The handle of the TreeView item to begin searching. |

**Return value**

Long. The handle of the first item on the given level. Returns 0 if not found, -1 if an error occurrs.

### of_FindItem

**Description**

Search for an item in the TreeView. This function calls of_SearchChild to search for the target in either the Label or Data attribute of the TreeView items. It will use the pfc_searchcompare event to actually perform the comparison. Override this event if another comparison is desired.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_FindItem ( as_attribute, aa_target, al_begin, ai_level, ab_respectcase, ab_fullcompare )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_target* | Any. A variable of type Any containg the search target. |
| *al_begin* | Long. The handle of the TreeView item to begin searching, if 0 entire tree will be searched. |
| *ai_level* | Integer. The level to search, if 0 entire tree will be searched. |
| *ab_respectcase* | Boolean. True - search is case sensitive, False - search is not case sensitive. Only used if the target is a string. |
| *ab_fullcompare* | Boolean. True - Label or Data and Target must be equal, False - Label or Data can contain Target (uses POS() function). Only used if the target is a string. |

**Return value**

Long. The handle of the item whose Label matches the target. Returns 0 if not found, -1 if an error occurrs.

**Syntax 2**

Search for an item in the TreeView. This function calls of_SearchChild which is recursive to search for the target in either the Label or Data attribute of the TreeView items. It will use the pfc_searchcompare event to actually perform the comparison. Override this event if another comparison is desired. This function overloads the real of_FindItem function to allow the last retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_FindItem ( as_attribute, aa_target, al_begin, ai_level, ab_respectcase )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_target* | Any. A variable of type Any containg the search target. |
| *al_begin* | Long. The handle of the TreeView item to begin searching, if 0 entire tree will be searched. |
| *ai_level* | Integer. The level to search, if 0 entire tree will be searched. |
| *ab_respectcase* | Boolean. True - search is case sensitive, False - search is not case sensitive. Only used if the target is a string. |

**Return value**

Long. The handle of the item whose Label matches the target. Returns 0 if not found, -1 if an error occurrs.

**Syntax 3**

Search for an item in the TreeView. This function calls of_SearchChild which is recursive to search for the target in either the Label or Data attribute of the TreeView items. It will use the pfc_searchcompare event to actually perform the comparison. Override this event if another comparison is desired. This function overloads the real of_FindItem function to allow the last 2 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_FindItem ( as_Attribute, aa_Target, al_Begin, ai_Level )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_Attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_Target* | Any. A variable of type Any containg the search target. |
| *al_Begin* | Long. The handle of the TreeView item to begin searching, if 0 entire tree will be searched. |
| *ai_Level* | Integer. The level to search, if 0 entire tree will be searched. |

**Return value**

Long. The handle of the item whose Label matches the target. Returns 0 if not found, -1 if an error occurrs.

**Syntax 4**

Search for an item in the TreeView. This function calls of_SearchChild which is recursive to search for the target in either the Label or Data attribute of the TreeView items. It will use the pfc_searchcompare event to actually perform the comparison. Override this event if another comparison is desired. This function overloads the real of_FindItem function to allow the last 3 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_FindItem ( as_Attribute, aa_Target, al_Begin )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_Attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_Target* | Any. A variable of type Any containg the search target. |
| *al_Begin* | Long. The handle of the TreeView item to begin searching, if 0 entire tree will be searched. |

**Return value**

Long. The handle of the item whose Label matches the target. Returns 0 if not found, -1 if an error occurrs.

**Syntax 5**

Search for an item in the TreeView. This function calls of_SearchChild which is recursive to search for the target in either the Label or Data attribute of the TreeView items. It will use the pfc_searchcompare event to actually perform the comparison. Override this event if another comparison is desired. This function overloads the real of_FindItem function to allow the last 4 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_FindItem ( as_Attribute, aa_Target )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_Attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_Target* | Any. A variable of type Any containg the search target. 0 entire tree will be searched. |

**Return value**

Long. The handle of the item whose Label matches the target. Returns 0 if not found, -1 if an error occurrs.

### of_GetArgs

**Description**

Get the values for the retrieval arguments for a level of the TreeView.

**Access**

Public

**Syntax**

```
instancename.of_GetArgs ( al_parent, ai_level, any aa_arg[20] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_parent* | Long. The handle of the parent of the current TreeView item. |
| *ai_level* | Integer. The current TreeView level. aa_Arg[20] An array of type Any that will contain the retrieval argument values. Passed by reference. |
| *any aa_arg[20]* | , passed by reference. |

**Return value**

Integer. Returns 1 if the for success, -1 if an error occurrs.

### of_GetDataRow

**Description**

Return the DataStore and row a particular item in the TreeView points to. This allows the user to update this row any way they wish.

**Access**

Public

**Syntax**

```
instancename.of_GetDataRow ( al_handle, ads_obj, al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle to the TreeView item for which data is desired. |
| *ads_obj* | n_ds, passed by reference. The handle to the DataStore (of type n_ds) for the item's level. Passed by reference. |
| *al_row* | Long, passed by reference. The row in the DataStore that the item points to. Passed by reference. |

**Return value**

Integer. Returns 1 - the item's data was found, -1 - the item or row was not found.

### of_GetDatastore

**Description**

Return the DataStore a particular level in the TreeView points to.

**Access**

Public

**Syntax**

```
instancename.of_GetDatastore ( ai_level, ads_obj )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The level of the TreeView for which you want the DataStore. |
| *ads_obj* | n_ds, passed by reference. The handle to the DataStore (of type n_ds) for the level. Passed by reference. |

**Return value**

Integer. Returns 1 - the DataStore was found, -1 - the DataStore was not found.

### of_GetItemForData

**Description**

Return the TreeView item that points to a particular row in a DataStore.

**Access**

Public

**Syntax**

```
instancename.of_GetItemForData ( ads_obj, al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ads_obj* | n_ds, passed by reference. The handle to the DataStore (of type n_ds) for the item's level. Passed by reference. |
| *al_row* | Long. The row in the DataStore that the item points to. |

**Return value**

Long. The handle of the TreeView item that points to that row, 0 if the item was not found, or -1 if an error occurrs.

### of_GetParentWindow

**Description**

Calculates the parent window of a window object.

**Access**

Public

**Syntax**

```
instancename.of_GetParentWindow ( aw_parent )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *aw_parent* | Window, passed by reference. The Parent window for this object (passed by reference). If a parent window is not found, aw_parent is NULL. |

**Return value**

Integer. Returns 1 = success, -1 = error.

### of_InitialRetrieve

**Description**

Retrieve the data and populate the first level of the TreeView.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_InitialRetrieve ( any aa_args[20] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *any aa_args[20]* | . |

**Return value**

Long. The number of rows retrieved.

**Syntax 2**

Retrieve the data and populate the first level of the TreeView. This function overloads the real of_InitialRetrieve function to allow the retrieval arguments to be optional.

Access: Public

**Syntax**

```
instancename.of_InitialRetrieve ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

Long. The number of rows retrieved.

### of_InsertItem

**Description**

Add a new item to the TreeView using data from a DataStore.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_InsertItem ( al_parent, ads_obj, al_row, as_position, al_after )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_parent* | Long. The handle of the parent TreeView item that the new item will be inserted under. |
| *ads_obj* | n_ds, passed by reference. The DataStore containing the data to be used for the new item. This can be the same DataStore that was created for the level, or another maintained by the user. If the latter, the row will be added to the level's DataStore. Passed by reference. |
| *al_row* | Long. The row in the DataStore pointing to the data. |
| *as_position* | String. = "After". |
| *al_after* | Long. The handle to the item after which the new item will be inserted. |

**Return value**

Long. Returns the handle of the item if it was added successfully, -1 if an error occurrs.

**Syntax 2**

Add a new item to the TreeView using data from a DataStore. This function overloads the real of_InsertItem function to allow the last parameter to be optional.

Access: Public

**Syntax**

```
instancename.of_InsertItem ( al_parent, ads_obj, al_row, as_position )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_parent* | Long. The handle of the parent TreeView item that the new item will be inserted under. |
| *ads_obj* | n_ds, passed by reference. The DataStore containing the data to be used for the new item. This can be the same DataStore that was created for the level, or another maintained by the user. If the latter, the row will be added to the level's DataStore. Passed by reference. |
| *al_row* | Long. The row in the DataStore pointing to the data. |
| *as_position* | String. The position under the parent where the new item will be inserted: "First" - before the first child of the parent (Default) "Last" - after the last child "Sort" - in the sorted position based on the item's label "After" - after the item with handle al_After (not valid with this format of the function call) |

**Return value**

Long. Returns the handle of the item if it was added successfully, -1 if an error occurrs.

**Syntax 3**

Add a new item to the TreeView using data from a DataStore. This function overloads the real of_InsertItem function to allow the last 2 parameter to be optional. The item will be inserted as the First child.

Access: Public

**Syntax**

```
instancename.of_InsertItem ( al_parent, ads_obj, al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_parent* | Long. The handle of the parent TreeView item that the new item will be inserted under. |
| *ads_obj* | n_ds, passed by reference. The DataStore containing the data to be used for the new item. This can be the same DataStore that was created for the level, or another maintained by the user. If the latter, the row will be added to the level's DataStore. Passed by reference. |
| *al_row* | Long. The row in the DataStore pointing to the data. |

**Return value**

Long. Returns the handle of the item if it was added successfully, -1 if an error occurrs.

### of_MessageBox

**Description**

Display a PowerScript MessageBox. Allow PFC MessageBoxes to be manipulated prior to their actual display.

**Access**

Protected

**Syntax 1**

```
instancename.of_MessageBox ( as_id, as_title, as_text, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_id* | String. An ID for the Message. |
| *as_title* | String. Text for title bar. |
| *as_text* | String. Text for the actual message. |
| *ae_icon* | Icon. The icon you want to display on the MessageBox. |
| *ae_button* | Button. Set of CommandButtons you want to display on the MessageBox. |
| *ai_default* | Integer. The default button. |

**Syntax 2** For a message that contains values (PFC 2025 and later)

```
instancename.of_MessageBox ( as_id, as_title, as_text, as_parms, ae_icon, ae_button, ai_default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_parms* | String array. The values for the placeholders in *as_text* |

The other arguments are the same as in Syntax 1.

**Return value**

Integer. Return value of the MessageBox.

**Usage**

**PFC 2025 and later** When the language service is enabled (see the n_cst_appmanager of_SetLanguage function), the message comes from the language file if it has an entry for *as_id*: the entry *as_id* replaces *as_text*, and the entry *as_id*.title replaces *as_title*. Without the service, or without an entry, *as_text* and *as_title* are used as they are.

Use Syntax 2 for a message that contains values: *as_text* is the English text with placeholders (%s, or %1 - %9 by position) and *as_parms* holds the values. Syntax 2 calls Syntax 1 to display the message, so an override of Syntax 1 still sees every message.

### of_ParseArgs

**Description**

Parse the string of retrieval arugments into separate arguments and fill the array reference arguments.

**Access**

Protected

**Syntax**

```
instancename.of_ParseArgs ( as_args, ai_level, ai_arglevel, as_argcolumn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_args* | String. The retrieval argument string. |
| *ai_level* | Integer. The TreeView level these arguments are for. |
| *ai_arglevel* | Integer array, passed by reference. An integer array that will contain the levels that the retrieval arguments come from, passed by reference. |
| *as_argcolumn* | String array, passed by reference. A string array that will contain the columns containing the retrieval arguments, passed by reference. |

**Return value**

None.

### of_PopulateLevel

**Description**

Populate a TreeView item with its child items.

**Access**

Protected

**Syntax**

```
instancename.of_PopulateLevel ( ai_level, al_parent )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to be populated. |
| *al_parent* | Long. The handle of the parent TreeView item that is being populated. |

**Return value**

Long. Returns # of rows added successfully, -1 if an error occurrs. -2 no key columns defined on data source object -3 Retrieve failed -4 dw object does not exist - of_setdatasource probably failed -5 Setting the transaction object failed.

### of_PrintTree

**Description**

Print the TreeView. This function overloads the real of_PrintTree which is protected. Use this format of the function when the same picture is desired for all levels of the tree.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_PrintTree ( al_handle, ab_canceldialog, as_pictname, as_selpictname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the TreeView item to start building the tree. Pass 0 to print the entire tree. |
| *ab_canceldialog* | Boolean. True - display the Cancel Printing dialog, False - do not display the dialog. |
| *as_pictname* | String. The file name to display as the picture. |
| *as_selpictname* | String. The file name to display as the selected picture. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

**Syntax 2**

Print the TreeView. This function overloads the real of_PrintTree which is protected. Use this format of the function when a different picture is desired for each level of the tree.

Access: Public

**Syntax**

```
instancename.of_PrintTree ( al_handle, ab_canceldialog, string as_levelpicts[10], string as_levelselpicts[10] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the TreeView item to start building the tree. Pass 0 to print the entire tree. |
| *ab_canceldialog* | Boolean. True - display the Cancel Printing dialog, False - do not display the dialog. as_LevelPicts[10] The file names for all the pictures to display a different picture for each level. as_LevelSelPicts[10] The file names for all the pictures to display a different selected picture for each level. |
| *string as_levelpicts[10]* | . |
| *string as_levelselpicts[10]* | . |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

**Syntax 3**

Print the TreeView. This function overloads the real of_PrintTree which is protected. Use this format of the function when the same picture is desired for all levels of the tree. This function will default to using "folder.bmp" for the picture and "foldopen.bmp" for the selected picture.

Access: Public

**Syntax**

```
instancename.of_PrintTree ( al_handle, ab_canceldialog )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the TreeView item to start building the tree. Pass 0 to print the entire tree. |
| *ab_canceldialog* | Boolean. True - display the Cancel Printing dialog, False - do not display the dialog. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

**Syntax 4**

Print the TreeView. This function overloads the real of_PrintTree which is protected. Use this format of the function to print the entire tree with the same picture for all levels. This function will default to using "folder.bmp" for the picture and "foldopen.bmp" for the selected picture.

Access: Public

**Syntax**

```
instancename.of_PrintTree ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

**Syntax 5**

Print the TreeView. This function overloads the real of_PrintTree which is protected. Use this format of the function when the same picture is desired for all levels. This function will default to using "folder.bmp" for the picture and "foldopen.bmp" for the selected picture.

Access: Public

**Syntax**

```
instancename.of_PrintTree ( al_Handle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_Handle* | Long. The handle of the TreeView item to start building the tree. Pass 0 to print the entire tree. |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

**Syntax 6**

Print the TreeView.

Access: Protected

**Syntax**

```
instancename.of_PrintTree ( al_handle, ab_canceldialog, as_pictname, as_selpictname, string as_levelpicts[10], string as_levelselpicts[10] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the TreeView item to start building the tree. Pass 0 to print the entire tree. |
| *ab_canceldialog* | Boolean. True - display the Cancel Printing dialog, False - do not display the dialog. |
| *as_pictname* | String. The file name to display as the picture. |
| *as_selpictname* | String. The file name to display as the selected picture. as_LevelPicts[10] The file names for all the pictures to display a different picture for each level. as_LevelSelPicts[10] The file names for all the pictures to display a different selected picture for each level. |
| *string as_levelpicts[10]* | . |
| *string as_levelselpicts[10]* | . |

**Return value**

Integer. 1 if successful, -1 if an error occurrs.

### of_RefreshItem

**Description**

Refresh an item in the TreeView. This includes removing all its children (and discarding their rows from the DataStores) and resetting its Label and Data attributes from the DataStore. NOTE: If the value of any of the key columns in the DataStore have changed, this function will not work. It will no longer be able to find the proper row. In that case, get the row with of_GetDataRow BEFORE it is changed and call of_RefreshItem(al_Handle, ai_Row)

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_RefreshItem ( al_handle )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the item to be refreshed. |

**Return value**

Integer. Returns 1 - the item was refreshed successfully, -1 - an error occurred.

**Syntax 2**

Refresh an item in the TreeView. This includes removing all its children (and discarding their rows from the DataStores) and resetting its Label and Data attributes from the DataStore. NOTE: If the value of any of the key columns in the DataStore have changed, this function MUST be used rather than of_RefreshItem(al_Handle). Because it would not be able to find the proper row. Get the row by calling of_GetDataRow BEFORE it is changed.

Access: Public

**Syntax**

```
instancename.of_RefreshItem ( al_handle, al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *al_handle* | Long. The handle of the item to be refreshed. |
| *al_row* | Long. The row of the DataStore pointing to the item. |

**Return value**

Integer. Returns 1 - the item was refreshed successfully, -1 - an error occurred.

### of_RefreshLevel

**Description**

Refresh all items in a particular level of the TreeView. This includes removing all lower levels (and discarding their rows from the DataStores) and resetting their Label and Data attributes from the DataStore. NOTE: If the value of any of the key columns in the DataStore have changed, this function will not work. It will no longer be able to find the proper row. In that case, get the row with of_GetDataRow BEFORE it is changed and call of_RefreshItem(al_Handle, ai_Row)

**Access**

Public

**Syntax**

```
instancename.of_RefreshLevel ( ai_level )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The level to be refreshed. |

**Return value**

Integer. Returns 1 - the TreeView was refreshed successfully, -1 - an error occurred.

### of_ResetUpdate

**Description**

Reset the update flags for a DataStore associated with a level of the TreeView.

**Access**

Public

**Syntax**

```
instancename.of_ResetUpdate ( ai_level )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. is 0, all DataStores will be updated. NOTE: There is only one DataStore for all recursive levels. So if ai_Level is a recursive level, all levels using that DataStore will be updated. |

**Return value**

Integer. Returns 1 - the flags were reset successfully, -1 - an error occurred.

### of_SearchChild

**Description**

Search for the target in either the Label or Data attribute of the TreeView items.. This function is called by of_FindItem. It will use the pfc_searchcompare event to actually perform the comparison. Override this event if another comparison is desired.

**Access**

Protected

**Syntax**

```
instancename.of_SearchChild ( as_attribute, aa_target, al_begin, ai_level, ab_respectcase, ab_fullcompare )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *as_attribute* | String. The attribute of the TreeView item to search ("Label", or "Data") |
| *aa_target* | Any. A variable of type Any containg the search target. |
| *al_begin* | Long. The handle of the TreeView item to begin searching, if 0 entire tree will be searched. |
| *ai_level* | Integer. The level to search, if 0 entire tree will be searched. |
| *ab_respectcase* | Boolean. True - search is case sensitive, False - search is not case sensitive. Only used if the target is a string. |
| *ab_fullcompare* | Boolean. True - Label or Data and Target must be equal, False - Label or Data can contain Target (uses POS() function). Only used if the target is a string. |

**Return value**

Long. The handle of the item whose Label or Data matches the target. Returns 0 if not found, -1 if an error occurrs.

### of_SetDatasource

**Description**

Register a data source for a level of the TreeView. The data source is a DataWindow object that will be linked to the TreeView level and used to populate.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_SetDatasource ( ai_level, as_datawindow, atr_obj, as_labelcolumn, as_retrieveargs, ab_recursive, ai_pictureindex, ai_selpictindex, ai_statepictindex, ai_overlaypictindex )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to associate the data source with. |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *atr_obj* | n_tr. The transaction object for this data source (can be different for each level). |
| *as_labelcolumn* | String. The column in the DataWindow object to display. |
| *as_retrieveargs* | String. Retrieval arugments for the DataWindow. These should be separated by commas in the format: :keyword.n.column where column is the name of a column in another level's data source. If keyword is 'level', n is an absolute level number. If keyword is 'parent', n is a number relative to the current level (i.e. :parent.2.c1 would be column c1 in the DataWindow for the level 2 levels above this one. |
| *ab_recursive* | Boolean. True - indicates that this is the last data source for this tree. It will be used recursively for each subsequent level. |
| *ai_pictureindex* | Integer. The index to the picture array to use for this level. |
| *ai_selpictindex* | Integer. The index to the picture array to use for the selected picture for this level. |
| *ai_statepictindex* | Integer. The index to the picture array to use for the state picture for this level. |
| *ai_overlaypictindex* | Integer. The index to the picture array to use for the overlay picture for this level. |

**Return value**

Integer. Returns 1 = the data source was added successfully, -1 = argument validation error, -2 = the DataWindow object did not have any key columns assigned, -3 = a previous level had already been marked as recursive (there can be no more), -4 = column label datatype was not a string, -5 = The transaction object could not be set.

**Syntax 2**

Register a data source for a level of the TreeView. The data source is a DataWindow object that will be linked to the TreeView level and used to populate. This function overloads the real of_SetDatasource function to allow the last two parameters to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDatasource ( ai_level, as_datawindow, atr_obj, as_labelcolumn, as_retrieveargs, ab_recursive, ai_pictureindex, ai_selpictindex )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to associate the data source with. |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *atr_obj* | n_tr. The transaction object for this data source (can be different for each level). |
| *as_labelcolumn* | String. The column in the DataWindow object to display. |
| *as_retrieveargs* | String. Retrieval arugments for the DataWindow. These should be separated by commas in the format: :keyword.n.column where column is the name of a column in another level's data source. If keyword is 'level', n is an absolute level number. If keyword is 'parent', n is a number relative to the current level (i.e. :parent.2.c1 would be column c1 in the DataWindow for the level 2 levels above this one. |
| *ab_recursive* | Boolean. True - indicates that this is the last data source for this tree. It will be used recursively for each subsequent level. |
| *ai_pictureindex* | Integer. The index to the picture array to use for this level. |
| *ai_selpictindex* | Integer. The index to the picture array to use for the selected picture for this level. |

**Return value**

Integer. Returns 1 = the data source was added successfully, -1 = argument validation error, -2 = the DataWindow object did not have any key columns assigned, -3 = a previous level had already been marked as recursive (there can be no more)

**Syntax 3**

Register a data source for a level of the TreeView. The data source is a DataWindow object that will be linked to the TreeView level and used to populate. This function overloads the real of_SetDatasource function to allow the last four parameters to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDatasource ( ai_level, as_datawindow, atr_obj, as_labelcolumn, as_retrieveargs, ab_recursive )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to associate the data source with. |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *atr_obj* | n_tr. The transaction object for this data source (can be different for each level). |
| *as_labelcolumn* | String. The column in the DataWindow object to display. |
| *as_retrieveargs* | String. Retrieval arugments for the DataWindow. These should be separated by commas in the format: :keyword.n.column where column is the name of a column in another level's data source. If keyword is 'level', n is an absolute level number. If keyword is 'parent', n is a number relative to the current level (i.e. :parent.2.c1 would be column c1 in the DataWindow for the level 2 levels above this one. |
| *ab_recursive* | Boolean. True - indicates that this is the last data source for this tree. It will be used recursively for each subsequent level. |

**Return value**

Integer. Returns 1 = the data source was added successfully, -1 = argument validation error, -2 = the DataWindow object did not have any key columns assigned, -3 = a previous level had already been marked as recursive (there can be no more)

**Syntax 4**

Register a data source for a level of the TreeView. The data source is a DataWindow object that will be linked to the TreeView level and used to populate. This function overloads the real of_SetDatasource function to allow the last parameter to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDatasource ( ai_level, as_datawindow, atr_obj, as_labelcolumn, as_retrieveargs, ab_recursive, ai_pictureindex, ai_selpictindex, ai_statepictindex )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to associate the data source with. |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *atr_obj* | n_tr. The transaction object for this data source (can be different for each level). |
| *as_labelcolumn* | String. The column in the DataWindow object to display. |
| *as_retrieveargs* | String. Retrieval arugments for the DataWindow. These should be separated by commas in the format: :keyword.n.column where column is the name of a column in another level's data source. If keyword is 'level', n is an absolute level number. If keyword is 'parent', n is a number relative to the current level (i.e. :parent.2.c1 would be column c1 in the DataWindow for the level 2 levels above this one. |
| *ab_recursive* | Boolean. True - indicates that this is the last data source for this tree. It will be used recursively for each subsequent level. |
| *ai_pictureindex* | Integer. The index to the picture array to use for this level. |
| *ai_selpictindex* | Integer. The index to the picture array to use for the selected picture for this level. |
| *ai_statepictindex* | Integer. The index to the picture array to use for the state picture for this level. |

**Return value**

Integer. Returns 1 = the data source was added successfully, -1 = argument validation error, -2 = the DataWindow object did not have any key columns assigned, -3 = a previous level had already been marked as recursive (there can be no more)

**Syntax 5**

Register a data source for a level of the TreeView. The data source is a DataWindow object that will be linked to the TreeView level and used to populate. This function overloads the real of_SetDatasource function to allow the last three parameters to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDatasource ( ai_level, as_datawindow, atr_obj, as_labelcolumn, as_retrieveargs, ab_recursive, ai_pictureindex )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to associate the data source with. |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *atr_obj* | n_tr. The transaction object for this data source (can be different for each level). |
| *as_labelcolumn* | String. The column in the DataWindow object to display. |
| *as_retrieveargs* | String. Retrieval arugments for the DataWindow. These should be separated by commas in the format: :keyword.n.column where column is the name of a column in another level's data source. If keyword is 'level', n is an absolute level number. If keyword is 'parent', n is a number relative to the current level (i.e. :parent.2.c1 would be column c1 in the DataWindow for the level 2 levels above this one. |
| *ab_recursive* | Boolean. True - indicates that this is the last data source for this tree. It will be used recursively for each subsequent level. |
| *ai_pictureindex* | Integer. The index to the picture array to use for this level. |

**Return value**

Integer. Returns 1 = the data source was added successfully, -1 = argument validation error, -2 = the DataWindow object did not have any key columns assigned, -3 = a previous level had already been marked as recursive (there can be no more)

**Syntax 6**

Register a data source for a level of the TreeView. The data source is a DataWindow object that will be linked to the TreeView level and used to populate. This function overloads the real of_SetDatasource function to allow the last five parameters to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDatasource ( ai_level, as_datawindow, atr_obj, as_labelcolumn, as_retrieveargs )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The TreeView level to associate the data source with. |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *atr_obj* | n_tr. The transaction object for this data source (can be different for each level). |
| *as_labelcolumn* | String. The column in the DataWindow object to display. |
| *as_retrieveargs* | String. Retrieval arugments for the DataWindow. These should be separated by commas in the format: :keyword.n.column where column is the name of a column in another level's data source. If keyword is 'level', n is an absolute level number. If keyword is 'parent', n is a number relative to the current level (i.e. :parent.2.c1 would be column c1 in the DataWindow for the level 2 levels above this one. |

**Return value**

Integer. Returns 1 = the data source was added successfully, -1 = argument validation error, -2 = the DataWindow object did not have any key columns assigned, -3 = a previous level had already been marked as recursive (there can be no more)

### of_SetItemAttributes

**Description**

Set the attributes of a TreeView item with data from its DataStore.

**Access**

Protected

**Syntax**

```
instancename.of_SetItemAttributes ( ai_index, ads_obj, al_row, atvi_item )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_index* | Integer. The index into the data source attribute class for this item. |
| *ads_obj* | n_ds, passed by reference. The DataStore with the data used to populate the item. Passed by reference. |
| *al_row* | Long. The row in the DataStore for the item. |
| *atvi_item* | TreeViewItem, passed by reference. The TreeView item that is being populated. Passed by reference. |

**Return value**

Integer. Returns 1 if the item was populated successfully, -1 if an error occurrs.

### of_SetPictureColumn

**Description**

Identify a column in the DataStore to use for one of the various picture indexes for the TreeView items in this level. This will override any index set with the of_SetDatasource function.

**Access**

Public

**Syntax**

```
instancename.of_SetPictureColumn ( ai_level, as_column, as_indextype )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. The level to use the picture index for. |
| *as_column* | String. The name of the column in the DataStore to use for the index. |
| *as_indextype* | String. The index type: "PictureIndex", "SelectedPictureIndex", "StatePictureIndex", or "OverlayPictureIndex" (this is NOT case-sensitive) |

**Return value**

Integer. Return 1 if successful, -1 if an invalid parameter was passed.

### of_Update

**Description**

Update the DataStore associated with a level of the TreeView.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_Update ( ai_level, ab_accept, ab_resetflag )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. is 0, all DataStores will be updated. NOTE: There is only one DataStore for all recursive levels. So if ai_Level is a recursive level, all levels using that DataStore will be updated. |
| *ab_accept* | Boolean. True - (default) perform an AcceptText prior to the update, False - do not perform an AcceptText. ab_ResetFlags True - (default) reset the status flags, False - do not reset the flags. |
| *ab_resetflag* | Boolean. |

**Return value**

Integer. Returns 1 - the level was updated successfully, -1 - an error occurred.

**Syntax 2**

Update the DataStore associated with a level of the TreeView. This function overloads the real of_Update function to allow the last retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_Update ( ai_level, ab_accept )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. is 0, all DataStores will be updated. NOTE: There is only one DataStore for all recursive levels. So if ai_Level is a recursive level, all levels using that DataStore will be updated. |
| *ab_accept* | Boolean. True - (default) perform an AcceptText prior to the update, False - do not perform an AcceptText. |

**Return value**

Integer. Returns 1 - the level was updated successfully, -1 - an error occurred.

**Syntax 3**

Update the DataStore associated with a level of the TreeView. This function overloads the real of_Update function to allow the last 2 retrieval arguments to be optional.

Access: Public

**Syntax**

```
instancename.of_Update ( ai_level )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |
| *ai_level* | Integer. is 0, all DataStores will be updated. NOTE: There is only one DataStore for all recursive levels. So if ai_Level is a recursive level, all levels using that DataStore will be updated. |

**Return value**

Integer. Returns 1 - the level was updated successfully, -1 - an error occurred.

**Syntax 4**

Update all the DataStores associated with the TreeView. This function overloads the real of_Update function to allow the retrieval arguments to be optional.

Access: Public

**Syntax**

```
instancename.of_Update ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_tv |

**Return value**

Integer. Returns 1 - the level was updated successfully, -1 - an error occurred.
