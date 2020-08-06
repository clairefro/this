import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  const posts = data.allContentfulPost.nodes
  return (
    <div className="container mx-auto mt-6 max-w-screen-sm">
      <ul>
        {posts.map((p, i) => (
          <li key={i}>
            <Link to={`/p/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query allPostsQuery {
    allContentfulPost {
      nodes {
        title
        subtitle
        slug
        createdAt(fromNow: true)
        tags {
          name
        }
      }
    }
  }
`
