import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.png'

class Header extends Component {

  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    if(location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        this.wrapper.animate([
          { height: "20vh" },
          { height: "60vh" }
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(.75,0,.25,1)",
          iterations: 1
        })
      } else {
        this.wrapper.animate([
          { height: "60vh" },
          { height: "20vh" }
        ], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(.75,0,.25,1)",
          iterations: 1
        })
      }
    }
  }
  

  render() {
    const { data, location } = this.props
    return (
      <HeaderWrapper 
        isHome={location.pathname === '/'}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt='Jungle Minds Blog' />
          </Link>
        </h1>
        <MainNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </MainNav>
      </HeaderContainer>
      <Img
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3
        }}
        sizes={data.background.sizes}
        />
    </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  position: relative;
  height: ${({isHome}) => (isHome ? '60vh' : '20vh')}
  overflow: hidden;
  background: #03344a;
  margin-bottom: 1.45rem;

  h1 {
    img {
      height: 40px;
    }
  }
`

const HeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      
      a {
        text-decoration: none;
        color: #FFF;
        &:hover {
          border-bottom: 3px solid #03344a;
        }
      }
    }
  }
`

export default Header