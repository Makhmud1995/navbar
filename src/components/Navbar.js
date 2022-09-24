
import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import { Button} from "./Button"
import {FaBars,FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';
import  './Navbar.css'
function Navbar(){
    const [click, setClick] =useState(false);
    const [button] = useState(true);
    const handleClick = () =>setClick(!click)
  return (
   <>
   <nav className="navbar">

    <div className="navbar-container container">
        <Link to="/" className='navbar-logo'>
            <MdFingerprint className="navbar-icon"></MdFingerprint>
            MaxCode</Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes/>: <FaBars/>}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/services" className="nav-links">Services</Link>
            </li>
            <li className='nav-item'>
                <Link to="/product" className="nav-links">Product</Link>
            </li>
            <li className='nav-btn'>{button ? (
                <Link to="/sign-up" className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link> ):(
                      <Link to="/sign-up" className='btn-link'>
                      <Button buttonStyle='btn--outline' buttonSize="btn--mobile">SIGN UP</Button>
                  </Link>
            )}
            </li>
        </ul>
    </div>
   </nav>
   </>
  );
}
export default Navbar;
