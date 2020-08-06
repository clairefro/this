import React from "react"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { richTextOptions } from "../utils/richText"
import { graphql } from "gatsby"

export default props => {
  console.log(props)
  const post = props.data.contentfulPost
  // const content = documentToReactComponents(post.body.json, richTextOptions)

  return (
    <div className="container mx-auto mt-6 max-w-screen-sm">
      <h1 className="mb-2 text-3xl">{post.title}</h1>
      <div className="mb-4">{post.createdAt}</div>
      <div>{post.body.body}</div>
    </div>
  )
}

export const query = graphql`
  query singlePost($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      body {
        body
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
