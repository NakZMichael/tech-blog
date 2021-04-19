import React from "react";
import { graphql } from "gatsby";
import {BaseLayout} from "../components/BaseLayout";
import { PostList } from "../components/PostsList";
import SEO from "../components/seo";
import { Introduction } from "../components/Introduction";
export default function Home({data}) {
  return (
    <BaseLayout>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <Introduction></Introduction>
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