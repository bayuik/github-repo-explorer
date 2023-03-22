import React from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import "./App.css";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" className="app_container" >
        <Form />
        <UserList />
      </Container>
    </div>
  );
}

export default App;
