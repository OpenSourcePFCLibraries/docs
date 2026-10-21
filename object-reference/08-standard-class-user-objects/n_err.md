# n_err

**Description**

Error nonvisual user object ancestor.

**Ancestry**

![Figure](images/ref1-p524-1.png)

**Library**

- PFCMAIN.PBL
- PFEAPSRV.PBL

**Usage**

Use this nonvisual object instead of the standard PowerBuilder error object.

**See also**

- [n_dda](n_dda.md)
- [n_dsa](n_dsa.md)
- [n_msg](n_msg.md)
- [n_tr](n_tr.md)

## Functions

N_err contains one precoded function:

of_MessageBox

### of_MessageBox

**Description**

Displays a MessageBox.

**Access**

Protected

**Syntax**

```
instancename.of_MessageBox ( id, title, message, icon, button, default )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_err |
| *id* | String specifying an ID for the message |
| *title* | String specifying the title of the MessageBox |
| *message* | String specifying the message text |
| *icon* | Icon enumerated data type indicating the icon you want to display on the left side of the message box. Values are: |
|  | • Information! |
|  | • StopSign! |
|  | • Exclamation! |
|  | • Question! |
|  | • None! |
| *button* | Button enumerated data type indicating the set of CommandButtons you want to display at the bottom of the message box. The buttons are numbered in the order listed in the enumerated data type. Values are: |
|  | • OK! |
|  | • OKCancel! |
|  | • YesNo! |
|  | • YesNoCancel! |
|  | • RetryCancel! |
|  | • AbortRetryIgnore! |
| *default* | Integer specifying the number of the button you want to be the default button |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

Override this function to control MessageBox behavior in Error objects.

The *id* argument is not used in the default implementation.

**Examples**

This example calls the of_MessageBox function:

```
of_Messagebox(’err_dberror’,’Save’, &
   as_error, StopSign!, Ok!, 1)
...
```
