import { useState, useEffect } from "react";
import RepoCard from "./RepoCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { get_user_repo } from "../utils/api";

interface UserListProps {
  login: string;
}

// get_user_repo("taftphir");
// name
// description
// stargazers_count
interface Repo {
  name: string;
  description: string;
}

function UserList({ login }: UserListProps) {
  const [repoList, setRepoList] = useState<Repo[]>([]);

  useEffect(() => {
    get_user_repo(login).then((data: any) => {
      setRepoList(data);
      // console.log(data);
    });
  }, []);

  return (
    <div className="userlist_container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{login}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {repoList.length > 0 ? (
            repoList.map((repo: Repo) => {
              return (
                <RepoCard
                  name={repo.name}
                  description={repo.description}
                  key={repo.name}
                />
              );
            })
          ) : (
            <Typography>No Repo</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default UserList;
