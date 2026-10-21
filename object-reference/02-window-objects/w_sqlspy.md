# w_sqlspy

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension SQL Spy window.

**Ancestry**

`window → pfc_w_master → w_master → pfc_w_main → w_main → pfc_w_sqlspy → w_sqlspy`

**Library**

- PFCUTIL.PBL
- PFEUTIL.PBL

## Events

W_sqlspy includes these events:

### pfc_preopen

**Description**

Handle processing that occurs before the open event.

**Syntax**

```
instancename.EVENT pfc_preopen ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sqlspy |

**Return value**

None.

## Functions

W_sqlspy includes these functions:

### of_SetAlwaysOnTop

**Description**

Allow the SQLSpy window to always be on top when TRUE.

**Access**

Public

**Syntax**

```
instancename.of_SetAlwaysOnTop ( ab_switch )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sqlspy |
| *ab_switch* | Boolean. |

**Return value**

Integer. 1 if it succeeds and -1 if an error occurs.

### of_updatebatchmode

**Description**

Determine what the BatchMode should be and set it visually on this window.

**Access**

Public

**Syntax**

```
instancename.of_updatebatchmode ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sqlspy |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs.

### of_updatehistory

**Description**

Determine what the current history should be and set it visually on this window.

**Access**

Public

**Syntax**

```
instancename.of_updatehistory ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of w_sqlspy |

**Return value**

Integer. Returns 1 if it succeeds and -1 if an error occurs.
