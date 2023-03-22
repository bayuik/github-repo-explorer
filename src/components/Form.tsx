import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux/es/exports";
import { get_data_user } from "../utils/api";

function Form() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    get_data_user(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextField
          id="outlined-basic"
          label="Enter Username"
          variant="outlined"
          margin="dense"
          onChange={onChangeInput}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {user !== "" && <p>Showing users for "{user}"</p>}
      </Stack>
    </form>
  );
}

export default Form;
