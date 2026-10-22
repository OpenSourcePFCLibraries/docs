# u_lv

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension ListView class.

**Ancestry**

`listview → pfc_u_lv → u_lv`

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

## Instance variables

U_lv includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |
| ib_rmbmenu |  | Boolean | Protected |
| ids_source |  | n_ds | Protected |
| ie_CurrentSort |  | Grsorttype | Protected |
| ii_CurrentSortCol |  | Integer | Protected |
| il_LastHandle |  | Long | Protected |
| il_RightClicked |  | Long | Protected |
| im_view |  | m_view | Protected |
| is_ColFormat[ ] |  | String | Protected |
| is_ColType[ ] |  | String | Protected |
| is_Columns[ ] |  | String | Protected |
| is_LabelColumn |  | String | Protected |
| is_OverlayColumn |  | String | Protected |
| is_pfckeydelimiter |  | String | Protected |
| is_PictureColumn |  | String | Protected |
| is_StateColumn |  | String | Protected |
| is_XPosColumn |  | String | Protected |
| is_YPosColumn |  | String | Protected |

## Events

U_lv includes these events:

### ColumnClick

**Description**

Sort the items based on the column whose heading was clicked. If already sorted on that column, then reverse the sort order.

**Syntax**

```
instancename.EVENT ColumnClick ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

None.

### Contextmenu

**Description**

Popup menu.

**Syntax**

```
instancename.EVENT Contextmenu ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

None.

### Destructor

**Description**

Destroy the DataStore that was created when the data source was registered.

**Syntax**

```
instancename.EVENT Destructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

None.

### EndLabelEdit

**Description**

Change the label column in the appropriate to be the new text. This only works if the label column is updatable. If a computed column is being used for the label, override this script with appropriate code. NOTE: Update() is NOT called for the DataStore. This is left to the user to perform.

**Syntax**

```
instancename.EVENT EndLabelEdit ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

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
| *instancename* | Instance name of u_lv |

**Return value**

None.

### pfc_prermbmenu

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_prermbmenu ( am_view )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *am_view* | m_view, passed by reference. |

**Return value**

None.

### Rbuttonup

**Description**

No description is available.

**Syntax**

```
instancename.EVENT Rbuttonup ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

None.

### RightClicked

**Description**

Keep track of the item that was clicked. This is necessary because the contextmenu event has no parameters.

**Syntax**

```
instancename.EVENT RightClicked ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

None.

## Functions

U_lv includes these functions:

### of_AddColumn

**Description**

Add a column to the ListView control. It will be displayed in Report View only.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_AddColumn ( as_columnname, as_columnlabel, aal_alignment, ai_columnwidth )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_columnname* | String. The column in the DataWindow object to add as a column in the ListView. |
| *as_columnlabel* | String. The heading for the column to display in the ListView. |
| *aal_alignment* | Alignment. The alignment of the column in the ListView (Left!, Right!, Center!, Justify!). |
| *ai_columnwidth* | Integer. The width of the column in the ListView (in PB Units). |

**Return value**

Integer. The index of the column if added successfully, -1 if an error occurred.

**Syntax 2**

Add a column to the ListView control. It will be displayed in Report View only. This function overrides the real of_AddColumn to allow the column width to be determined by the width of the column in the DataWindow.

Access: Public

**Syntax**

```
instancename.of_AddColumn ( as_columnname, as_columnlabel, aal_alignment )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_columnname* | String. The column in the DataWindow object to add as a column in the ListView. |
| *as_columnlabel* | String. The heading for the column to display in the ListView. |
| *aal_alignment* | Alignment. The alignment of the column in the ListView (Left!, Right!, Center!, Justify!). |

**Return value**

Integer. The index of the column if added successfully, -1 if an error occurred.

**Syntax 3**

Add a column to the ListView control. It will be displayed in Report View only. This function overrides the real of_AddColumn to allow the column width and alignment to be determined by the width of the column in the DataWindow.

Access: Public

**Syntax**

```
instancename.of_AddColumn ( as_columnname, as_columnlabel )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_columnname* | String. The column in the DataWindow object to add as a column in the ListView. |
| *as_columnlabel* | String. The heading for the column to display in the ListView. |

**Return value**

Integer. The index of the column if added successfully, -1 if an error occurred.

**Syntax 4**

Add a column to the ListView control. It will be displayed in Report View only. This function overrides the real of_AddColumn to allow the column width, alignment and label to be determined by the attributes of the column in the DataWindow.

Access: Public

**Syntax**

```
instancename.of_AddColumn ( as_columnname )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_columnname* | String. The column in the DataWindow object to add as a column in the ListView. |

**Return value**

Integer. The index of the column if added successfully, -1 if an error occurred.

### of_AddColumns

**Description**

Add a column to the ListView control for each visible column in the DataWindow. They will be displayed in Report View only.

**Access**

Public

**Syntax**

```
instancename.of_AddColumns ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Integer. The number of columns add if successfull, -1 if an error occurred.

### of_AddItem

**Description**

Add a new item to the ListView using data from the data source.

**Access**

Public

**Syntax**

```
instancename.of_AddItem ( al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_row* | Long. The row in the DataStore to use for the new item's attributes. |

**Return value**

Long. Returns the handle of item added if successfull, -1 if an error occurred.

### of_CreateKey

**Description**

Add a computed column to the DataWindow object that will contain all the keys concatenated together. This is necessary to be able to find a unique row.

**Access**

Protected

**Syntax**

```
instancename.of_CreateKey ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Integer. Returns 1 - the key was created successfully, -1 - the DataWindow object did not have any key columns assigned.

### of_DeleteColumn

**Description**

Delete the column in the ListView control and sync the internal column arrays. Columns are displayed in Report View only. NOTE: If you perform this function on column 1 you should call of_refresh to refresh the data view.

**Access**

Public

**Syntax**

```
instancename.of_DeleteColumn ( ai_column )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *ai_column* | Integer. the column to be removed. |

**Return value**

Integer. 1 if successful, -1 if an error occurred.

### of_DeleteColumns

**Description**

Delete all columns in the ListView control and reset the internal column arrays. Columns are displayed in Report View only. NOTE: If you perform this function on a populated listview you should call of_refresh to refresh the data view if needed.

**Access**

Public

**Syntax**

```
instancename.of_DeleteColumns ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Integer. 1 if successful, -1 if an error occurred.

### of_DeleteItem

**Description**

Delete an item from the ListView and it's corresponding row from the DataStore.

**Access**

Public

**Syntax**

```
instancename.of_DeleteItem ( al_item )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_item* | Long. The handle to the ListView item to be deleted. |

**Return value**

Integer. Returns 1 - the item was deleted successfully, -1 - an error occurred.

### of_FormatData

**Description**

Get the data from a row/column and convert it to a string using the column's format attribute from the DataWindow.

**Access**

Public

**Syntax**

```
instancename.of_FormatData ( as_columnname, as_colformat, as_coltype, al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_columnname* | String. The name of the column whose data is desired. |
| *as_colformat* | String. The format for the column in the DataWindow. |
| *as_coltype* | String. The data type of the column. |
| *al_row* | Long. The row of the data. |

**Return value**

String. The data in the column, row converted to a string and formatted using the format attribute from the DataWindow.

### of_GetCurrentSort

**Description**

Get the column number and sort type for the current sort.

**Access**

Public

**Syntax**

```
instancename.of_GetCurrentSort ( ai_column, agrs_type )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *ai_column* | Integer, passed by reference. The number of the column that the ListView is currently sorted by. |
| *agrs_type* | Grsorttype, passed by reference. The type of sort (Ascending!, Descending!). |

**Return value**

Integer. Returns 1 = listview has been sorted, 0 = listview has not been sorted.

### of_GetDataRow

**Description**

Return the DataStore and row a particular item in the ListView points to. This allows the user to update this row any way they wish.

**Access**

Public

**Syntax**

```
instancename.of_GetDataRow ( al_item, ads_source, al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_item* | Long. The handle to the ListView item for which data is desired. |
| *ads_source* | n_ds, passed by reference. The handle to the DataStore (of type n_ds) for the Listview. Passed by reference. |
| *al_row* | Long, passed by reference. The row in the DataStore that the item points to. Passed by reference. |

**Return value**

Integer. Returns 1 - the item's data was found, -1 - the item or row was not found.

### of_getdatasource

**Description**

Get the DataStore used as the source for the ListView. This allows the user to update this row any way they wish.

**Access**

Public

**Syntax**

```
instancename.of_getdatasource ( ads_source )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *ads_source* | n_ds, passed by reference. The handle to the DataStore (of type n_ds) for the Listview. Passed by reference. |

**Return value**

Integer. Returns 1 - the DataStore was valid, -1 - it was not.

### of_GetItemForRow

**Description**

Return the ListView item that points to a particular row in the source DataStore.

**Access**

Public

**Syntax**

```
instancename.of_GetItemForRow ( al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_row* | Long. The row in the DataStore that the item points to. |

**Return value**

Long. The handle of the ListView item that points to that row, 0 if the item was not found, or -1 if an error occurrs.

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
| *instancename* | Instance name of u_lv |
| *aw_parent* | Window, passed by reference. The Parent window for this object (passed by reference). If a parent window is not found, aw_parent is NULL. |

**Return value**

Integer. Returns 1 = success, -1 = error.

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
| *instancename* | Instance name of u_lv |
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
| *instancename* | Instance name of u_lv |
| *as_parms* | String array. The values for the placeholders in *as_text* |

The other arguments are the same as in Syntax 1.

**Return value**

Integer. Return value of the MessageBox.

**Usage**

**PFC 2025 and later** When the language service is enabled (see the n_cst_appmanager of_SetLanguage function), the message comes from the language file if it has an entry for *as_id*: the entry *as_id* replaces *as_text*, and the entry *as_id*.title replaces *as_title*. Without the service, or without an entry, *as_text* and *as_title* are used as they are.

Use Syntax 2 for a message that contains values: *as_text* is the English text with placeholders (%s, or %1 - %9 by position) and *as_parms* holds the values. Syntax 2 calls Syntax 1 to display the message, so an override of Syntax 1 still sees every message.

### of_Populate

**Description**

Populate the ListView with items from the data source.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_Populate ( any aa_Args[20] )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *any aa_Args[20]* | . |

**Return value**

Long. Returns the number of items added if successfull, -1 if an error occurred.

**Syntax 2**

Populate the ListView with items from the data source. This function overrides the real of_Populate to allow the retrieval arguments to be optional.

Access: Public

**Syntax**

```
instancename.of_Populate ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Long. Returns the number of items added if successfull, -1 if an error occurred.

### of_Refresh

**Description**

Refresh the ListView with items from the data source.

**Access**

Public

**Syntax**

```
instancename.of_Refresh ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Long. Returns the number of items added if successfull, -1 if an error occurred.

### of_RefreshItem

**Description**

Refresh an item in the ListView. Reset all its attributes to the appropriate values based on the data in the DataStore.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_RefreshItem ( al_Item, al_Row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_Item* | Long. The handle of the item to be refreshed. |
| *al_Row* | Long. The row in the DataStore to use for the item's attributes. |

**Return value**

Integer. Returns 1 if successfull, -1 if an error occurred.

**Syntax 2**

Refresh an item in the ListView. Reset all its attributes to the appropriate values based on the data in the DataStore. This function overrides the real of_RefreshItem to allow the DataStore row to be optional. NOTE: If the value of any of the key columns in the DataStore have changed, this function will not work. It will no longer be able to find the proper row. In that case, get the row with of_GetDataRow BEFORE it is changed and call of_RefreshItem(al_Item, ai_Row)

Access: Public

**Syntax**

```
instancename.of_RefreshItem ( al_item )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_item* | Long. The handle of the item to be refreshed. |

**Return value**

Integer. Returns 1 if successfull, -1 if an error occurred.

### of_RefreshItemForRow

**Description**

Refresh an item in the ListView. Reset all its attributes to the appropriate values based on the data in the DataStore. NOTE: If the value of any of the key columns in the DataStore have changed, this function will not work. It will no longer be able to find the proper row. In that case, get the row with of_GetDataRow BEFORE it is changed and call of_RefreshItem(al_Item, ai_Row)

**Access**

Public

**Syntax**

```
instancename.of_RefreshItemForRow ( al_row )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_row* | Long. The row in the DataStore whose item is to be refreshed. |

**Return value**

Integer. Returns 1 if successfull, -1 if an error occurred.

### of_ResetUpdate

**Description**

Reset the update flags for a DataStore associated with the ListView.

**Access**

Public

**Syntax**

```
instancename.of_ResetUpdate ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Integer. Returns 1 - the DataStore flags were reset successfully, -1 - an error occurred.

### of_SetAttributes

**Description**

Set the attributes of a ListView item using data from the data source.

**Access**

Protected

**Syntax**

```
instancename.of_SetAttributes ( al_row, alvi_item )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *al_row* | Long. The row in the DataStore to use for the item's attributes. |
| *alvi_item* | ListViewItem, passed by reference. The pointer to a ListView item whose attributes are to be set. Passed by reference. |

**Return value**

Integer. Returns 1 if successfull, -1 if an error occurred.

### of_SetDataSource

**Description**

Register a data source for the ListView. The data source is a DataWindow object that will be linked to the ListView level and used to populate.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_SetDataSource ( as_datawindow, at_trans, as_labelcolumn, as_picturecolumn, as_statecolumn, as_overlaycolumn, as_xposcolumn, as_yposcolumn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *at_trans* | n_tr. The transaction object for this data source. |
| *as_labelcolumn* | String. The column in the DataWindow object to display as the label. |
| *as_picturecolumn* | String. The column in the DataWindow object to use for the picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). Or a number may be passed in (i.e. "1") which will be used as the picture index for all items. |
| *as_statecolumn* | String. The column in the DataWindow object to use for the state picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). Or a number may be passed in (i.e. "1") which will be used as the state picture index for all items. |
| *as_overlaycolumn* | String. The column in the DataWindow object to use for the overlay picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). Or a number may be passed in (i.e. "1") which will be used as the state picture index for all items. |
| *as_xposcolumn* | String. The column in the DataWindow object to use for the x-position of the item (used in large icon and small icon views only). |
| *as_yposcolumn* | String. The column in the DataWindow object to use for the x-position of the item (used in large icon and small icon views only). |

**Return value**

Integer. Returns 1 - the data source was added successfully, -1 - there were no key columns defined on the DataWindow, -2 - one of the columns provided did not exist, -3 - no DataWindow object was provided, -4 - the SetTransObject failed.

**Syntax 2**

Register a data source for the ListView. The data source is a DataWindow object that will be linked to the ListView level and used to populate. This function overloads the real of_SetDataSource function to allow the last 5 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDataSource ( as_datawindow, at_trans, as_labelcolumn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *at_trans* | n_tr. The transaction object for this data source. |
| *as_labelcolumn* | String. The column in the DataWindow object to display as the label. |

**Return value**

Integer. Returns 1 - the data source was added successfully, -1 - there were no key columns defined on the DataWindow, -2 - one of the columns provided did not exist, -3 - no DataWindow object was provided.

**Syntax 3**

Register a data source for the ListView. The data source is a DataWindow object that will be linked to the ListView level and used to populate. This function overloads the real of_SetDataSource function to allow the last 3 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDataSource ( as_datawindow, at_trans, as_labelcolumn, as_picturecolumn, as_statecolumn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *at_trans* | n_tr. The transaction object for this data source. |
| *as_labelcolumn* | String. The column in the DataWindow object to display as the label. |
| *as_picturecolumn* | String. The column in the DataWindow object to use for the picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). |
| *as_statecolumn* | String. The column in the DataWindow object to use for the state picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). |

**Return value**

Integer. Returns 1 - the data source was added successfully, -1 - there were no key columns defined on the DataWindow, -2 - one of the columns provided did not exist, -3 - no DataWindow object was provided.

**Syntax 4**

Register a data source for the ListView. The data source is a DataWindow object that will be linked to the ListView level and used to populate. This function overloads the real of_SetDataSource function to allow the last 4 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDataSource ( as_datawindow, at_trans, as_labelcolumn, as_picturecolumn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *at_trans* | n_tr. The transaction object for this data source. |
| *as_labelcolumn* | String. The column in the DataWindow object to display as the label. |
| *as_picturecolumn* | String. The column in the DataWindow object to use for the picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). |

**Return value**

Integer. Returns 1 - the data source was added successfully, -1 - there were no key columns defined on the DataWindow, -2 - one of the columns provided did not exist, -3 - no DataWindow object was provided.

**Syntax 5**

Register a data source for the ListView. The data source is a DataWindow object that will be linked to the ListView level and used to populate. This function overloads the real of_SetDataSource function to allow the last 2 retrieval argument to be optional.

Access: Public

**Syntax**

```
instancename.of_SetDataSource ( as_datawindow, at_trans, as_labelcolumn, as_picturecolumn, as_statecolumn, as_overlaycolumn )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *as_datawindow* | String. The DataWindow object to be used for the data source. |
| *at_trans* | n_tr. The transaction object for this data source. |
| *as_labelcolumn* | String. The column in the DataWindow object to display as the label. |
| *as_picturecolumn* | String. The column in the DataWindow object to use for the picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). |
| *as_statecolumn* | String. The column in the DataWindow object to use for the state picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). |
| *as_overlaycolumn* | String. The column in the DataWindow object to use for the overlay picture. The column may be an integer (used as the picture index) or a string (a bmp name which will be used as the picture). |

**Return value**

Integer. Returns 1 - the data source was added successfully, -1 - there were no key columns defined on the DataWindow, -2 - one of the columns provided did not exist, -3 - no DataWindow object was provided.

### of_Update

**Description**

Update the DataStore associated with the ListView.

**Syntax 1**

Access: Public

**Syntax**

```
instancename.of_Update ( ab_accept )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *ab_accept* | Boolean. True - (default) perform an AcceptText prior to the update, False - do not perform an AcceptText. |

**Return value**

Integer. Returns 1 - the DataStore was updated successfully, -1 - an error occurred.

**Syntax 2**

Access: Public

**Syntax**

```
instancename.of_Update ( ab_accept, ab_resetflags )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |
| *ab_accept* | Boolean. True - (default) perform an AcceptText prior to the update, False - do not perform an AcceptText. |
| *ab_resetflags* | Boolean. True - (default) reset the status flags, False - do not reset the flags. |

**Return value**

Integer. Returns 1 - the DataStore was updated successfully, -1 - an error occurred.

**Syntax 3**

Access: Public

**Syntax**

```
instancename.of_Update ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of u_lv |

**Return value**

Integer. Returns 1 - the DataStore was updated successfully, -1 - an error occurred.
