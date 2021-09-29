import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { showAllLanguages } from "../languages/LanguagesSlice";

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
  languageParams: string;
  sortParams: string;
  orderParams: string;
};

const ReposSearchForm: React.FC<ParamsProps> = ({
  searchParams,
  languageParams,
  sortParams,
  orderParams,
}) => {
  let history = useHistory();

  const classes = useStyles();

  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Any");
  const [selectedSortValue, setSelectedSortValue] =
    useState<string>(`&order=desc`);

  const languages = useAppSelector(showAllLanguages);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  const handleLanguageChange = (e: SelectChangeEvent) => {
    setSelectedLanguage(e.target.value as string);
  };

  const handleSortChange = (e: SelectChangeEvent) => {
    setSelectedSortValue(e.target.value as string);
  };

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput || selectedLanguage) {
      let query;

      if (searchInput) {
        query = `q=${searchInput}&language=${encodeURIComponent(
          selectedLanguage
        )}${selectedSortValue}`;
      } else {
        query = `language=${encodeURIComponent(
          selectedLanguage
        )}${selectedSortValue}`;
      }
      history.push(`/repos?${query}`);
    }
  };

  useEffect(() => {
    setSearchInput(searchParams ? searchParams : "");
    setSelectedLanguage(languageParams ? languageParams : "Any");
    setSelectedSortValue(
      sortParams && orderParams
        ? `&sort=${sortParams}&order=${orderParams}`
        : `&order=desc`
    );
  }, [searchParams, languageParams, sortParams, orderParams]);

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
              <FormControl size="small" fullWidth>
                <InputLabel id="type-label">Language</InputLabel>
                <Select
                  sx={{ background: "#fff", fontFamily: "Poppins" }}
                  labelId="type-label"
                  id="type-label"
                  value={selectedLanguage}
                  defaultValue=""
                  label="Language"
                  onChange={handleLanguageChange}
                >
                  <MenuItem value="Any">Any</MenuItem>
                  <ListSubheader
                    sx={{
                      bgcolor: "#eee",
                    }}
                  >
                    Popular
                  </ListSubheader>
                  {languages.length > 0 &&
                    languages
                      .filter((language) => language.popular === "true")
                      .map((filteredLanguage, index) => (
                        <MenuItem key={index} value={filteredLanguage.name}>
                          {filteredLanguage.name}
                        </MenuItem>
                      ))}
                  <ListSubheader
                    sx={{
                      bgcolor: "#eee",
                    }}
                  >
                    Everything
                  </ListSubheader>
                  {languages.length > 0 &&
                    languages.map((language, index) => (
                      <MenuItem key={index} value={language.name}>
                        {language.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
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
                  <MenuItem value={`&order=desc`}>Best Match</MenuItem>
                  <MenuItem value={`&sort=stars&order=desc`}>
                    Most Stars
                  </MenuItem>
                  <MenuItem value={`&sort=stars&order=asc`}>
                    Fewest Stars
                  </MenuItem>
                  <MenuItem value={`&sort=forks&order=desc`}>
                    Most Forks
                  </MenuItem>
                  <MenuItem value={`&sort=forks&order=asc`}>
                    Fewest Forks
                  </MenuItem>
                  <MenuItem value={`&sort=updated&order=desc`}>
                    Recently Updated
                  </MenuItem>
                  <MenuItem value={`&sort=updated&order=asc`}>
                    Least Recently Updated
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

export default ReposSearchForm;
