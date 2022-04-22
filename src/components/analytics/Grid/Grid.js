import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Graph from "../../Graph/Data";
import Graph2 from "./Grid2";
import Table from "./Table";
import "./Grid.css";

const gridData = [
  {
    name: '',
    title: 'Avg market cap',
  },
  {
    name: '',
    title: 'Total volume',
  },
  {
    name: '',
    title: 'Total sales',
  },
  {
    name: '',
    title: 'Avg concurrent players',
  },
]

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid className='row' sx={{ flexGrow: 1}}>
      <Grid container columns={{ xs: 2, md: 12 }}>
      <Grid item xs={30}>
        <Grid container justifyContent="center" spacing={spacing}>
          {gridData.map((value, index) => (
            <Grid key={index} item>
              <Paper
                sx={{
                  height: 160,
                  width: 290,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
              <div>{value.title}</div>
                <Graph />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Graph2 />
      </Grid>
      <Table />
    </Grid>
  );
}
