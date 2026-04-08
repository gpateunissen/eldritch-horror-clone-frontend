import { useInvestigators } from "../hooks/useInvestigators";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Home() {
  const { data, isLoading } = useInvestigators();

  if (isLoading) return <Typography>Cargando...</Typography>;
  if (!data) return <Typography>No hay datos</Typography>;
  return (
    <>
      <Typography variant="h4">Investigadores</Typography>
      <List>
        {data?.map((inv) => (
          <ListItem key={inv.id} divider>
            <ListItemText
              primary={inv.name}
              secondary={`${inv.fluff.profession} | Salud: ${inv.max_health} | Cordura: ${inv.max_sanity}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
