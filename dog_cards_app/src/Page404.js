import { Grid } from "@mui/material";
import * as React from "react";

function Page404() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <h1>404</h1>
      <h1>Page not found</h1>
    </Grid>
  );
}

export default Page404;
