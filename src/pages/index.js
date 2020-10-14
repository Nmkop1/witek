import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"

export default function Home({ data }) {
  return (
    <Wrapper
      h1={"Halo"}
      span={"START"}
      p={
        "While artists work from real to the abstract, architects must work from the abstract to the real"
      }
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

export const query = graphql`
  {
    file(name: { eq: "foto1" }) {
      childImageSharp {
        fluid(maxWidth: 800, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_noBase64
          # ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
