import React from "react";
import { graphql } from "gatsby";
import {BaseLayout} from "../components/BaseLayout";
import { PostList } from "../components/PostsList";
import SEO from "../components/seo";
import { Introduction } from "../components/Introduction";
import { Header1 } from "../components/BlogElements";
import { Typography } from "@material-ui/core";
export default function Home({data}) {
  return (
    <BaseLayout>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <Introduction></Introduction>
      <Typography variant="h3" component="h2" style={{textAlign:"center"}}>記事一覧</Typography>
      <PostList nodes={data.allMdx.nodes as any[]} />
    </BaseLayout>
  );
}
export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          date
        }
        excerpt
        fields {
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;