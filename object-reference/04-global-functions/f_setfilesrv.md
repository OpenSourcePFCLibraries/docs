# f_SetFilesrv

**Description**

Enables or disables the platform-specific file-handling service. The file service is implemented through the n_cst_filesrv user object and its descendants.

This function creates a descendant of n_cst_filesrv:

- [n_cst_filesrvwin32](../09-custom-class-user-objects/n_cst_filesrvwin32.md)

**Access**

Public

**Syntax**

```
f_SetFilesrv ( fileservice, boolean )
```

| Argument | Description |
| --- | --- |
| *fileservice* | N_cst_filesrv variable into which the function creates the platform-specific n_cst_filesrv descendant |
| *boolean* | Boolean specifying whether to create an instance of n_cst_filesrv (TRUE) or destroy an instance of n_cst_filesrv (FALSE) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

Call this function to enable and disable the file service.

These objects contain functions that make external function calls to perform operating system-specific file processing.

**Examples**

This example enables the file service. It assumes an inv_filesrv instance variable:

```
f_SetFileSrv(inv_filesrv, TRUE)
```

**See also**

- [f_SetPlatform](f_setplatform.md)
- [n_cst_filesrv](../09-custom-class-user-objects/n_cst_filesrv.md)
- [n_cst_platform](../09-custom-class-user-objects/n_cst_platform.md)
