import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import axios from "axios";
import useContacts from "../../hooks/useContacts";
import { toast } from "react-toastify";
export default function ContactsAction({ row }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { refetch } = useContacts();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (item) => {
    const res = await axios.delete(
      `https://easy-note-backend.vercel.app/api/contacts/${item?._id}`
    );
    if (res?.data?.message.length > 0) {
      handleClose();
      refetch();
      toast.warning("Contact deleted!!!");
    }
  };
  const handleEdit = async (item) => {
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SettingsIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => handleEdit(row)} className="small-btn">
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleDelete(row)} className="small-btn">
          Remove
        </MenuItem>
      </Menu>
    </div>
  );
}
