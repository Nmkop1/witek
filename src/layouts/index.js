import React from "react"
import { ThemeProvider } from "styled-components"
import Navbar from "../components/Navigation/Navbar"
import GlobalStyle from "../dodatki/styles/globalStyles"

// nawigacja widoczna na każdej stronie
const theme = {
  colors: {
    jeden: "#6ec21a",
    dwa: "#2B8F16",
    trzy: "#449F13",
  },
  size: {
    mobile: `(min-width: ${576}px)`,
    tablet: `(min-width: ${768}px)`,
    desktop: `(min-width: ${992}px)`,
    landscape: `(min-width: ${812}px)`,
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />

      {children}
    </ThemeProvider>
  )
}

export default Layout
