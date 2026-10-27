# DataWindow Properties, Status Flags tab

Use this tab to view the DataWindow status flags.

*Opened by `w_dwproperty`.*

## Options

- **Assist status change**: Not all status changes are valid for rows. For example, you can't change NewModified! to New!. Some status changes are allowed but result in a different status from the one you specify: for example, changing DataModified! to New! results in NewModified!.

  When a status change isn't allowed, you can call SetItemStatus more than once to get the row to the status you want. For example, to set a row with New! status to NotModified!, set it first to DataModified! and then to NotModified!.

  When this check box is selected, PFC performs the middle steps (if any) to get to the status you choose. When it isn't, PFC doesn't perform them, and the result is as described above.
- **Row status**: The row status:

  - **New**: a new row, with no columns modified
  - **NewModified**: a new row, with at least one column set to DataModified
  - **NotModified**: an existing row, with no changes
  - **DataModified**: an existing row, with at least one column set to DataModified

  To change the status of a whole row, click the row first. To change the status of a column in a row, first select the row and column in the DataWindow at the bottom of the dialog box.
- **Column status**: The column status: NotModified or DataModified.
- **DataWindow display**: The DataWindow whose status flags are displayed.

---

[Dialog help contents](README.md)
