# n_srv

> Removed in PFC 2025. Available in the 2019 and 2022 versions of PFC. PowerBuilder's Service object is only the abstract ancestor of the context services, such as ContextInformation ([n_cxinfo](n_cxinfo.md)) and ContextKeyword ([n_cxk](n_cxk.md)), and nothing in PFC inherited from n_srv.

**Description**

Service nonvisual user object ancestor.

**Ancestry**

![Figure](images/ref1-p539-1.png)

**Library**

- PFCMAIN.PBL
- PFEMAIN.PBL

**Usage**

Use this nonvisual object instead of the standard PowerBuilder Service object. The Service object is used in implementing extensions to the PowerBuilder context feature.

**See also**

- [n_cxinfo](n_cxinfo.md)
- [n_cxk](n_cxk.md)
- [n_inet](n_inet.md)
- [n_ir](n_ir.md)

## Instance variables

N_srv includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| ib_IsObsolete |  | Boolean | Protected |

