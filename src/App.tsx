import { useEffect, useState } from "react";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import "./App.css";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";

function App() {
  const [user, setUser] = useState([]);
  const { listUser } = useSelector((state: any) => state.user);

  useEffect(() => {
    setUser(listUser);
  }, [listUser]);

  return (
    <div>
      <LoadingBar />
      <div className="App">
        <Container maxWidth="md" className="app_container">
          <Form />
          {user &&
            user.map((user: any) => {
              return <UserList login={user.login} key={user.login} />;
            })}
        </Container>
      </div>
    </div>
  );
}

export default App;
