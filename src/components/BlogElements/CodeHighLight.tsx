import React from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";
import { makeStyles, Paper } from '@material-ui/core';
import { ElementProps } from './ElementsProps';

// The code snippet you want to highlight, as a string
const useStyle = makeStyles(theme =>({
  codeBox:{
    color:"#fff",
    backgroundColor:"#222",
    lineHeight:"1.6em",
    fontSize:16,
    paddingLeft:"18px",
    paddingRight:"18px",
    paddingTop:"10px",
    paddingBottom:"10px",
    overflow: "scroll",
  }
})
);

export const CodeHightLight = ({children}:ElementProps)=>{
  const classes = useStyle();
  const innerHTML = Prism.highlight(children.toString(), Prism.languages.javascript, 'javascript');
  
  return (
    <Paper className={classes.codeBox} >
      <div dangerouslySetInnerHTML={{__html : innerHTML}} />
    </Paper>
  );
};