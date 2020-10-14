import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Wrapper from "../components/Wrapper"
import BackgroundImage from "gatsby-background-image"

const MultiBackground = ({ className }) => {
  const { pierwszeTlo, drugieTlo } = useStaticQuery(
    graphql`
      query {
        pierwszeTlo: file(relativePath: { eq: "zboze.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # drugieTlo: file(relativePath: { eq: "pomidory.jpg" }) {
        #   childImageSharp {
        #     fluid(quality: 100, maxWidth: 420) {
        #       ...GatsbyImageSharpFluid_withWebp
        #     }
        #   }
        # }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    pierwszeTlo.childImageSharp.fluid,
    `linear-gradient(rgba(120, 150, 150, 0.73), rgba(4, 243, 67, 0.73))`,
    // drugieTlo.childImageSharp.fluid,
  ].reverse()

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
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
}

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  display: flex;
  height: calc(100vh - 8vh);
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  /* background-repeat: no-repeat, no-repeat, repeat; */
  background-position: center 155%, center, center;
`

export default StyledMultiBackground
