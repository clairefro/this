exports.createPages = async function ({ actions, graphql }) {
  const { data: posts } = await graphql(`
    query allPostsSlugs {
      allContentfulPost {
        nodes {
          slug
          contentful_id
        }
      }
    }
  `)

  // Generate post pages with context
  posts.allContentfulPost.nodes.forEach(post => {
    const { slug, contentful_id } = post
    actions.createPage({
      path: `/p/${slug}`,
      component: require.resolve(`./src/templates/blog-post`),
      context: {
        slug,
        contentful_id,
      },
    })
  })
}
