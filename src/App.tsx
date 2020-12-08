import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import TrashIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #00ff00, #ff0000)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "30px 30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  typography: {
    h2: {
      fontSize: 36,
      marginTop: 30,
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

const TutorialCustomStyles = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <ButtonStyled />
      <TutorialButton />
      <TextField
        variant='outlined'
        color='secondary'
        type='date'
        label='The Date'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color='primary'
            disabled={false}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label='Testing Checkbox'
      />
    </>
  );
};

const TutorialForm = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <TextField
        variant='outlined'
        color='secondary'
        type='date'
        label='The Date'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color='primary'
            disabled={false}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label='Testing Checkbox'
      />
    </>
  );
};

const TutorialFormControlLabel = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color='primary'
          disabled={false}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label='Testing Checkbox'
    />
  );
};

const TutorialCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color='primary'
        disabled={false}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

const TutorialButton = () => {
  return (
    <Button
      startIcon={<SaveIcon />}
      endIcon={<SaveIcon />}
      size='large'
      href='#'
      variant='contained'
      color='primary'
    >
      Hello, World!
    </Button>
  );
};

const TutorialButtonGroup = () => {
  return (
    <ButtonGroup variant='contained'>
      <Button startIcon={<SaveIcon />} size='large' href='#' color='primary'>
        Save
      </Button>
      <Button startIcon={<TrashIcon />} size='large' href='#' color='secondary'>
        Discard
      </Button>
    </ButtonGroup>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <div className='App'>
          <header className='App-header'>
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>MUI Theming</Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant='h1' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='h1' component='div'>
              Learn how to use MUI
            </Typography>
            <Grid container spacing={2} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            <img src={logo} className='App-logo' alt='logo' />
            <TutorialCustomStyles />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
