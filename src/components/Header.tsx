import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
  root:{
    width:"100%",
  },
  // Appbarをfixにしつつコンテンツと被らないための設定
  offset: theme.mixins.toolbar,
  toolbar:{
    display:"flex",
    margin:0,
    padding:0,
  },
  // 今はHomeのIcon一つしかないけども将来的に増やすつもりなので
  // display:flexを指定している
  // flex:1,justifyContent:flex-endとすることでIconを右端に寄せている
  headerNavigation:{
    flex:"1",
    display:"flex",
    justifyContent:"flex-end",
  },
  iconButton:{
    // margin: theme.spacing(1),
    marginRight:theme.spacing(2)
  },
  blogTitle:{
    [theme.breakpoints.down('sm')]: {
      fontSize:1,
    },
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button >
              <Typography color="secondary" variant="h4" component="h1" >
                nakazato<span style={{fontWeight:"bold"}}>overflow</span>
              </Typography>
            </Button>
          </Link>

          <div className={classes.headerNavigation}>
            <Link to="/">
              <IconButton component="span" className={classes.iconButton} >
                <HomeIcon color="secondary" fontSize="large" />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};