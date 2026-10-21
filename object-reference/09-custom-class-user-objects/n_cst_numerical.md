# n_cst_numerical

**Description**

Binary number service. This service provides functions that you can call to access binary data. For example, you can call the of_GetBit function to determine if a specified bit is on or off.

**Ancestry**

![Figure](images/ref2-p606-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

To use numerical functions:

1. Declare a variable of type n_cst_numerical:

   ```
   n_cst_numerical  inv_numerical
   ```

Because PFC defines this object with the autoinstantiate option, you don’t need to code CREATE or DESTROY statements.

2. Call numerical service functions as needed.

   This example assumes an inv_numerical instance variable:

   ```
   Long ll_base10
   String ls_binary

   ll_base10 = Long(sle_base10.text)
   ls_binary = inv_numerical.of_Binary(ll_base10)

   MessageBox("Numerical", &
   String(ll_base10) + " base 10 is equal to " + &
      ls_binary + " in binary.")
   ```

**See also**

- [n_cst_conversion](n_cst_conversion.md)
- [n_cst_string](n_cst_string.md)

## Functions

N_cst_numerical includes precoded object functions:

- of_Binary
- of_BitwiseAnd
- of_BitwiseNot
- of_BitwiseOr
- of_BitwiseXor
- of_Decimal
- of_GetBit

### of_Binary

**Description**

Determines the binary representation of a positive base 10 number.

**Access**

Public

**Syntax**

```
instancename.of_Binary ( number )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *number* | Long to be converted to binary. This number must be positive |

**Return value**

String. Retrieves the binary representation of *number*. If *number* is invalid or NULL, the function returns NULL.

**Examples**

This example calls the of_Binary function. It assumes an inv_numerical instance variable:

```
Long  ll_base10
String  ls_binary

ll_base10 = Long(sle_base10.text)
ls_binary = inv_numerical.of_Binary(ll_base10)

MessageBox("Numerical", &
   String(ll_base10) + " base 10 is equal to " + &
   ls_binary + " in binary.")
```

### of_BitwiseAnd

**Description**

Performs a bitwise AND operation on each bit of two passed values. In a bitwise AND operation:

1 AND 0 evaluates to 0 0 AND 0 evaluates to 0 1 AND 1 evaluates to 1

**Access**

Public

**Syntax**

```
instancename.of_BitwiseAnd ( value1, value2 )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *value1* | Long containing one of the values used in the bitwise AND operation |
| *value2* | Long containing the other value used in the bitwise AND operation |

**Return value**

Long. Returns the result of the AND operation on each of *value1*’s and *value2*'s bits.

**Examples**

This example is from the n_cst_filesrv of_IncludeFile function:

```
n_cst_numerical   lnv_numeric
...
IF lnv_numeric.of_BitwiseAnd &
   (aul_FileAttrib, al_AttribMask) > 0 THEN
   Return TRUE
END IF
```

### of_BitwiseNot

**Description**

Performs a bitwise NOT operation on each bit of a passed value. In a bitwise NOT operation:

1 evaluates to 0 0 evaluates to 1

**Access**

Public

**Syntax**

```
instancename.of_BitwiseNot ( value )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *value* | Long containing one of the value used in the bitwise NOT operation |

**Return value**

Long. Returns the result of the NOT operation on each of *value*'s bits.

**Examples**

This example calls the of_BitwiseNot function. It assumes an inv_numerical instance variable:

```
Long   ll_original, ll_not

ll_original = Long(sle_not.text)
ll_not = inv_numerical.of_BitwiseNot &
   (ll_original)
MessageBox("Numerical", "Binary original is " &
   + String(ll_original) + ". Bitwise NOT is " &
   + String(ll_not) )
```

### of_BitwiseOr

**Description**

Performs a bitwise OR operation on each bit of two passed values. In a bitwise OR operation:

1 OR 0 evaluates to 1 0 OR 0 evaluates to 0 1 OR 1 evaluates to 1

**Access**

Public

**Syntax**

```
instancename.of_BitwiseOr ( value1, value2 )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *value1* | Long containing one of the values used in the bitwise OR operation |
| *value2* | Long containing the other value used in the bitwise OR operation |

**Return value**

Long. Returns the result of the OR operation on each of *value1*’s and *value2*'s bits.

**Examples**

This example calls the of_BitwiseOr function. It assumes an inv_numerical instance variable:

```
Long   ll_value1, ll_value2, ll_result

ll_value1 = Long(sle_value1.text)
ll_value2 = Long(sle_value2.text)
ll_result = inv_numerical.of_BitwiseOr &
   (ll_value1, ll_value2)

MessageBox("Numerical", "Value 1 is " &
   + sle_value1.text + " Value 2 is " &
   + sle_value2.text + " Bitwise OR is " &
   + String(ll_result) )
```

### of_BitwiseXor

**Description**

Performs a bitwise exclusive OR (XOR) operation on each bit of two passed values.

In a bitwise XOR operation:

1 XOR 0 evaluates to 1 0 XOR 0 evaluates to 0 1 XOR 1 evaluates to 0

**Access**

Public

**Syntax**

```
instancename.of_BitwiseXor ( value1, value2 )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *value1* | Long containing one of the values used in the bitwise XOR operation |
| *value2* | Long containing the other value used in the bitwise XOR operation |

**Return value**

Long. Returns the result of the XOR operation on each of *value1’s* and *value2*’s bits.

**Examples**

This example calls the of_BitwiseXor function. It assumes an inv_numerical instance variable:

```
Long   ll_value1, ll_value2, ll_result

ll_value1 = Long(sle_value1.text)
ll_value2 = Long(sle_value2.text)
ll_result = inv_numerical.of_BitwiseXor &
   (ll_value1, ll_value2)

MessageBox("Numerical", "Value 1 is " &
   + sle_value1.text + " Value 2 is " &
   + sle_value2.text + " Bitwise XOR is " &
   + String(ll_result) )
```

### of_Decimal

**Description**

Retrieves the base 10 representation of a binary number.

**Access**

Public

**Syntax**

```
instancename.of_Decimal ( binaryvalue )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *binaryvalue* | String containing the binary value whose positive base 10 value is returned |

**Return value**

Long. Returns the positive base 10 representation of *binaryvalue*. If *binaryvalue* is invalid, the function returns -1; if *binaryvalue* is NULL, the function returns NULL.

**Examples**

This example calls the of_Decimal function. It assumes an inv_numerical instance variable:

```
Long   ll_base10

ll_base10 = inv_numerical.of_Decimal &
   (sle_binary.text)
MessageBox("Numerical", &
   sle_binary.text + " in binary is equal to " + &
       String(ll_base10) + " in Base 10.")
```

### of_GetBit

**Description**

Reports whether the specified binary bit of a passed base 10 argument is on (1) or off (0).

**Access**

Public

**Syntax**

```
instancename.of_GetBit ( value, bit )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_numerical |
| *value* | Long whose on/off value is to be determined |
| *bit* | UnsignedInteger indicating the bit position in *value*, from right to left |

**Return value**

Boolean. Returns TRUE if the bit is on and FALSE if it is off.

**Usage**

The Windows Software Development Kit (SDK) includes many functions that return bit values. This function can help you access these bit values.

**Examples**

This example is from the n_cst_filesrvwin32 of_DirList function:

```
n_cst_numerical   lnv_numeric
Integer   li_entries
os_finddata lstr_finddata
...
// Set file attributes
anv_dirlist[li_entries].ib_readonly = &
   lnv_numeric.of_GetBit &
       (lstr_finddata.ul_fileattributes, 1)
...
```
