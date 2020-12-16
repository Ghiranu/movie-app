import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Features from "../features/Features";
import styles from "../search/SearchBox.module.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={styles.appbar} variant="h5">
            Movie🎥List
          </Typography>
          <Features />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
