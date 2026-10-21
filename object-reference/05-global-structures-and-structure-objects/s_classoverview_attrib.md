# s_classoverview_attrib

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Cclass overview attributes structure.

**Ancestry**

`structure → s_classoverview_attrib`

**Library**

- PFCAPSRV.PBL

| Field | Data type | Description |
| --- | --- | --- |
| class | String | The base class name. |
| classlib | String | The library where is stored the base class. |
| classtype | String | The datatype of the base class. |
| isautoinstanciate | Boolean | Wether the class is autoinstanciate or not. |
| ancestorcount | Integer | The total number of heritage level of the base class. |
| ancestor[ ] | String | The complete heritage list of the base class. |
| ancestorlib[ ] | String | The complete list of library where are stored each ancestor of the base class. |
