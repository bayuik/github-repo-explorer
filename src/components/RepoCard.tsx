import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

interface RepoCardProps {
  name: string;
  description: string;
  stargazers_count: number;
}

export default function RepoCard({
  name,
  description,
  stargazers_count,
}: RepoCardProps) {
  return (
    <Card sx={{ minWidth: 275 }} className="card_container">
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {name}
          <div>
            {stargazers_count}
            <StarIcon />
          </div>
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
