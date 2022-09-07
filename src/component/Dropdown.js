import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@material-ui/core/Grid";

export default function BasicSelect(props) {
  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <Grid container justify="center">
      <Box sx={{ minWidth: 60 }}>
        <FormControl sx={{ m: 3, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-label">{props.Label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            label="Data Goes Here"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}
