import { useEffect } from "react";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import "./App.css";
import Container from "@mui/material/Container";
import { get_data_user } from "./utils/api";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" className="app_container">
        <Form />
        <UserList />
      </Container>
    </div>
  );
}

export default App;
