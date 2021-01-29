import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import DehazeIcon from "@material-ui/icons/Dehaze";
import styles from "../search/SearchBox.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Features() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        startIcon={<DehazeIcon />}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Features
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          className={styles.dialogtitle}
        >
          {"Features"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ul>
              <li>List of Popular Movies of the day.</li>
              <li>SearchBar with results displayed as you type.</li>
              <li>AddMovie Button to create a Saved Movies List.</li>
              <li>Dialog message when you add a movie to Saved Movies.</li>
              <li>Highlight the movie whenever you hover it.</li>
              <li>Delete Button to remove a movie from SavedMovies List.</li>
              <li>Personal Rating System for saved movies.</li>
            </ul>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
