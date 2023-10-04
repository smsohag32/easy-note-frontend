import { Toolbar } from "@mui/material";
import AddNoteForm from "../../components/Form/AddNoteForm";

const AddNote = () => {
  return (
    <div>
      <Toolbar />
      <h1 className="py-5 px-5 text-xl font-bold">Add new Note</h1>
      <AddNoteForm />
    </div>
  );
};

export default AddNote;
