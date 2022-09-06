import React, { useState, useRef } from "react";
import logo from "images/virgin_logo.png";
import Arrow from "./Arrow";
import Arrow2 from "./Arrow2";
const Nav = () => {
  const menuListRef = useRef([]);
  const aboutUsRef = useRef([]);
  const ourFoundationRef = useRef([]);
  const bransonFamilyRef = useRef([]);
  const virginRedRef = useRef([]);
  const mobileMenuRef = useRef();
  const menuHandler = () => {
    mobileMenuRef.current.classList.toggle("mobileMenu_active");
  };
  const [currentMenu, setCurrentMenu] = useState("");
  const mouseEnterHandler = (menu) => {
    setCurrentMenu(menu);
    // menuListRef.current.map((el) => {
    //   el.classList.replace("select", "unselect");
    // });
    // menuListRef.current[idx].classList.replace("unselect", "select");
  };
  const selectMenuHandler = (ref, idx) => {
    ref.map((el) => {
      el.classList.replace("select", "unselect");
    });
    ref[idx].classList.replace("unselect", "select");
  };
  return (
    <div className='nav' id='nav'>
      <div className='nav_container' ref={mobileMenuRef}>
        <div className='navbar'>
          <div className='nav_mobileMenu' onClick={menuHandler}>
            <div className='mobileMenu_box'>
              <div className='mobileMenu_icon'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
              <div className='text text_menu'>menu</div>
              <div className='text text_close'>close</div>
            </div>
            <div className='mobileMenu_box'></div>
          </div>
          <div className='nav_title'>
            <img src={logo} alt='Virgin' />
          </div>
        </div>

        <div className='mobileMenu_content'>
          <div className='content_box'>
            <ul className='nav_items'>
              <li
                id='home'
                className='unselect'
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(menuListRef.current, 0);
                }}
                ref={(el) => (menuListRef.current[0] = el)}
              >
                home
                <Arrow />
              </li>
              <li
                id='companies'
                className='unselect'
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(menuListRef.current, 1);
                }}
                ref={(el) => (menuListRef.current[1] = el)}
              >
                companies
                <Arrow />
              </li>
              <li
                id='aboutUs'
                className='unselect'
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(menuListRef.current, 2);
                }}
                ref={(el) => (menuListRef.current[2] = el)}
              >
                about us
                <Arrow />
              </li>
              <li
                id='ourFoundation'
                className='unselect'
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(menuListRef.current, 3);
                }}
                ref={(el) => (menuListRef.current[3] = el)}
              >
                our foundation
                <Arrow />
              </li>
              <li
                id='bransonFamily'
                className='unselect'
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(menuListRef.current, 4);
                }}
                ref={(el) => (menuListRef.current[4] = el)}
              >
                branson family
                <Arrow />
              </li>
              <li
                id='virginRed'
                className='unselect'
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(menuListRef.current, 5);
                }}
                ref={(el) => (menuListRef.current[5] = el)}
              >
                virgin red
                <Arrow />
              </li>
            </ul>
          </div>
          <div className='content_box'>
            {currentMenu === "aboutUs" ? (
              <ul className='aboutUs_items'>
                <li
                  className='unselect'
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 0)}
                  ref={(el) => (aboutUsRef.current[0] = el)}
                >
                  about us
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 1)}
                  ref={(el) => (aboutUsRef.current[1] = el)}
                >
                  our story
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 2)}
                  ref={(el) => (aboutUsRef.current[2] = el)}
                >
                  timeline
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 3)}
                  ref={(el) => (aboutUsRef.current[3] = el)}
                >
                  working at virgin
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 4)}
                  ref={(el) => (aboutUsRef.current[4] = el)}
                >
                  latest
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 5)}
                  ref={(el) => (aboutUsRef.current[5] = el)}
                >
                  virgin group
                  <Arrow />
                </li>
                <ul className='virginGroup_items'>
                  <li
                    className='unselect'
                    onMouseEnter={(e) =>
                      selectMenuHandler(aboutUsRef.current, 6)
                    }
                    ref={(el) => (aboutUsRef.current[6] = el)}
                  >
                    overview
                    <Arrow />
                  </li>
                  <li
                    className='unselect'
                    onMouseEnter={(e) =>
                      selectMenuHandler(aboutUsRef.current, 7)
                    }
                    ref={(el) => (aboutUsRef.current[7] = el)}
                  >
                    seniorteam
                    <Arrow />
                  </li>
                  <li
                    className='unselect'
                    onMouseEnter={(e) =>
                      selectMenuHandler(aboutUsRef.current, 8)
                    }
                    ref={(el) => (aboutUsRef.current[8] = el)}
                  >
                    news
                    <Arrow />
                  </li>
                </ul>
              </ul>
            ) : currentMenu === "ourFoundation" ? (
              <ul className='ourFoundation_items'>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(ourFoundationRef.current, 0)
                  }
                  ref={(el) => (ourFoundationRef.current[0] = el)}
                >
                  our foundation
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(ourFoundationRef.current, 1)
                  }
                  ref={(el) => (ourFoundationRef.current[1] = el)}
                >
                  latest
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(ourFoundationRef.current, 2)
                  }
                  ref={(el) => (ourFoundationRef.current[2] = el)}
                >
                  virgin unite website
                  <Arrow />
                </li>
              </ul>
            ) : currentMenu === "bransonFamily" ? (
              <ul className='bransonFamily_items'>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 0)
                  }
                  ref={(el) => (bransonFamilyRef.current[0] = el)}
                >
                  branson family
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 1)
                  }
                  ref={(el) => (bransonFamilyRef.current[1] = el)}
                >
                  richard branson's blog
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 2)
                  }
                  ref={(el) => (bransonFamilyRef.current[2] = el)}
                >
                  holly branson's blog
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 3)
                  }
                  ref={(el) => (bransonFamilyRef.current[3] = el)}
                >
                  books
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 4)
                  }
                  ref={(el) => (bransonFamilyRef.current[4] = el)}
                >
                  book a branson
                  <Arrow />
                </li>
              </ul>
            ) : currentMenu === "virginRed" ? (
              <ul className='virginRed_items'>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 0)
                  }
                  ref={(el) => (virginRedRef.current[0] = el)}
                >
                  home
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 1)
                  }
                  ref={(el) => (virginRedRef.current[1] = el)}
                >
                  spend
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 2)
                  }
                  ref={(el) => (virginRedRef.current[2] = el)}
                >
                  earn
                  <Arrow />
                </li>
                <li
                  className='unselect'
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 3)
                  }
                  ref={(el) => (virginRedRef.current[3] = el)}
                >
                  my rewards
                  <Arrow />
                </li>
              </ul>
            ) : null}
          </div>
          <div className='content_box'>
            {currentMenu === "home" ? (
              <div className='mobileMenu_image'>
                <div className='blank'></div>

                <img
                  src='https://www.virgin.com/img/topnavbar/menu/open-menu-home-and-default.jpg?fl=progressive&q=80'
                  alt=''
                />
              </div>
            ) : currentMenu === "companies" ? (
              <div className='mobileMenu_image'>
                <div className='blank'></div>
                <img
                  src='https://www.virgin.com/img/topnavbar/menu/open-menu-companies.jpg?fl=progressive&q=80'
                  alt=''
                />
              </div>
            ) : currentMenu === "ourFoundation" ? (
              <div className='mobileMenu_image'>
                <div className='blank'></div>
                <img
                  src='https://www.virgin.com/img/topnavbar/menu/open-menu-richard-unite.jpg?fl=progressive&q=80'
                  alt=''
                />
              </div>
            ) : currentMenu === "bransonFamily" ? (
              <div className='mobileMenu_image'>
                <div className='blank'></div>
                <img
                  src='https://www.virgin.com/img/topnavbar/menu/open-menu-branson-family.png?fl=progressive&q=80'
                  alt=''
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className='navbar'>
          <ul className='nav_items'>
            <li>COMPANIES</li>
            <li>
              <div>
                ABOUT US
                <Arrow2 />
              </div>
              <ul>
                <li>our story</li>
                <li>timeline</li>
                <li>working at virgin</li>
                <li>latest</li>
                <li>virgin group</li>
              </ul>
            </li>
            <li>
              <div>
                OUR FOUNDATION
                <Arrow2 />
              </div>
              <ul>
                <li>latest</li>
                <li>virgin unite website</li>
              </ul>
            </li>
            <li>
              <div>
                BRANSON FAMILY
                <Arrow2 />
              </div>
              <ul>
                <li>richard branson's blog</li>
                <li>holly branson's blog</li>
                <li>books</li>
                <li>book a branson</li>
              </ul>
            </li>
            <li>
              <div>
                VIRGIN RED
                <Arrow2 />
              </div>
              <ul>
                <li>spend</li>
                <li>earn</li>
                <li>my rewards</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
