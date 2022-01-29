import React, { useState } from "react";
import {
  AppBar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Features from "../features/Features";
import styles from "../search/SearchBox.module.css";
import { Breakpoint } from "react-socks";
import i18next from "i18next";

const Header = () => {
  const [language, setLanguage] = useState("");

  const onChange = (event) => {
    setLanguage(event.target.value);
    return i18next.changeLanguage(event.target.value);
  };
  return (
    <div>
      <AppBar position="static">
        <Breakpoint medium up>
          <Toolbar>
            <Typography className={styles.appbar} variant="h5">
              <a
                className={styles.movietitle}
                href="https://ghiranu.github.io/movie-app/"
              >
                Movie🎥App
              </a>
            </Typography>
            <FormControl style={{ width: "150px" }}>
              <InputLabel
                style={{ color: "white" }}
                id="demo-simple-select-label"
              >
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={onChange}
                style={{ marginRight: "10px" }}
              >
                <MenuItem value={"en"}>EN</MenuItem>
                <MenuItem value={"fr"}>FR</MenuItem>
                <MenuItem value={"ro"}>RO</MenuItem>
                <MenuItem value={"de"}>DE</MenuItem>
              </Select>
            </FormControl>
            <Features />
          </Toolbar>
        </Breakpoint>
        <Breakpoint small down>
          <Toolbar>
            <Typography className={styles.appbar} variant="h5">
              <a className={styles.movietitle} href="/">
                Movie🎥List
              </a>
            </Typography>
            <Features />
          </Toolbar>
        </Breakpoint>
      </AppBar>
    </div>
  );
};

export default Header;
