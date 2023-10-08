import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { AccountCircle } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import useContacts from "../../hooks/useContacts";
import { toast } from "react-toastify";

export default function AddContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const { refetch } = useContacts();

  const onSubmit = (data) => {
    axios
      .post(`https://easy-note-backend.vercel.app/api/contacts`, data)
      .then((data) => {
        toast.success("New Contact add success!");
        refetch();
        reset();
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col md:flex-row justify-between gap-5"
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
        <Input
          {...register("name")}
          id="input-with-icon-adornment"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle className="text-blue-500" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Number</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="number"
          {...register("phone")}
          startAdornment={
            <InputAdornment position="start">
              <LocalPhoneIcon className="text-blue-500" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          {...register("email")}
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon className="text-blue-500" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">Designation</InputLabel>
        <Input
          {...register("designation")}
          id="input-with-icon-adornment"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <AddReactionIcon className="text-blue-500" />
            </InputAdornment>
          }
        />
      </FormControl>

      <div className="mt-2">
        <Button type="submit" variant="contained" endIcon={<NoteAddIcon />}>
          Add
        </Button>
      </div>
    </form>
  );
}
