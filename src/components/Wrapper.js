import React from "react"
import styled from "styled-components"

import Button from "./Button/Button"
import Image from "gatsby-image"

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 8vh);
  display: flex;
  flex-direction: column-reverse;

  @media ${props => props.theme.size.tablet} {
    flex-direction: row;
  }
`

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 3%;

  @media ${props => props.theme.size.tablet} {
    width: 50%;
    align-items: flex-end;
    text-align: right;
  }
  h1 {
    font-size: 60px;
    margin: 0;
    width: 100%;
    line-height: 0.9;

    @media ${props => props.theme.size.tablet} {
      font-size: 105px;
      width: 60%;
    }
  }
  span {
    display: block;
    color: ${props => props.theme.colors.dwa};
    font-size: 70px;
    @media ${props => props.theme.size.tablet} {
      font-size: 105px;
    }
  }
  p {
    margin: 5% 0;
    width: 80%;
    @media ${props => props.theme.size.tablet} {
      margin: 60px 0 40px;
      width: 40%;
    }
  }
`

const ImageWrapper = styled(Image)`
  width: 100%;
  height: 60%;
  margin-top: 3%;
  object-fit: cover;
  @media ${props => props.theme.size.tablet} {
    width: 50%;
    margin-top: 0;
    height: 100%;
  }
`
export default function Home({ h1, span, p, fluid }) {
  return (
    <ContentWrapper>
      <TextWrapper>
        <h1>
          {h1}
          <span>{span}</span>
        </h1>
        <p>{p}</p>
        <Button>estimate project</Button>
      </TextWrapper>
      {fluid ? (
        <ImageWrapper fluid={fluid} imgStyle={{ objectFit: "contain" }} />
      ) : null}
    </ContentWrapper>
  )
}
