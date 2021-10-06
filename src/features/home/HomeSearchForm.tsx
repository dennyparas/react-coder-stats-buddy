import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  form: {
    width: "100%",
    marginTop: "3px",
  },
  textField: {
    width: "100%",
  },
}));

const HomeSearchForm: React.FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const [type, setType] = useState<string>("user");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  const handleTypeChange = (e: SelectChangeEvent) => {
    setType(e.target.value as string);
  };

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput !== "") {
      if (type === "user") {
        return history.push(`/users?q=${searchInput}`);
      } else {
        return history.push(`/repos?q=${searchInput}`);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#eee",
        padding: "9px 0",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Container maxWidth="md" sx={{ flexGrow: 1 }}>
        <form className={classes.form} noValidate onSubmit={search}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ background: "#fff", fontFamily: "Poppins" }}
                label="Search"
                id="outlined-size-small"
                size="small"
                value={searchInput}
                autoFocus
                className={classes.textField}
                onChange={handleSearchInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl size="small" fullWidth>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  sx={{ background: "#fff", fontFamily: "Poppins" }}
                  labelId="type-label"
                  id="type-label"
                  value={type}
                  label="Type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="repository">Repository</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                color="warning"
                size="medium"
                sx={{ bgcolor: "warning.dark", fontFamily: "Poppins" }}
                type="submit"
                variant="contained"
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default HomeSearchForm;
