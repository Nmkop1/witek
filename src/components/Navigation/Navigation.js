import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Lato";
  position: absolute;
  top: 20px;
  left: 30px;
`
const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  a {
    text-decoration: none;
    color: #6ec21a;
  }
`
const NavigationUl = styled.ul`
  list-style: none;
  display: flex;
`
const NavigationLi = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    color: green;
  }
`
const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/ ">START</Link>
    </Logo>
    <NavigationUl>
      <NavigationLi>
        <AniLink fade to="/jeden">
          jeden
        </AniLink>
      </NavigationLi>
      <NavigationLi>
        <AniLink fade to="/dwa">
          dwa
        </AniLink>
      </NavigationLi>
      <NavigationLi>
        <AniLink fade to="/trzy">
          trzy
        </AniLink>
      </NavigationLi>
      <NavigationLi>
        <Link to="/cztery">cztery</Link>
      </NavigationLi>
    </NavigationUl>
  </NavigationWrapper>
)

export default Navigation
