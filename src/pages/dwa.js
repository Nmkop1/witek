import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Wrapper from "../components/Wrapper"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "pomidory.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Wrapper
            h1={"Halo"}
            span={"START"}
            p={
              "While artists work from real to the abstract, architects must work from the abstract to the real"
            }
          />
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: calc(100vh - 8vh);
  display: flex;
  background-position: bottom center;
  /* background-repeat: repeat-y; */
  background-size: cover;
`

export default StyledBackgroundSection
