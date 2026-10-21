# n_cst_metaclass

**Description**

Metaclass service. This object contains functions that provide information on the functions, events, and variables defined within another object.

**Ancestry**

![Figure](images/ref2-p568-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Usage**

To use this object:

1. Create a variable of type n_cst_metaclass.

   Because PFC defines this object with the autoinstantiate option, there is no need to code CREATE or DESTROY statements.

2. Call n_cst_metaclass functions as needed:

   ```
   boolean  lb_ancestor
   n_cst_metaclass  lnv_metaclass
   n_cst_conversion  lnv_conversion
   classdefinition  lcd_obj

   lcd_obj = findClassDefinition ("w_sheet")
   lb_ancestor = lnv_metaclass.of_isAncestorClass  &
      (lcd_obj, "pfc_w_master")
   if isNull (lb_ancestor) then
      messagebox ("MetaClass", "class not found")
   else
      messagebox ("MetaClass",  &
      lnv_conversion.of_string (lb_ancestor))
   end if
   ```

**See also**

n_cst_luw

## Functions

N_cst_metaclass includes precoded functions:

- of_FindMatchingEvent
- of_FindMatchingVariable
- of_GetAncestorClasses
- of_IsAncestorClass
- of_IsEventDefined
- of_IsEventImplemented
- of_IsFunctionDefined

### of_FindMatchingEvent

**Description**

Retrieves the script definition for a given object and event.

**Access**

Public

**Syntax**

```
instancename.of_FindMatchingEvent ( object, event )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *object* | ClassDefinition specifying the object containing *event* |
| *event* | String specifying the event name |

**Return value**

ScriptDefinition. Returns the script definition if the function succeeds and NULL if *event* cannot be found.

**Examples**

This example calls the of_FindMatchingEvent function:

```
classdefinition  lcd_object
scriptdefinition  lscrd_object
n_cst_metaclass  lnv_metaclass

lcd_object = findClassDefinition ("pfc_u_dw")
lscrd_object = lnv_metaclass.of_findMatchingEvent  &
   (lcd_object, "pfc_update")
if isNull (lscrd_object) or not isValid  &
   (lscrd_object) then
  messagebox ("MetaClass",  &
    "Bad class or can’t find event definition")
else
   messagebox ("MetaClass", lscrd_object.name)
end if
```

### of_FindMatchingVariable

**Description**

Retrieves the variable definition for a given object or script and variable.

**Access**

Public

**Syntax**

```
instancename.of_FindMatchingVariable ( classorscript, variable )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *classorscript* | ClassDefinition of the object containing *variable* or ScriptDefinition of the script containing *variable* |
| *variable* | String specifying the variable name |

**Return value**

VariableDefinition. Returns the variable definition if the function succeeds and NULL if an error occurs.

**Usage**

If you specify a ScriptDefinition as the first argument, the function looks for *variable* in both local variables and arguments.

**Examples**

This example calls the of_FindMatchingVariable function:

```
string  ls_argtype[ ]
classdefinition  lcd_object
variabledefinition  lvrd_object
scriptdefinition  lscrd_object
n_cst_metaclass  lnv_metaclass

lcd_object = findClassDefinition("pfc_u_dw")
ls_argtype[1] = "Boolean"
ls_argtype[2] = "Boolean"
lscrd_object = lcd_object.findMatchingFunction  &
   ("of_Update", ls_argtype[ ])
if isNull (lscrd_object) or not isValid  &
   (lscrd_object) then
  messagebox ("", "can’t find script definition")
end if
lvrd_object = lnv_metaclass.of_findMatchingVariable &
   (lscrd_object, "li_rc")
if not isValid (lvrd_object) or  &
  isNull (lvrd_object) then
  messagebox ("MetaClass",  &
   "scriptdefinition not valid or var not found")
else
   messagebox ("MetaClass", lvrd_object.name)
end if
```

### of_GetAncestorClasses

**Description**

Retrieves all ancestor classes for a specified class.

**Access**

Public

**Syntax**

```
instancename.of_GetAncestorClasses ( sourceclass, ancestorclass )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *sourceclass* | String or ClassDefinition specifying the class for which to retrieve ancestor classes |
| *ancestorclass* | ClassDefinition array into which the function places references to ancestor classes (passed by reference) |

**Return value**

Integer. Returns the number of elements in the *ancestorclass* array if the function succeeds and -1 if an error occurs.

**Usage**

The elements in *ancestorclass* are ordered in ascending order (that is, element 1 contains the immediate ancestor and the upperbound contains the highest level ancestor).

**Examples**

This example calls the of_GetAncestorClasses function:

```
n_cst_metaclass  lnv_metaclass
classdefinition  lcd_ancestor[ ]
integer  li_ubound, li_cnt

lnv_metaclass.of_GetAncestorClasses  &
   ("w_sheet", lcd_ancestor[ ])
li_ubound = UpperBound (lcd_ancestor[ ])
lb_1.reset()
for li_cnt = 1 to li_ubound
   lb_1.addItem (lcd_ancestor[li_cnt].name)
next
```

### of_IsAncestorClass

**Description**

Reports whether a specified class is an ancestor of another specified class.

**Access**

Public

**Syntax**

```
instancename.of_IsAncestorClass ( sourceclass, ancestorclass )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *sourceclass* | String or ClassDefinition containing the possible descendent class |
| *ancestorclass* | String containing the class that might be an ancestor of *sourceclass* |

**Return value**

Boolean. Returns TRUE if *sourceclass* is a descendant of *ancestorclass* and FALSE if it is not.

**Examples**

This example calls the of_IsAncestorClass function:

```
boolean  lb_ancestor
n_cst_metaclass  lnv_metaclass
n_cst_conversion  lnv_conversion
classdefinition  lcd_obj

lcd_obj = findClassDefinition ("w_sheet")
lb_ancestor = lnv_metaclass.of_isAncestorClass  &
   (lcd_obj, "pfc_w_master")
if isNull (lb_ancestor) then
   messagebox ("MetaClass", "class not found")
else
   messagebox ("MetaClass",  &
   lnv_conversion.of_string (lb_ancestor))
end if
```

### of_IsEventDefined

**Description**

Reports whether the specified class contains the specified event.

**Access**

Public

**Syntax**

```
instancename.of_IsEventDefined ( class, event )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *class* | String or ClassDefinition to be tested |
| *event* | String specifying the event |

**Return value**

Boolean. Returns TRUE if *class* contains *event* and FALSE if it does not.

**Examples**

This example calls the of_IsEventDefined function:

```
boolean  lb_defined
n_cst_metaclass  lnv_metaclass
n_cst_conversion lnv_conversion
classdefinition  lcd_obj

lcd_obj = findClassDefinition ("pfc_n_ds")
lb_defined = lnv_metaclass.of_isEventDefined  &
   (lcd_obj, "of_accepttext")
if isNull (lb_defined) then
   messageBox ("MetaClass", "Class not found")
else
   messageBox ("MetaClass",   &
      lnv_conversion.of_string (lb_defined))
end if
```

### of_IsEventImplemented

**Description**

Reports whether the specified class implements the specified event.

**Access**

Public

**Syntax**

```
instancename.of_IsEventImplemented (class, event )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *class* | String or ClassDefinition to be tested |
| *event* | String specifying the event |

**Return value**

Boolean. Returns TRUE if *class* implements *event* and FALSE if it does not.

**Examples**

This example calls the of_IsEventImplemented function:

```
boolean  lb_defined
n_cst_metaclass  lnv_metaclass
n_cst_conversion  lnv_conversion
classdefinition  lcd_obj

lcd_obj = findClassDefinition ("pfc_n_ds")
lb_defined = lnv_metaclass.of_isEventImplemented  &
   (lcd_obj, "destructor")
if isNull (lb_defined) then
   messageBox ("MetaClass", "class not found")
else
   messageBox ("MetaClass",  "Implemented = "  &
   + lnv_conversion.of_string (lb_defined))
end if
```

### of_IsFunctionDefined

**Description**

Reports whether the specified class contains the specified function.

**Access**

Public

**Syntax**

```
instancename.of_IsFunctionDefined (class, function )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_metaclass |
| *class* | String or ClassDefinition to be tested |
| *function* | String specifying the function |

**Return value**

Boolean. Returns TRUE if *class* contains *function* and FALSE if it does not.

**Examples**

This example is from the n_cst_luw of_AcceptText function:

```
...
lb_defined = inv_metaclass.of_isFunctionDefined &
   (lpo_tocheck.ClassDefinition,  &
      "of_AcceptText", ls_args)
...
```
