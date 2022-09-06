import React, { useRef } from "react";
import "./css/Nav.css";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";
const Nav = () => {
  const mobileMenuRef = useRef();
  const menuIconRef = useRef();
  const handleClick = (e) => {
    mobileMenuRef.current.classList.toggle("mobileMenu-active");
    menuIconRef.current.classList.toggle("menuIcon-active");
  };
  return (
    <div id='Nav'>
      <div className='nav-container'>
        <div className='nav-title'>TITLE</div>
        <div
          className='nav-menu'
          ref={menuIconRef}
          onClick={(e) => handleClick(e)}
        >
          <MobileMenuIcon />
        </div>
      </div>

      <div className='nav-mobileMenu' ref={mobileMenuRef}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Nav;
