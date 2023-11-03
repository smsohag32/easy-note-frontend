import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import useContacts from "../../hooks/useContacts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Overview() {
  const { contactsData } = useContacts();
  return (
    <div className="w-full">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        className="w-full justify-end "
      >
        <Item className="flex bg-gradient-to-r to-purple-900 from-violet-900 text-white ">
          <div className="flex-col items-center justify-center text-white">
            <p className="font-semibold text-sm opacity-70">New Contacts</p>
            <p className="font-semibold text-sm opacity-70">
              {contactsData?.length}
            </p>
          </div>
        </Item>
        <Item className="flex bg-gradient-to-r to-purple-900 from-rose-900 text-white ">
          <div className="flex flex-col items-center justify-center text-white">
            <p className="font-semibold text-sm opacity-70">Total Contacts</p>
            <p className="font-semibold text-sm opacity-70">
              {contactsData?.length}
            </p>
          </div>
        </Item>
      </Stack>
    </div>
  );
}
