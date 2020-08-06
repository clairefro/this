import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.contentfulPost
  console.log(post)
  const bodyHTML = post.body.childMarkdownRemark.html
  return (
    <div className="container mx-auto mt-6 max-w-screen-sm">
      <h1 className="mb-2 text-3xl">{post.title}</h1>
      <div className="mb-4">{post.createdAt}</div>
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }}></div>
    </div>
  )
}

export const query = graphql`
  query singlePost($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      body {
        childMarkdownRemark {
          html
        }
      }
      createdAt(fromNow: true)
      subtitle
      title
      tags {
        name
      }
    }
  }
`
