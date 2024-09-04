import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// import Home from './Home';

function Nav() {
  const [showlist,Setshowlist]=useState(false);
  const handleSvgClick = () => {
    Setshowlist(!showlist);
  }
  return (
    <div id="law">
      <ul>
        <li id='ab'><Link to="/">Home</Link></li>
        <li id='cd'><Link to="/about">About</Link></li>
        <li id='ef'><Link to="/services">Services</Link></li>
        <li id='gh'><Link to="/contact">Contact</Link></li>
        <li id='ij'><Link to="/login">Login</Link></li>      
      </ul>
      {/* <Home /> */}
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" onClick={handleSvgClick }>
<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
</svg>
{showlist && (
        <ul className="list">
          <li>Mobiles</li><br></br><br></br>
          <li>Laptops</li><br></br><br></br>
          <li>Headphones</li><br></br><br></br>
          <li>watches</li><br></br><br></br>
          <li>Acessories</li><br></br><br></br>
          <li>Stationary</li><br></br><br></br>
          <li>Shirts</li><br></br><br></br>
          <li>Jewells</li><br></br><br></br>
          <li>Wears</li><br></br><br></br>
          <li>Led Tv</li><br></br><br></br>
          <li>Sport items</li><br></br><br></br>
          <li>Toys</li><br></br><br></br>
          <li>Keyboard</li><br></br><br></br>
          <li>Mouse</li><br></br><br></br>
          <li>Bikes</li><br></br><br></br>
          <li>Shoes</li><br></br><br></br>
          <li>Fan</li><br></br><br></br>
          <li>Powerbank</li><br></br><br></br>
          <li>Spareparts</li><br></br><br></br>

        </ul>
      )}
    </div>
  );
}

export default Nav;
