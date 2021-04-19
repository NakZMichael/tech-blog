import { AppBar, BottomNavigation, Fab, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(theme=>({
  root:{
    backgroundColor:"#222",
    color:"#fff",
    width:"100%",
    margin:0,
    marginTop:"100%",
    paddingTop:20,
    paddingBottom:20,
    position:"absolute",
    bottom:0,
  }
}));

export const Footer = ()=>{
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginRight:"auto", marginLeft:"auto"}}>
        <Typography variant="h6" component="h2">
                    Twitterはこちら
        </Typography>
        <a href="https://twitter.com/tottemoganbaru">
          <Fab size="medium">
            <Twitter style={{color:"#222"}}></Twitter>
          </Fab>
        </a>
      </div>
    </Toolbar>
  );
};