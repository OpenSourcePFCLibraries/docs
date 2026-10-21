# f_SetPlatform

**Description**

Enables or disables platform-specific services. The platform service is implemented through the n_cst_platform user object and its descendants.

This function creates a descendant of n_cst_platform:

- [n_cst_platformwin32](../09-custom-class-user-objects/n_cst_platformwin32.md)

**Access**

Public

**Syntax**

```
f_SetPlatform ( platformservice, boolean )
```

| Argument | Description |
| --- | --- |
| *platformservice* | N_cst_platform variable into which the function creates the platform-specific n_cst_platform descendant |
| *boolean* | Boolean specifying whether to create an instance of n_cst_platform (TRUE) or destroy an instance of n_cst_platform (FALSE). |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

Call this function to enable and disable the platform service.

These objects contain functions that make external function calls to return operating system-specific information and play sounds.

**Examples**

This example enables the platform service. It assumes an inv_platform instance variable:

```
f_SetPlatform(inv_platform, TRUE)
```

**See also**

- [f_SetFilesrv](f_setfilesrv.md)
- [n_cst_filesrv](../09-custom-class-user-objects/n_cst_filesrv.md)
- [n_cst_platform](../09-custom-class-user-objects/n_cst_platform.md)
