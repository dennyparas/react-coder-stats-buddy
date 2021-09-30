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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
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

type ParamsProps = {
  searchParams: string;
  locationParams: string;
  sortParams: string;
  orderParams: string;
};

const UsersSearchForm: React.FC<ParamsProps> = ({
  searchParams,
  locationParams,
  sortParams,
  orderParams,
}) => {
  let history = useHistory();

  const classes = useStyles();

  const [searchInput, setSearchInput] = useState<string>("");
  const [locationInput, setLocationInput] = useState<string>("");
  const [selectedSortValue, setSelectedSortValue] =
    useState<string>(`order=desc`);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  const handleSortChange = (e: SelectChangeEvent) => {
    setSelectedSortValue(e.target.value as string);
  };

  const handleLocationInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocationInput(e.target.value);

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput || locationInput) {
      const query = searchInput ? `q=${searchInput}&` : "";
      const location = locationInput ? `location=${locationInput}&` : "";
      history.push(`/users?${query}${location}${selectedSortValue}`);
    }
  };

  useEffect(() => {
    setSearchInput(searchParams ? searchParams : "");
    setLocationInput(locationParams ? locationParams : "");
    setSelectedSortValue(
      sortParams && orderParams
        ? `sort=${sortParams}&order=${orderParams}`
        : `order=desc`
    );
  }, [searchParams, locationParams, sortParams, orderParams]);

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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={3}>
              <TextField
                sx={{ background: "#fff", fontFamily: "Poppins" }}
                label="Location (Optional)"
                id="outlined-size-small"
                size="small"
                value={locationInput}
                className={classes.textField}
                onChange={handleLocationInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl size="small" fullWidth>
                <InputLabel id="sort-label">Sort option</InputLabel>
                <Select
                  sx={{ background: "#fff", fontFamily: "Poppins" }}
                  labelId="sort-label"
                  id="sort-label"
                  value={selectedSortValue}
                  label="Sort option"
                  onChange={handleSortChange}
                >
                  <MenuItem value={`order=desc`}>Best Match</MenuItem>
                  <MenuItem value={`sort=followers&order=desc`}>
                    Most Followers
                  </MenuItem>
                  <MenuItem value={`sort=followers&order=asc`}>
                    Fewest Followers
                  </MenuItem>
                  <MenuItem value={`sort=repositories&order=desc`}>
                    Most repositories
                  </MenuItem>
                  <MenuItem value={`sort=repositoriess&order=asc`}>
                    Fewest repositories
                  </MenuItem>
                  <MenuItem value={`sort=joinedd&order=desc`}>
                    Most recently joined
                  </MenuItem>
                  <MenuItem value={`sort=joined&order=asc`}>
                    Least Recently joined
                  </MenuItem>
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
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default UsersSearchForm;
