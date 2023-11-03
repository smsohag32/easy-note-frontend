import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
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
        refetch();
        toast.success("Awesome New contact!!!");
        reset();
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col md:flex-row justify-between items-center text-white gap-5"
    >
      <FormControl
        color="info"
        className="w-full text-white "
        variant="standard"
      >
        <InputLabel
          htmlFor="input-with-icon-adornment"
          style={{ color: "white" }} // added style
        >
          Name
        </InputLabel>
        <Input
          placeholder="Type Name"
          {...register("name")}
          id="input-with-icon-adornment "
          style={{ color: "white" }}
          type="text"
          className="text-white border border-gray-600 py-2 px-2"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle className="text-white" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl
        color="info"
        className="w-full text-white "
        variant="standard"
      >
        <InputLabel
          htmlFor="input-with-icon-adornment"
          style={{ color: "white" }} // added style
        >
          Number
        </InputLabel>
        <Input
          className="text-white border border-gray-600 py-2 px-2"
          placeholder="Type number"
          {...register("number", { required: true })}
          id="input-with-icon-adornment "
          style={{ color: "white" }}
          type="number"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle className="text-white" />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl variant="standard" className="w-full">
        <InputLabel
          htmlFor="input-with-icon-adornment "
          style={{ color: "white" }} // added style
        >
          Email
        </InputLabel>
        <Input
          style={{ color: "white" }}
          placeholder="Enter email"
          id="input-with-icon-adornment "
          className="text-white border border-gray-600 py-2 px-2"
          {...register("email")}
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon className="text-white" />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard" className="w-full ">
        <InputLabel
          htmlFor="input-with-icon-adornment "
          style={{ color: "white" }} // added style
        >
          Designation
        </InputLabel>
        <Input
          style={{ color: "white" }}
          placeholder="Enter Desig"
          {...register("designation")}
          id="input-with-icon-adornment "
          className="text-white border border-gray-600 py-2 px-2"
          type="text"
          startAdornment={
            <InputAdornment position="start">
              <AddReactionIcon className="text-white" />
            </InputAdornment>
          }
        />
      </FormControl>

      <div className="mt-2">
        <Button
          type="submit"
          variant="outlined"
          style={{ color: "white" }}
          className="text-white"
          endIcon={<NoteAddIcon />}
        >
          Add
        </Button>
      </div>
    </form>
  );
}
