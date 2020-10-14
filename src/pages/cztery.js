import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"
import styled from "styled-components"

const Wrap = styled.div`
  width: 100%;
  height: calc(3 * 100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Anim = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
  margin-bottom: 20vh;
`
export default function Home({ data }) {
  return (
    <Wrap>
      <Anim data-sal="fade" data-sal-delay="500" data-sal-easing="ease"></Anim>
      <Anim
        data-sal="slide-left"
        data-sal-delay="500"
        data-sal-duration="500"
        data-sal-easing="Easy-out-back"
      ></Anim>
      <Anim
        data-sal="flip-down"
        data-sal-delay="500"
        data-sal-easing="ease"
      ></Anim>
      <Anim
        data-sal="zoom-in"
        data-sal-duration="2000"
        data-sal-delay="500"
        data-sal-easing="ease-out-bounce"
      ></Anim>
    </Wrap>
  )
}

export const query = graphql`
  {
    file(name: { eq: "foto5" }) {
      childImageSharp {
        fluid(maxWidth: 1200, jpegQuality: 100) {
          ...GatsbyImageSharpFluid_noBase64
          # ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
