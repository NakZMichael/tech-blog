import { createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: orange[500],
    },
    
  },
  typography:{
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      "Meiryo",
      "sans-serif",
    ].join(','),
  }
});
theme = responsiveFontSizes(theme);
let headerTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: "#fff",
    },
    
  },
  typography:{
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      "Meiryo",
      "sans-serif",
    ].join(','),
  }
});
headerTheme = responsiveFontSizes(headerTheme);
type BaseLayOutProps = {
    children: JSX.Element[]|JSX.Element
}

const useStyles = makeStyles({
  root:{
    minHeight:"calc( 100vh - 200px )",
    position:"relative",
    paddingBottom:"200px",
    width:"100%",
  }
});

export const BaseLayout = ({children}:BaseLayOutProps)=>{
  const classes= useStyles();
  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme} >
        <ThemeProvider theme={headerTheme}>
          <Header />
        </ThemeProvider>
        {children}
        <Footer/>
      </ThemeProvider>
    </div>
  );
};