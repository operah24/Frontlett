import React from 'react';
import Button from './Button';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <div className="logo-cont">
      <img
        src="https://res.cloudinary.com/ddh4kd4ab/image/upload/v1614114943/logo_2x_oetm2q.png"
        alt="logo"
      />
    </div>
    <ul className="link-cont">
      <li>
        <NavLink to="/login">
          <Button name="Login" className="login-button" />{' '}
        </NavLink>
      </li>
      <li>
        <NavLink to="/register">
          <Button name="Register" className="register-button" />{' '}
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
