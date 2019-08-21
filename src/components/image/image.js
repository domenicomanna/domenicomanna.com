import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default ({fileName}) => {
  const {allFile} = useStaticQuery(queryForAllImages);

  const imageEdge = allFile.edges.find(edge => {
    return edge.node.relativePath.toLowerCase().includes(fileName.toLowerCase().trim())
  })

  return imageEdge ? <Img fluid = {imageEdge.node.childImageSharp.fluid}/> : null;
}

const queryForAllImages = graphql`query AllImages {
  allFile(filter: {sourceInstanceName: {eq: "images"}}){
    edges{
      node{
        relativePath
        childImageSharp{
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`