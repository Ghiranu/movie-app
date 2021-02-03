import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Features from "../features/Features";
import styles from "../search/SearchBox.module.css";
import { Breakpoint } from "react-socks";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Breakpoint medium up>
          <Toolbar>
            <Typography className={styles.appbar} variant="h5">
              <a className={styles.movietitle} href="/">
                Movie🎥List
              </a>
            </Typography>
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
