import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { ElementProps } from './ElementsProps';

const useStyles = makeStyles(theme=>({
  h2:{
    margin: theme.spacing(2, 'auto'),
    fontWeight:"bold"
  }
}));
export const Header2 = ({children}:ElementProps)=>{
  const classes = useStyles();
  return (
    <Typography variant="h4" component="h2" className={classes.h2} >{children}</Typography>
  );
};