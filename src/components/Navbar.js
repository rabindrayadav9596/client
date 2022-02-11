import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Homepagelogo from "../images/StateFarmLogo.jpg";


function Navbar() {

  return (
    <>
      <nav className='navbar'>
        {/*NavBar Logo */}
        <Link to='/' className='navbar-logo' >
        <img className="homepagelogo" src={Homepagelogo} alt="Logo...." />
        </Link>
       
        <ul className= 'nav-menu'>
           
           {/* NavBar Home */}
          <li className='nav-item'>
            <Link to='/' className='nav-links'> Home </Link>
          </li>
      
           {/* NavBar Scanner */}
          <li className='nav-item'>
            <Link to='/scanner' className='nav-links'  > Scanner </Link>
          </li>
        
        </ul>
         {/* NavBar Log In */}
        
        <Link to='/log-in' className='nav-links login' > Log In </Link>
          
      </nav>
    </>
  );
}

export default Navbar;
