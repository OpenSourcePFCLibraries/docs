# n_cst_queue

**Description**

Queue-processing object. Nodes in a queue are accessed on a first-in, first-out (FIFO) basis. When you add a new node to the queue, n_cst_queue places it at the end of the list; when you get a node from the queue, n_cst_queue accesses it from the beginning of the list, removing it in the process.

**Ancestry**

![Figure](images/ref2-p629-1.png)

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

**Object relationships**

n_cst_linkedlistnode

**Usage**

Use this object to handle list processing for FIFO lists (queues).

To use n_cst_queue:

1. Create a variable for n_cst_queue. This example declares a window instance variable:

   ```
   n_cst_queue  inv_queue
   ```

2. Add nodes to the queue. To do this, first create a node, specify a key and data, then call the of_Put function:

   ```
   n_cst_linkedlistnode  lnv_node
   Integer  li_return

   lnv_node = CREATE n_cst_linkedlistnode

   lnv_node.of_SetKey(sle_1.text)
   lnv_node.of_SetData(sle_1.text)
   li_return = inv_queue.of_Put(lnv_node)
   ```

3. Access and remove items from the queue as appropriate by calling the of_Get function. This example displays the key in a MessageBox:

   ```
   Any la_key
   n_cst_linkedlistnode lnv_node

   inv_queue.of_Get(lnv_node)
   IF IsValid(lnv_node) THEN
      lnv_node.of_GetKey(la_key)
      MessageBox("Queue", &
         "Key is " + String(la_key))
   ELSE
      MessageBox("Queue", "List is empty")
   END IF
   ```

**See also**

- [n_cst_linkedlistnode](n_cst_linkedlistnode.md)
- [n_cst_list](n_cst_list.md)
- [n_cst_stack](n_cst_stack.md)
- [n_cst_tree](n_cst_tree.md)

## Functions

N_cst_queue contains precoded object functions:

- of_Get
- of_Put

### of_Get

**Description**

Retrieves the top node in the queue, removing it from the queue.

**Access**

Public

**Syntax**

```
instancename.of_Get ( node )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_queue |
| *node* | N_cst_linkedlistnode instance into which the function places a reference to the first node in the queue (passed by reference) |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Examples**

This example calls the of_Get function:

```
Any la_key
n_cst_linkedlistnode lnv_node

inv_queue.of_Get(lnv_node)
IF IsValid(lnv_node) THEN
   lnv_node.of_GetKey(la_key)
   MessageBox("Queue", &
      "Key is " + String(la_key))
ELSE
   MessageBox("Queue", "List is empty")
END IF
```

### of_Put

**Description**

Adds a node to the bottom of a queue.

**Access**

Public

**Syntax**

```
instancename.of_Put ( node )
```

| Argument | Description |
| --- | --- |
| *instancename* | Instance name of n_cst_queue |
| *node* | N_cst_linkedlistnode instance to add to the bottom of the queue |

**Return value**

Integer. Returns 1 if the function succeeds and -1 if an error occurs.

**Usage**

Before calling this function, create the node, add key information, and add data.

**Examples**

This example calls the of_Put function:

```
n_cst_linkedlistnode  lnv_node
Integer  li_return

lnv_node = CREATE n_cst_linkedlistnode

lnv_node.of_SetKey(sle_1.text)
lnv_node.of_SetData(sle_1.text)
li_return = inv_queue.of_Put(lnv_node)
```
