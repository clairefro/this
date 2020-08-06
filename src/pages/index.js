import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  const posts = data.allContentfulPost.nodes
  return (
    <div>
      <div>Hello world!</div>
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
