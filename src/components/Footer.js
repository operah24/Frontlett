import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>© 2021 Frontlett. All rights reserved.</p>
        <p>
          <Link to="/ads">About Ads</Link>
          <Link to="/ads">Dont Sell My Personal Information</Link>
          <Link to="/ads">Cookie Perferences</Link>
          <Link to="/ads">Privacy and legal policy</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
