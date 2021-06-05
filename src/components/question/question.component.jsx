import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: theme.spacing(2),
    flexWrap: 'wrap',

    '& .MuiTextField-root': {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '300ch',
        marginBottom: 0
        
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(0),
    },
  },
}));

const Question = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        whiteSpace="normal"
        id="outlined-full-width"
        label="שאלה"
        multiline
        style={{ margin: 8 }}
        placeholder="מקום לכתיבת השאלה"
        helperText="אל תתבייש לשאול "
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <div>
        <Button variant="contained"  color="primary" onClick={null}>
          שלח שאלה
        </Button>

      </div>
    </form>
  );
};

export default Question;
