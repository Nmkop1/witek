import React from "react"
// import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../dodatki/styles/globalStyles"

// nawigacja widoczna na każdej stronie

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
    </>
  )
}
export default Layout
