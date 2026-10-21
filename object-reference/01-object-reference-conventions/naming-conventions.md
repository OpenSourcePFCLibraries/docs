# Naming conventions

**Object naming conventions**

PFC uses the following prefix standard for object names:

*pfcobject*_*type*_*objectname*

where:

- *pfcobject* indicates whether the object is part of the PFC level or the extension level. Objects that are part of the PFC level have the prefix PFC_
- *type* indicates the object type

This table describes the object types.

| Prefix | Description |
| --- | --- |
| m_ | Menu |
| n_ | Standard class user object |
| n_cst | Custom class user object |
| s_ | Global structure |
| u_ | Visual user object |
| w_ | Window |

For example:

- Pfc_w_master is the master window and is in the PFC level
- Pfc_u_tvs is the TreeView visual user object and is in the PFC level
- U_dw is the DataWindow visual user object and is in the extension level
- N_cst_dwsrv is the custom class user object for DataWindow services and is in the extension level
- N_tr is the transaction standard class user object and is in the extension level

**Variable naming conventions**

PFC uses the following standard for variable names:

*&lt;scope>&lt;datatype>*_*variablename*

*Scope* is one of the following:

| Prefix | Description |
| --- | --- |
| a | Argument to an event or function |
| g | Global variable |
| i | Instance variable |
| l | Local variable |
| s | Shared variable |

For standard data types, *datatype* is one of the following:

| Prefix | Description |
| --- | --- |
| a | Any |
| blb | Blob |
| b | Boolean |
| ch | Character |
| d | Date |
| dtm | DateTime |
| dc | Decimal |
| dbl | Double |
| e | Enumerated |
| i | Integer |
| l | Long |
| r | Real |
| s | String |
| tm | Time |
| ui | UnsignedInteger |
| ul | UnsignedLong |

For reference variables, *datatype* is one of the following:

| Prefix | Description |
| --- | --- |
| app | Application |
| ab | ArrayBounds |
| cbx | CheckBox |
| cb | CommandButton |
| cd | ClassDefinition |
| cdo | ClassDefinitionObject |
| cn | Connection |
| cninfo | ConnectionInfo |
| cno | ConnectObject |
| cxk | ContextKeyword |
| cxinfo | ContextInformation |
| cpp | cplusplus |
| ds | DataStore |
| dw | DataWindow |
| dwc | DataWindowChild |
| drg | DragObject |
| drw | DrawObject |
| ddplb | DropDownPictureListBox |
| ddlb | DropDownListBox |
| dwo | DWobject |
| dda | DynamicDescriptionArea |
| dsa | DynamicStagingArea |
| ed | EnumerationDefinition |
| eid | EnumerationItemDefinition |
| em | EditMask |
| env | Environment |
| err | Error |
| ext | ExtObject |
| gr | Graph |
| go | GraphicObject |
| grax | GrAxis |
| grda | GrDispAttr |
| gb | GroupBox |
| hsb | HorizontalScrollBar |
| inet | Inet |
| ir | InternetResult |
| ln | Line |
| lb | ListBox |
| lv | ListView |
| lvi | ListViewItem |
| mfd | MailFileDescription |
| mm | MailMessage |
| mr | MailRecipient |
| ms | MailSession |
| mdi | MDIClient |
| m | Menu |
| mc | MenuCascade |
| msg | Message |
| mle | MultiLineEdit |
| nv | NonVisualObject |
| oc | OleControl |
| oo | OleObject |
| ostg | OleStorage |
| omc | OmControl |
| omcc | OmCustomControl |
| omec | OmEmbeddedControl |
| omo | OmObject |
| omstm | OmStream |
| omstg | OmStorage |
| oval | Oval |
| p | Picture |
| pb | PictureButton |
| pbcpp | PBToCPPObject |
| plb | PictureListBox |
| pl | Pipeline |
| po | PowerObject |
| procall | ProfileCall |
| proclass | ProfileClass |
| proln | ProfileLine |
| prort | ProfileRoutine |
| pro | Profiling |
| rb | RadioButton |
| rec | Rectangle |
| rem | RemoteObject |
| rte | RichTextEdit |
| rrec | RoundRectangle |
| rteo | RteObject |
| scrd | ScriptDefinition |
| sle | SingleLineEdit |
| srv | Service |
| st | StaticText |
| std | SimpleTypeDefinition |
| str | Structure |
| tab | Tab |
| tabpg | TabPage |
| tcan | TraceActivityNode |
| tcbe | TraceBeginEnd |
| tcerr | TraceError |
| tcf | TraceFile |
| tcln | TraceLine |
| tcgc | TraceGarbageCollect |
| tco | TraceObject |
| tcrt | TraceRoutine |
| tcsql | TraceSQL |
| tct | TraceTree |
| tctn | TraceTreeNode |
| tcterr | TraceTreeError |
| tctsql | TraceTreeSQL |
| tctgc | TraceTreeGarbageCollect |
| tctln | TraceTreeLine |
| tcto | TraceTreeObject |
| tctrt | TraceTreeRoutine |
| tctu | TraceTreeUser |
| tcu | TraceUser |
| td | TypeDefinition |
| tr | Transaction |
| trp | Transport |
| tv | TreeView |
| tvi | TreeViewItem |
| uo | UserObject |
| vrcd | VariableCardinalityDefinition |
| vrd | VariableDefinition |
| vsb | VerticalScrollBar |
| wo | WindowObject |
| w | Window |

**Function naming conventions**

Global functions use the f_ prefix and object functions use the of_ prefix.
