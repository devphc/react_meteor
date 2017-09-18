import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

import IndexForm from './IndexForm'

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel} from 'react-bootstrap'

import './IndexPage.css'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/load"><NavItem eventKey={1}>Load</NavItem></LinkContainer>
              <NavItem eventKey={2} href='#'>Link</NavItem>
              <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href='#'>Link Right</NavItem>
              <NavItem eventKey={2} href='#'>Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img width='100%' height='500' alt='900x500'
                 src='http://devphc.oss-cn-beijing.aliyuncs.com/642066_201607280816200794431489.jpg'/>
          </Carousel.Item>
          <Carousel.Item>
            <img width='100%' height='500' alt='900x500'
                 src='http://devphc.oss-cn-beijing.aliyuncs.com/642066_201607280816200794431489.jpg'/>
          </Carousel.Item>
        </Carousel>
        {/*<IndexForm/>*/}
      </div>
    )
  }
}

export default IndexPage
