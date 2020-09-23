import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "../components/Button/Button"
import Image from "gatsby-image"

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 20px);
  display: flex;
`
const TextWrapper = styled.div`
  width: 50%;
  height: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 2%;

  h1 {
    font-size: 105px;
    margin: 0;
    width: 60%;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 40%;
  }
`

const ImageWrapper = styled(Image)`
  width: 50%;
  height: 100%;
  object-fit: cover;
`
export default function Home({ data }) {
  return (
    <>
      <ContentWrapper>
        <TextWrapper>
          <h1>Hello DWA</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of
          </p>
          <Button>estimate project</Button>
        </TextWrapper>

        <ImageWrapper
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
      </ContentWrapper>
    </>
  )
}
// gatsby develop

export const query = graphql`
  {
    file(name: { eq: "foto3" }) {
      childImageSharp {
        fluid(maxWidth: 800, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_noBase64
          # ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
