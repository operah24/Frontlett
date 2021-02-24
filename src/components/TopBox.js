import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function TopBox() {
  return (
    <div className="topbox">
      <div className="topbox-intro ">
        <h3>
          Looking to Penetrate the Market with Little Cost to Pay for Employee
          Resources?
        </h3>
      </div>
      <div className="topbox-para">
        <p>
          Frontlett effectively connects those who are highly skilled with those
          who need the services of a skilled workforce for a quarter of the
          price.
        </p>
      </div>
      <div className="topbox-button">
        <Link to="/register">
          <Button name="Register" className="topbox-register" />
        </Link>
        <Link to="/login">
          {' '}
          <Button name="Login" className="topbox-login" />
        </Link>
      </div>
    </div>
  );
}

export default TopBox;
