import React  from 'react';
import { Outlet, Link } from "react-router-dom";
import SignOutButton from './layout/SignOutButton';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/userdetails">User Details</Link>
          </li>
          <li>
            <Link to="/postdetails">Post Details</Link>
          </li>
          <li>
            <Link to="/postlist">Post List</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <SignOutButton/>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;