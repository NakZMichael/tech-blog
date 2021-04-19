import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import { BaseLayout } from '../components/BaseLayout';
import SEO from '../components/seo';
import {Header1, CodeHightLight, Header2, Header3, Paragraph} from '../components/BlogElements';
import { Container, makeStyles } from '@material-ui/core';
import { MDXRenderer } from "gatsby-plugin-mdx";

const useStyles = makeStyles(theme=>({
  root:{
    '& iframe':{
      maxWidth:"100%"
    },
  },
  wrapper:{
    '& iframe':{
      maxWidth:"100%"
    },
    margin: theme.spacing(1, 'auto')
  }
}));

function Wrapper({ children }) {
  const classes = useStyles();
  const childrenArray = React.Children.toArray(children);
  return childrenArray.map( child => <div className={classes.wrapper}>{child}</div>);
}
const components={
  h1: Header1,
  h2:Header2,
  h3:Header3,
  p:Paragraph,
  code: CodeHightLight,
  wrapper: Wrapper,
};

const Layout = (props ) => {
  const classes = useStyles();
  return (
    <BaseLayout>
      <SEO title={props.pageContext.frontmatter.title} description={props.pageContext.frontmatter.description} />
      <Container maxWidth="md" className={classes.root} >
        <MDXProvider components={components}>{props.children}</MDXProvider>
      </Container>
    </BaseLayout>
  );
};
  
export default Layout;
