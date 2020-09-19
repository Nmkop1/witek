import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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
    color: inherit;
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
    color: red;
  }
`
const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/ ">START</Link>
    </Logo>
    <NavigationUl>
      <NavigationLi>
        <Link to="/jeden">jeden</Link>
      </NavigationLi>
      <NavigationLi>
        <Link to="/dwa">dwa</Link>
      </NavigationLi>
      <NavigationLi>
        <Link to="/trzy">trzy</Link>
      </NavigationLi>
      <NavigationLi>
        <Link to="/cztery">cztery</Link>
      </NavigationLi>
    </NavigationUl>
  </NavigationWrapper>
)

export default Navigation
