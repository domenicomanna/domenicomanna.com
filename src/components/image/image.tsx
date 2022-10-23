import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

type Props = {
  fileName: string
}

const Image: FunctionComponent<Props> = ({ fileName }) => {
  const { allFile } = useStaticQuery<Queries.AllImagesQuery>(queryForAllImages)

  const imageEdge = allFile.edges.find(edge => {
    return edge.node.relativePath
      .toLowerCase()
      .includes(fileName.toLowerCase().trim())
  })

  const fluidObject = imageEdge?.node?.childImageSharp?.fluid
  if (!fluidObject) return null
  return imageEdge ? <Img fluid={fluidObject as FluidObject} /> : null
}

const queryForAllImages = graphql`
  query AllImages {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Image
