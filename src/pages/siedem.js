import React from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import styled from "styled-components"

const Divider = styled(Parallax.Layer)`
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`
const StyledBackgroundSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

class App extends React.Component {
  render() {
    // pages to ilość ekranów
    return (
      <StyledBackgroundSection>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <Parallax.Layer
            offset={1} // na którym ekranie ma być
            speed={1}
            style={{ backgroundColor: "#87BCDE" }}
          />

          <Parallax.Layer
            offset={1} // na którym ekranie ma być
            speed={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>
              Hello,
              <br /> I'm Emanuel Suriano.
            </h1>
            <h2>I like to build things</h2>
          </Parallax.Layer>
        </Parallax>
      </StyledBackgroundSection>
    )
  }
}

export default App
