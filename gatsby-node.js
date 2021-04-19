const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)




exports.onCreateNode = ({ node, getNode, actions }) => {
  
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: 'slug',
      node,
      value: value,
    })
    console.log(`Node created path: "${value}"`)
  }
}

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   // const { createPage } = actions
//   // const result = await graphql(`
//   // query PostQuery {
//   //   allMdx {
//   //     nodes {
//   //       fields {
//   //         slug
//   //       }
//   //       frontmatter {
//   //         title
//   //         date
//   //       }
//   //       body
//   //     }
//   //   }
//   // }
//   // `)
//   // if (result.errors) {
//   //   reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   // }
//   // // Create blog post pages.
//   // const posts = result.data.allMdx.nodes
//   // // you'll call `createPage` for each result
//   // posts.forEach((node , index) => {
//   //   console.log("createPage",node)
//   //   createPage({
//   //     // This is the slug you created before
//   //     // (or `node.frontmatter.slug`)
//   //     path: node.fields.slug,
//   //     // This component will wrap our MDX content
//   //     component: path.resolve(`./src/templates/BlogTemplate.tsx`),
//   //     // You can use the values in this context in
//   //     // our page layout component
//   //     context: { node },
//   //   })
//   // })
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             body
//           }
//         }
//       }
//     }
//   `)
//   console.log(JSON.stringify(result, null, 4))
//   result.data.allMdx.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/BlogTemplate.tsx`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//         body: node.body
//       },
//     })
//   })
// }