import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { ElementProps } from './ElementsProps';

const useStyles = makeStyles(theme=>({
  h3:{
    margin: theme.spacing(1, 'auto'),
    fontWeight:"bold"
  }
}));
export const Header3 = ({children}:ElementProps)=>{
  const classes = useStyles();
  return (
    <Typography variant="h6" component="h3" className={classes.h3} >{children}</Typography>
  );
};