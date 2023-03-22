import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Form() {
  let user = "test";
  return (
    <Stack>
      <TextField
        id="outlined-basic"
        label="Enter Username"
        variant="outlined"
        margin="dense"
      />
      <Button variant="contained">Search</Button>
      <p>Showing users for "{user}"</p>
    </Stack>
  );
}

export default Form;
