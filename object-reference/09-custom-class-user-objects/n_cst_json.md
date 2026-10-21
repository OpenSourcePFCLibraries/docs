# n_cst_json

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

JSON parser.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_json → n_cst_json`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

N_cst_json includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| inv_file |  | n_cst_filesrv | Protected |
| inv_tag |  | n_cst_json_tagattrib | Protected |

## Functions

N_cst_json includes these functions:

### of_add_entry

**Description**

Add a new JSON entry in the repository.

**Access**

Public

**Syntax**

```
instancename.of_add_entry ( as_object, as_pair_name, as_pair_value, ai_kind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The JSON object's name to be added. |
| *as_pair_name* | String. The JSON Pair's name to be added. |
| *as_pair_value* | String. The JSON Pair's value to be added. |
| *ai_kind* | Integer. The entry Kind. Possible values are : 1 = OBJECT (n_cst_json_tagattrib.CST_OBJ_KIND) 2 = VALUE (n_cst_json_tagattrib.CST_VAL_KIND) 3 = ARRAY (n_cst_json_tagattrib.CST_ARRAY_KIND) |

**Return value**

Integer. 1, OK -1, An error occurs.

**Usage**

Call this method to store in the repository a new JSON entry. This method is called by the of_parse() method.

### of_clear

**Description**

Cleat the content of the JSON repository.

**Access**

Public

**Syntax**

```
instancename.of_clear ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |

**Return value**

Integer. 1, OK. -1, An error occurs.

**Usage**

Call this method when you need to clear the content of the repository. This method is called by the of_load() method.

### of_delete_entries

**Description**

Delete JSON repository entries between specified start & end indexes.

**Access**

Public

**Syntax**

```
instancename.of_delete_entries ( al_start, al_end )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *al_start* | Long. The index of the first entry of the group of JSON entries to be deleted. |
| *al_end* | Long. The index of the last entry of the group of JSON entries to be deleted. |

**Return value**

Integer. 1, OK. -1, An error occurs.

**Usage**

Call this method to delete a group of adjacents JSON repository entries.

### of_delete_entry

**Description**

Delete a JSON entry from the repository using its corresponding index.

**Access**

Public

**Syntax**

```
instancename.of_delete_entry ( al_index )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *al_index* | Long. The index of the JSON entry to delete. |

**Return value**

Integer. 1, OK. -1, An error occurs.

**Usage**

Call this method to delete a specif JSON entry from the repository knowing its index.

### of_delete_object

**Description**

Delette all JSON repository's entries that correspond to the specified JSON object's name.

**Access**

Public

**Syntax**

```
instancename.of_delete_object ( as_object )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The JSON object's name to be deleted. |

**Return value**

Integer. 1, OK -1, An error occurs.

**Usage**

Call this method to delete a specified JSON object from the repository.

### of_edit_entry

**Description**

Edit JSON entry corresponding to the specified repository index.

**Access**

Public

**Syntax**

```
instancename.of_edit_entry ( al_index, as_object, as_pair_name, as_pair_value, ai_kind )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *al_index* | Long. The index of the JSON repository entry to be edited. |
| *as_object* | String. The JSN object name to set. |
| *as_pair_name* | String. The JSON Pair's Name value to set. |
| *as_pair_value* | String. The JSON Pair's value to set. |
| *ai_kind* | Integer. the JSON Pair's kind. Possible values are : |

**Return value**

Integer. 1, Ok -1, An error occurs.

**Usage**

Call this method to edit content of an JSON entry that you know its repository's index.

### of_find_entries

**Description**

Returns all corresponding index of a JSON entries identiified by the specified Object & pair's name values.

**Access**

Public

**Syntax**

```
instancename.of_find_entries ( as_object, as_pair_name, al_entries )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The JSON object's name to be found. |
| *as_pair_name* | String. The JSON Pair's name to be found al_entries[]: The long array variable that will holds entries found. (by ref) |
| *al_entries* | Long array, passed by reference. |

**Return value**

Long. The number of entries found, or 0, if no entry found, or -1, if an error occurs.

**Usage**

Call this method to find JSON entries using their object's & pair's names.

### of_find_entry

**Description**

Returns the first corresponding index of a JSON entry identiified by the specified Object & pair's name values.

**Access**

Public

**Syntax**

```
instancename.of_find_entry ( as_object, as_pair_name )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The JSON object's name to be found. |
| *as_pair_name* | String. The JSON Pair's name to be found. |

**Return value**

Long. The corresponding JSON repository index of the entry found, or 0, if no entry found, or -1, if an error occurs.

**Usage**

Call this method to find a JSON entry without knowing its corresponding repository index.

### of_get_entry

**Description**

Store pair contents coressponding to the specified repository index into specified variable.

**Access**

Public

**Syntax**

```
instancename.of_get_entry ( al_index, astr_pair )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *al_index* | Long. The repository index that corresponds to the pair that you want to get its content. |
| *astr_pair* | s_json_attrib, passed by reference. The s_json_attrib variable that will holds the contents. |

**Return value**

Integer. 1, ok -1, An error occurs.

**Usage**

Call this method to get a pair's content knowing its reposiroty index to be stored into an s_json_attrib structure variable. This method is called by of_get_object() & of_get_pair() methods.

### of_get_object

**Description**

Get tthe content of the specified JSON object.

**Access**

Public

**Syntax**

```
instancename.of_get_object ( as_object, astr_entries )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The name of the JSON object to get its content astr_entries[]: The s_json_attrib arrays that will hold the result (by ref). |
| *astr_entries* | s_json_attrib array, passed by reference. |

**Return value**

Long. The number of pairs found for the specified JSON object, or -1, when an error occurs.

**Usage**

Call this method to get the content of a JSON object.

### of_get_objects

**Description**

Get the list of objects from the JSON repository ordered by order of appearance.

**Access**

Public

**Syntax**

```
instancename.of_get_objects ( as_objects )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_objects* | String array, passed by reference. |

**Return value**

Long. The number of returned objects, or -1, if an error occurs.

**Usage**

Call this method to get the list of JSON objects from the repository.

### of_get_pair

**Description**

Get the content of the specified JSON object's pair.

**Access**

Public

**Syntax**

```
instancename.of_get_pair ( as_object, as_pair_name, astr_pair )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The name of the JSON object that contain the as_pair_name. |
| *as_pair_name* | String. The name of the Pair value to get its value. |
| *astr_pair* | s_json_attrib, passed by reference. The s_json_attrib variable that will hold the result (by ref). |

**Return value**

Long. 1, Ok -1, An error occurs.

**Usage**

Call this method to get the value of a JSON Object's Pair.

### of_get_value

**Description**

Get the value of the specified JSON pair.

**Access**

Public

**Syntax**

```
instancename.of_get_value ( as_object, as_pair_name, as_value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The name of the JSON object that contain the as_pair_name. |
| *as_pair_name* | String. The name of the Pair value to get its value. |
| *as_value* | String, passed by reference. The string variable that will holds the pair's valuet (by ref). |

**Return value**

Integer. 1, OK -1, An error occurs.

**Usage**

Call this method to get the value of a JSON Object's Pair.

### of_get_values

**Description**

Get the values of the specified JSON pair with Array Kind.

**Access**

Public

**Syntax**

```
instancename.of_get_values ( as_object, as_pair_name, as_values )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_object* | String. The name of the JSON object that contain the as_pair_name. |
| *as_pair_name* | String. The name of the Pair value to get its value. |
| *as_values* | String array, passed by reference. The string array variable that will holds the pair's valuet (by ref). |

**Return value**

Integer. long 1, OK -1, An error occurs.

**Usage**

Call this method to get the value of a JSON Object's Pair.

### of_load

**Description**

Load a specified JSON file using the PFC file service and parse it.

**Access**

Public

**Syntax**

```
instancename.of_load ( as_filename )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_filename* | String. The complete filename of the JSON file to load & parse. |

**Return value**

Integer. 1, ok -1, an error occurs.

**Usage**

Call this method to load and parse a JSON file.

### of_parse

**Description**

Parse the passed JSON string. JSON object & Pairs are stored in the JSON repository.

**Access**

Public

**Syntax**

```
instancename.of_parse ( as_json )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_json* | String. The JSON string to be parsed. |

**Return value**

Integer. 1, Ok -1, An error occurs.

**Usage**

Call this method to parse a JSON string. This method is called by the of_load() method.

### of_reset

**Description**

Reset intial JSON repository status to restore content order as just after last parsing issued.

**Access**

Public

**Syntax**

```
instancename.of_reset ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |

**Return value**

Integer. Always return 1.

**Usage**

Call this method when you need to works on the repository and the entries order of appearance should be as just after a parsing. This method is automatically called when needed according to the context of work.

### of_save

**Description**

Save a specified JSON file using the PFC file service.

**Access**

Public

**Syntax**

```
instancename.of_save ( as_filename )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |
| *as_filename* | String. The complete filename of the JSON file to save. |

**Return value**

Integer. 1, ok -1, an error occurs.

**Usage**

Call this method to save the JSON repository into a JSON file.

### of_tostring

**Description**

Convert JSON repository into a conform JSON string in raw format without any layout formatting.

**Access**

Public

**Syntax**

```
instancename.of_tostring ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_json |

**Return value**

String. The content of the JSON repository into a conform JSON non formated string, or Null if an error occurs.

**Usage**

Call this method to store the content of the repository into a conform JSON String. This method is called by the of_save() method.
