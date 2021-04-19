import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { ElementProps } from './ElementsProps';

const useStyles = makeStyles(theme=>({
  p:{
    margin: theme.spacing(0, 'auto'),
  }
}));
export const Paragraph = ({children}:ElementProps)=>{
  const classes = useStyles();
  return (
    <Typography variant="body1" component="p" className={classes.p} >{children}</Typography>
  );
};