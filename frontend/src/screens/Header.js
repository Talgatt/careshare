import React from "react";
import {Link}  from "react-router-dom";

function Header(){
    return (    
    <header className="header-footer-at-registration">
    <h1 id="header-title"><Link to="/">CareShare</Link></h1>
    <div>
      
    </div>
    <div>
      <Link to="/profile">Profile</Link>
      <Link to="/family-search">Search Family</Link>
      <Link to="/register">Register Page</Link>
    </div>
  </header>)

}

export default Header;