# Modify Expression dialog box

Build an expression for the object, using PowerScript functions. You can type the expression in the entry field, or click buttons, functions, and columns to build it.

*Opened by the DataWindow's own Modify Expression dialog box.*

## Options

- **Entry field**: Displays the expression.
- **Operator buttons**: Click a button to add the operator to the expression.
- **Functions**: Click a function to add its syntax to the expression.
- **Columns**: Click a column to add it to the expression.

## To refer to the value of a column in a specific row

Enter:

```
columnname[integer]
```

where *columnname* is the name of the column and *integer* is the row, relative to the current one. A negative integer is a previous row, and an integer with a plus sign (+) is a following row.

## To check the expression without closing the dialog box

Click **Verify**. A message box says whether the expression is valid.

---

[Dialog help contents](README.md)
