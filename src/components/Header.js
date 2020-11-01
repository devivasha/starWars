import React from 'react';
import { Link } from 'react-router-dom';

const Header =()=>{
  return (
      <div className="ui secondary pointing menu">
          <Link to="/" className="item">
             Home
          </Link>
          <Link to="/planet" className="item">
              Planet Details
          </Link>
      </div>);
};
export default Header;