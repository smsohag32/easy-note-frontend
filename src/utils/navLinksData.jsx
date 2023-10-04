import NoteIcon from "@mui/icons-material/Note";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SettingsIcon from "@mui/icons-material/Settings";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
const navLinkData = [
  {
    id: 0,
    name: "Overview",
    icon: <SpaceDashboardIcon />,
    pathname: "/",
  },
  {
    id: 4,
    name: "Contacts",
    icon: <PermContactCalendarIcon />,
    pathname: "/contacts",
  },
  {
    id: 3,
    name: "Notes",
    icon: <NoteIcon />,
    pathname: "/notes",
  },

  {
    id: 1,
    name: "Add Note",
    icon: <EditNoteIcon />,
    pathname: "/add-note",
  },
  {
    id: 2,
    name: "Add Contact",
    icon: <ContactPhoneIcon />,
    pathname: "/add-contact",
  },
  {
    id: 5,
    name: "Settings",
    icon: <SettingsIcon />,
    pathname: "/settings",
  },
];

export default navLinkData;
