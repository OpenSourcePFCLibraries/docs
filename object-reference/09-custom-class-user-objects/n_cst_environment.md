# n_cst_environment

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension Environment service.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_environment → n_cst_environment`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

N_cst_environment includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| Charset |  | Charset | Public |
| CPUType |  | Cputypes | Public |
| ib_CanWow64BeChecked | TRUE when the OS supports the IsWow64Process API. | Boolean | Public |
| ib_HaveEnvironmentValues | TRUE after of_GetEnvironment is successful. | Boolean | Protected |
| ib_IsRDLimitedTo1Session | TRUE when OS supports Remote Desktop, but only one session max. | Boolean | Public |
| ib_IsRemotelyControlled | TRUE when desktop is being remotely controlled. | Boolean | Public |
| ib_IsRTSAvail | TRUE when Remote Terminal Services functionality is available. | Boolean | Public |
| ib_IsRTSSession | TRUE when desktop is remotely connected (e.g., via Citrix) | Boolean | Public |
| ib_IsWow64Process | TRUE when process running in Wow64 mode. | Boolean | Public |
| ii_NumMonitors |  | Integer | Public |
| ii_OSBitness | Can be either 32 or 64. | Integer | Public |
| il_VirtualScreenHeight | in pixels. | Long | Public |
| il_VirtualScreenWidth | in pixels. | Long | Public |
| il_VirtualScreenX | in pixels. | Long | Public |
| il_VirtualScreenY | in pixels. | Long | Public |
| is_ComputerName | The NetBIOS name of the computer running this application. | String | Public |
| is_OSEditionDesc | e.g., "Professional", "Home Premium". | String | Public |
| is_OSServicePackDesc | Describes service pack level, e.g., "Service Pack 2". | String | Public |
| is_OSSummaryDesc | e.g., "Windows 7 Professional, Service Pack 1 (64-bit)". | String | Public |
| is_OSVersionDesc | e.g., "Windows XP", "Windows 7", "Windows Server 2003 R2". | String | Public |
| iui_NumColorsPowerOf2 | NumberOfColors = ( 2 ^ this_value ) - 1. | UInt | Public |
| iui_OSMajorServicePack |  | UInt | Public |
| iui_OSMinorServicePack |  | UInt | Public |
| iui_OSProductType |  | UInt | Public |
| iui_OSSuiteMask |  | UInt | Public |
| iui_ProcessorArchitecture |  | UInt | Public |
| iui_ProcessorLevel |  | UInt | Public |
| iui_ProcessorRevision |  | UInt | Public |
| iui_Reserved |  | UInt | Public |
| iul_ActiveProcessorMask |  | ULong | Public |
| iul_AllocationGranularity |  | ULong | Public |
| iul_lpMaxAppAddress |  | ULong | Public |
| iul_lpMinAppAddress |  | ULong | Public |
| iul_NumberOfProcessors |  | ULong | Public |
| iul_OSBuildNumber |  | ULong | Public |
| iul_OSMajorVersion |  | ULong | Public |
| iul_OSMinorVersion |  | ULong | Public |
| iul_OSPlatformID |  | ULong | Public |
| iul_OSProductTypeAlt | Alternate value from GetProductInfo API call. | ULong | Public |
| iul_PageSize |  | ULong | Public |
| iul_ProcessorType |  | ULong | Public |
| Language |  | Languageid | Public |
| MachineCode |  | Boolean | Public |
| NumberOfColors |  | LongLong | Public |
| OSFixesRevision |  | Integer | Public |
| OSMajorRevision |  | Integer | Public |
| OSMinorRevision |  | Integer | Public |
| OSType |  | Ostypes | Public |
| OSVERSIONINFOEX_STRUCTURE_SIZE_UNICODE | Constant set to 284 | ULong | Protected |
| PBBuildNumber |  | Integer | Public |
| PBFixesRevision |  | Integer | Public |
| PBMajorRevision |  | Integer | Public |
| PBMinorRevision |  | Integer | Public |
| PBType |  | Pbtypes | Public |
| PROCESSOR_ARCHITECTURE_AMD64 | Constant set to 9 | ULong | Protected |
| PROCESSOR_ARCHITECTURE_IA64 | Constant set to 6 | ULong | Protected |
| PROCESSOR_ARCHITECTURE_INTEL | Constant set to 0 | ULong | Protected |
| ScreenHeight |  | Long | Public |
| ScreenWidth |  | Long | Public |
| SM_CMONITORS | Constant set to 80 | UInt | Protected |
| SM_CXSCREEN | Constant set to 0 | UInt | Protected |
| SM_CXVIRTUALSCREEN | Constant set to 78 | UInt | Protected |
| SM_CYSCREEN | Constant set to 1 | UInt | Protected |
| SM_CYVIRTUALSCREEN | Constant set to 79 | UInt | Protected |
| SM_MEDIACENTER | Constant set to 87 | UInt | Protected |
| SM_REMOTECONTROL | Constant set to 8193 | UInt | Protected |
| SM_REMOTESESSION | Constant set to 4096 | UInt | Protected |
| SM_SERVERR2 | Constant set to 89 | UInt | Protected |
| SM_STARTER | Constant set to 88 | UInt | Protected |
| SM_TABLETPC | Constant set to 86 | UInt | Protected |
| SM_XVIRTUALSCREEN | Constant set to 76 | UInt | Protected |
| SM_YVIRTUALSCREEN | Constant set to 77 | UInt | Protected |
| VER_NT_SERVER | Constant set to 3 | UInt | Protected |
| VER_NT_WORKSTATION | Constant set to 1 | UInt | Protected |
| VER_SUITE_BLADE | Constant set to 1024 | UInt | Protected |
| VER_SUITE_DATACENTER | Constant set to 128 | UInt | Protected |
| VER_SUITE_EMBEDDEDNT | Constant set to 64 | UInt | Protected |
| VER_SUITE_ENTERPRISE | Constant set to 2 | UInt | Protected |
| VER_SUITE_PERSONAL | Constant set to 512 | UInt | Protected |
| VER_SUITE_SINGLEUSERRTS | Constant set to 256 | UInt | Protected |
| VER_SUITE_SMALLBUSINESS | Constant set to 1 | UInt | Protected |
| VER_SUITE_STORAGE_SERVER | Constant set to 8192 | UInt | Protected |
| VER_SUITE_TERMINAL | Constant set to 16 | UInt | Protected |
| VER_SUITE_WH_SERVER | Constant set to 32768 | UInt | Protected |
| VER_UNDOCUMENTED_VM_MASK | Constant set to 7680 | UInt | Protected |
| Win16 |  | Boolean | Public |

## Events

N_cst_environment includes these events:

### Constructor

**Description**

Initializes the PFC Environment object.

**Syntax**

```
instancename.EVENT Constructor ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |

**Return value**

None.

### pfc_oseditiondesc

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_oseditiondesc ( as_editiondesc )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |
| *as_editiondesc* | String. |

**Return value**

String.

### pfc_osproductinfodecode

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_osproductinfodecode ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |

**Return value**

Integer.

### pfc_osversiondesc

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_osversiondesc ( as_versiondesc )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |
| *as_versiondesc* | String. |

**Return value**

String.

### pfc_osversioninfodecode

**Description**

No description is available.

**Syntax**

```
instancename.EVENT pfc_osversioninfodecode ( astr_ovix )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |
| *astr_ovix* | Osversioninfoex. |

**Return value**

None.

## Functions

N_cst_environment includes these functions:

### of_GetEnvironment

**Description**

Obtains a copy of the PB environment object's properties.

**Access**

Protected

**Syntax**

```
instancename.of_GetEnvironment ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |

**Return value**

Integer. Integer 1 (SUCCESS) - PB environment object property values have been copied into instance variables. -1 (FAILURE) - Unable to obtain PB environment object.

### of_GetOSInfo

**Description**

Obtains and decodes information about the Windows operating system this application is executing under. Notes: This method is based on free sample PB code made written and made publicly available by Roland Smith (topwizprogramming.com), and has adapted for use in the PFC with his consent.

**Access**

Protected

**Syntax**

```
instancename.of_GetOSInfo ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |

**Return value**

Integer. Integer 1 (SUCCESS) -1 (FAILURE)

### of_HighestOrderNonZeroBit

**Description**

Determines the bit position of the highest-order non-zero bit in a longlong value.

**Access**

Public

**Syntax**

```
instancename.of_HighestOrderNonZeroBit ( all_value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |
| *all_value* | LongLong. |

**Return value**

UnsignedInteger. Integer The bit position of the highest-order non-zero bit in the longlong argument data value.

### of_ListProperties

**Description**

Lists the public properties of this object by their descriptive names and values.

**Access**

Public

**Syntax**

```
instancename.of_ListProperties ( as_name, as_value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |
| *as_name* | String array, passed by reference. Unbounded String array (passed by reference) |
| *as_value* | String array, passed by reference. Unbounded String array (passed by reference) |

**Return value**

Long. long The upper bound of both string arrays after they have been populated with property names and values.

### of_Refresh

**Description**

Refreshes the values of the instance variables in this object.

**Access**

Public

**Syntax**

```
instancename.of_Refresh ( )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_environment |

**Return value**

Integer. Integer 1 (SUCCESS) - The values of the instance variables in this object have successfully been refreshed. -1 (FAILURE) - The values were not refreshed.
