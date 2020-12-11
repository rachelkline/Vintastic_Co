import React, { useState, useEffect } from 'react';
// import { Button, Nav } from "react-bootstrap";
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
      <>
          <nav className='navbar'>
              <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                      Vintastic Co.
        </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                              Home
            </Link>
                      </li>
                      <li className='nav-item'>
                          <Link
                              to='/products'
                              className='nav-links'
                              onClick={closeMobileMenu}
                          >
                              Products
            </Link>
                      </li>
                      <li className='nav-item'>
                          {/* <Link
                              to='/about'
                              className='nav-links'
                              onClick={closeMobileMenu}
                          >
                              About
            </Link> */}
                      </li>
                      {/* <li className='nav-item'>
                          <Link
                              to='/login'
                              className='nav-links'
                              onClick={closeMobileMenu}
                          >
                              Login
            </Link>
                      </li> */}
                      {/* <li>
                          <Link
                              to='/sign-up'
                              className='nav-links-mobile'
                              onClick={closeMobileMenu}
                          >
                              Sign Up
            </Link>
                      </li> */}
                  </ul>
                  {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
              </div>
          </nav>
      </>
  );
}

export default Navbar;