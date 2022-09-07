//component/Button.js
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@material-ui/core/Grid";

export default function OutlinedButtons() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Grid container justify="center">
          <Button variant="outlined" sx={{ m: 1, minWidth: 180 }}>
            Submit
          </Button>
        </Grid>
      </Stack>
    </div>
  );
}
