# w_message

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Message Service "MessageBox Window".

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_message → w_message`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

W_message includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ii_buttonclicked |  | Integer | Protected |
| ii_charwidth |  | Integer | Protected |
| ii_lineheight |  | Integer | Protected |
| ii_maxlinelen |  | Integer | Protected |
| ii_maxlines |  | Integer | Protected |
| ii_tabchars |  | Integer | Protected |
| ii_winheight |  | Integer | Protected |
| ii_winwidth |  | Integer | Protected |
| ii_winwidthdelta |  | Integer | Protected |
| inv_errorattrib |  | n_cst_errorattrib | Protected |

## Events

W_message includes these events:

### Open

**Description**

Open the window with the appropriate information. Call the function to Size and Move controls around to match the window information.

**Syntax**

```
instancename.EVENT Open ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

None.

### pfc_close

**Description**

Return the instance structure.

**Syntax**

```
instancename.EVENT pfc_close ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

None.

### pfc_default

**Description**

The user has clicked one of the three main buttons to close this window.

**Syntax**

```
instancename.EVENT pfc_default ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

None.

### pfc_print

**Description**

Print the message.

**Syntax**

```
instancename.EVENT pfc_print ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

None.

### pfc_userinput

**Description**

Will enlarge the window to get user input.

**Syntax**

```
instancename.EVENT pfc_userinput ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

None.

### Timer

**Description**

After the specified time, Automatically close this window.

**Syntax**

```
instancename.EVENT Timer ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

None.

## Functions

W_message includes these functions:

### of_PaintInitialWindow

**Description**

Test for the validity of the SQLspy service.

**Access**

Protected

**Syntax**

```
instancename.of_PaintInitialWindow ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

Integer. 1 if it succeeds and -1 if it fails.

### of_UpdateFontSize

**Description**

Handle multiple font sizes.

**Access**

Protected

**Syntax**

```
instancename.of_UpdateFontSize ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_message |

**Return value**

Integer. 1 if it succeeds and -1 if it fails.
