import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
export default function AddNoteForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      className="w-full"
      autoComplete="off"
    >
      <div className="w-full flex gap-5">
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Category"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows={4}
        />
        <div className="mt-2">
          <Button variant="contained" endIcon={<NoteAddIcon />}>
            Add
          </Button>
        </div>
      </div>
    </Box>
  );
}
