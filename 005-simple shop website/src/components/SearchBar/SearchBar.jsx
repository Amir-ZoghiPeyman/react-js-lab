import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box component="div" className="mt-10 ml-10">
      <Typography component="span" sx={{ color: "gray" }}>
        Welcome, Flightio
      </Typography>
      <Typography
        component="h1"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        Bring Designer Lamps This Diwali
      </Typography>
      <Box>
        <TextField id="outlined-basic" label="ُSearch" variant="outlined" />
        <Button
          sx={{ height: "55px", marginLeft: "8px", backgroundColor: "purple" }}
          variant="contained"
        >
          <SearchIcon sx={{ fontSize: "32px !important" }} />
        </Button>
      </Box>
    </Box>
  );
}
