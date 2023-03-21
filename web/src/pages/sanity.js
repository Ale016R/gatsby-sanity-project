import React from "react"
import { graphql } from "gatsby"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { GatsbyImage } from "gatsby-plugin-image"

// Queried data gets passed as props
export default function IndexPage({ data }) {
  const books = data.allSanityBlogPost.nodes

  const sanityConfig = { projectId: "5jcf9wcq", dataset: "production" }
  const imageAssetId =
    "image-edc203db7fd1fbad1192ad73adcfcdac0019219a-1870x1250-jpg"
  const imageData = getGatsbyImageData(
    imageAssetId,
    { maxWidth: 100 },
    sanityConfig
  )
  return (
    <>
      <GatsbyImage image={imageData} />
      <div className="books-wrap">
        <div className="container">
          <h1 className="heading">Blog Posts</h1>
          <ul className="books">
            {books.map(book => (
              <li className="book-item" key={book.name}>
                <h2 className="title">{book.name}</h2>
                <p>{book.sponsor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

// Query data
export const query = graphql`
  query MyQuery {
    allSanityBlogPost {
      nodes {
        name
        sponsor {
          name
        }
      }
    }
  }
`
