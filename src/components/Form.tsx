import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux/es/exports";
import { get_data_user } from "../utils/api";
import { setListUser } from "../States/userSlice";

function Form() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    get_data_user(user).then((data) => {
      dispatch(setListUser(data));
    });
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
