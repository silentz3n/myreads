import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavInput } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle={{ color: '#15cdfc' }}>
          <h1>My Reads</h1>
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to="/currentlyReading" activeStyle={{ color: '#15cdfc' }} >
            Currently Reading
          </NavLink>

          <NavLink to="/wantToRead" activeStyle={{ color: '#15cdfc' }} >
            Want to Read
          </NavLink>

          <NavLink to="/read" activeStyle={{ color: '#15cdfc' }} >
            Read
          </NavLink>
        </NavMenu>

        <NavInput activeStyle={{ color: '#15cdfc' }} />
      </Nav>
    </>
  )
}

export default Navbar;