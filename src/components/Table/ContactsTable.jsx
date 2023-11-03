import { DataGrid } from "@mui/x-data-grid";
import ContactsAction from "../Action/ContactsAction";
import useContacts from "../../hooks/useContacts";
import { Skeleton } from "@mui/material";
import * as React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import CSVReader from "react-csv-reader";
import axios from "axios";
import { toast } from "react-toastify";

const DarkDataGrid = styled(DataGrid)`
  & .MuiDataGrid-root {
    background-color: #2d3748;
    color: #fff;
  }
  & .MuiDataGrid-cell {
    color: #fff;
  }
  & .MuiDataGrid-columnHeader,
  .MuiDataGrid-sortIcon,
  .MuiDataGrid-iconSeparator {
    color: #fff;
  }
  & .MuiTablePagination-caption,
  .MuiTablePagination-select,
  .MuiTablePagination-toolbar {
    color: #fff;
  }
`;

export default function ContactsTable() {
  const { contactsData, cLoading, refetch } = useContacts();
  const [searchValue, setSearchValue] = React.useState("");
  const [cvsFile, setCvsFile] = React.useState([]);

  const filteredContacts = contactsData.filter((contact) =>
    contact.name?.toLowerCase().includes(searchValue?.toLocaleLowerCase())
  );

  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const rows = filteredContacts?.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  const handleClose = () => {
    setDialogValue({
      name: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
    });
    handleClose();
  };
  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Designation", key: "designation" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
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

  // handle to upload new contact in excel file

  const handleUploadContact = (data, fileInfo) => {
    setCvsFile(data);
  };

  // handle to save contact in data base

  const saveCvsFile = () => {
    if (cvsFile?.length > 1) {
      const headers = cvsFile[0];
      const formattedData = cvsFile.slice(1).map((row) => {
        return headers.reduce((obj, key, index) => {
          obj[key] = row[index];
          return obj;
        }, {});
      });

      const newValidData = formattedData.map((item) => {
        return {
          name: item.Name,
          email: item.Email,
          phone: item.Phone,
          designation: item.Designation,
        };
      });
      axios
        .post(
          `https://easy-note-backend.vercel.app/api/contacts/many`,
          newValidData
        )
        .then((data) => {
          refetch();
          toast.success("Awesome! Some new contacts added!!!");
        })
        .catch((error) => {
          toast.error("Failed to save contacts. Please try again.");
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-4 text-black p-4">
        <input
          className="border max-w-md mx-auto w-full bg-black outline-none focus:border-rose-800 border-violet-600 shadow-violet-600 shadow-md text-white py-3 px-4 rounded-sm"
          placeholder="Search contacts"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {cLoading ? (
        <>
          <div
            style={{ height: "100vh", width: "100%" }}
            className="max-w-5xl mx-auto text-white overflow-x-scroll"
          >
            <Skeleton />
            <Skeleton color="white" animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </div>
        </>
      ) : (
        <div
          style={{ height: "100vh", width: "100%" }}
          className="max-w-7xl mx-auto text-white overflow-x-scroll"
        >
          <div className="w-full">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <CSVLink
                data={filteredContacts}
                headers={headers}
                filename={"contacts_data.csv"}
              >
                <button className="px-2 py-1 bg-gradient-to-r to-red-400 from-violet-500">
                  Download Excel
                </button>
              </CSVLink>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
              className="flex flex-col md:flex-row gap-6"
            >
              <CSVReader onFileLoaded={handleUploadContact} />
              <button
                className="px-2 py-1 bg-gradient-to-r to-red-400 from-violet-500"
                onClick={saveCvsFile}
              >
                Upload
              </button>
              <CSVLink
                data={[]}
                headers={headers}
                filename={"contacts_data.csv"}
              >
                <button className="px-2 ms-5 py-1 bg-gradient-to-r to-red-400 from-violet-500">
                  Demo Excel
                </button>
              </CSVLink>
            </div>
          </div>
          <DarkDataGrid
            rows={filteredContacts.map((row, index) => ({
              ...row,
              id: index + 1,
            }))}
            columns={columns}
            checkboxSelection
          />
        </div>
      )}
    </div>
  );
}
