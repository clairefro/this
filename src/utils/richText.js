// https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/
import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      // documentToReactComponents method requires explicit use of default local in file and title
      const src = node.data.target.fields.file["en-US"].url
      const title = node.data.target.fields.title["en-US"]
      return (
        <div className="post-body-img">
          <img src={src} alt={title} />
        </div>
      )
    },
    // don't render node this node type
    "asset-hyperlink": node => null,
  },
}

export { richTextOptions }
