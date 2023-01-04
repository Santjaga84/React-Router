import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Nav = () => {
  return(
    <>
    <header>
    <nav className='nav' >
    <NavLink end to="/" >
      Count
    </NavLink>
      {/* <Link to='/'>Count</Link> */}
      <p></p>
      <Link to='/Info'>Info</Link>
    </nav>
    </header>
    <Outlet />
    </>
  );
};

export default Nav;