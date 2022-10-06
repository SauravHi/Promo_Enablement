import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@material-ui/core/Grid";

function MyFormHelperText(props) {  
  const { focused } = useFormControl() || {};
  const helperText = React.useMemo(() => {
    
    if (focused) {
      return "This field is being focused";
    }
    return "Please Enter Text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl(props) {
  return (
    <Grid container justify="center" >
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ m: 2, minWidth: 180 }}>
          <OutlinedInput placeholder= {props.name}/>
          <MyFormHelperText />
        </FormControl>
      </Box>
    </Grid>
  );
}
