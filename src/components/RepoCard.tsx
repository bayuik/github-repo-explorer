import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface RepoCardProps {
  name: string;
  description: string;
}

export default function RepoCard({ name, description }: RepoCardProps) {
  return (
    <Card sx={{ minWidth: 275 }} className="card_container">
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
