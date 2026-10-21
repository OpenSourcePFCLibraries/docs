# w_sqlspyinspect

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension SQL Spy Inspect window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_response → w_response → pfc_w_sqlspyinspect → w_sqlspyinspect`

**Library**

- PFCUTIL.PBL
- PFEUTIL.PBL

## Events

W_sqlspyinspect includes these events:

### pfc_preopen

**Description**

Handle processing that occurs before the open event.

**Syntax**

```
instancename.EVENT pfc_preopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sqlspyinspect |

**Return value**

None.

## Functions

W_sqlspyinspect includes these functions:

### of_populatebeforeclose

**Description**

Close this window after updating the SQLspy service of all relevant information. Note: Close with return values- 0 caller's processing should continue as normal. 1 If functionality available, caller's proccessing should stop. 2 Caller's processing should skip this request and execute the next request (if available). -1 if an error occurs.

**Access**

Protected

**Syntax**

```
instancename.of_populatebeforeclose ( acb_pressed )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sqlspyinspect |
| *acb_pressed* | Commandbutton. The command button pressed. |

**Return value**

None.
