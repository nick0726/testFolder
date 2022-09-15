import React, { useRef } from "react";
import "./css/Nav.css";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";
const Nav = () => {
  const mobileMenuRef = useRef();
  const menuIconRef = useRef();
  const menuFoldRef = useRef();
  const handleClick = (e) => {
    mobileMenuRef.current.classList.toggle("mobileMenu-active");
    menuIconRef.current.classList.toggle("menuIcon-active");
    menuFoldRef.current.classList.toggle("menuFoldRef-active");
  };
  const menuFold = (e) => {
    menuFoldRef.current.classList.toggle("menuFoldRef-active");
  };
  return (
    <>
      <div id='Nav'>
        <div className='nav-container'>
          <div className='nav-title'>TITLE</div>
          <div
            className='nav-menu'
            ref={menuIconRef}
            onClick={(e) => handleClick(e)}
          >
            <div id='MobileMenuIcon'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </div>
        </div>

        <div className='nav-mobileMenu' ref={mobileMenuRef}>
          <div id='MobileMenu'>
            <div
              onClick={(e) => menuFold(e)}
              // onClick={(e) => handleClick(e)}
            >
              LOGIN
              <div className='nav-menuFoldRef' ref={menuFoldRef}>
                <div>Sub1</div>
                <div>Sub2</div>
                <div>Sub3</div>
                <div>Sub4</div>
                <div>Sub5</div>
              </div>
            </div>
            <div>SIGNUP</div>
            <div>ABOUT US</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
