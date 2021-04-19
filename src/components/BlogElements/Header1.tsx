import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { ElementProps } from './ElementsProps';

const useStyles = makeStyles(theme=>({
  h1:{
    margin: theme.spacing(4, 'auto'),
    fontWeight:"bold"
  }
}));
export const Header1 = ({children}:ElementProps)=>{
  const classes = useStyles();
  return (
    <Typography variant="h2" component="h1" className={classes.h1} >{children}</Typography>
  );
};