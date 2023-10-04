import { DataGrid } from "@mui/x-data-grid";

import ContactsAction from "../Action/ContactsAction";
import useContacts from "../../hooks/useContacts";

export default function ContactsTable() {
  const { contactsData } = useContacts();

  const rows = contactsData.map((row, index) => ({
    ...row,
    id: index + 1,
  }));

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 350 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "designation", headerName: "Designation", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => (
        <div>
          <ContactsAction row={params.row} />
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: "60vh", width: "100%" }} className="">
      {/* <Toolbar /> */}
      <DataGrid
        className="flex justify-between"
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
