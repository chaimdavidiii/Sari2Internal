import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  RecNav,
  RecNavbarContainer,
  RecNavLogo,
  RecMobileIcon,
  RecNavMenu,
  RecNavItem,
  RecNavLinks,
  RecNavBtn,
  RecNavBtnLink,
  RecNavbarSup,
  RecNavLinkZ,
} from "./RecipesNavElements";

function RecipesNav({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  // when past particular point in page, function will trigger
  const changeNav = () => {
    // target actual window
    if (window.scrollY >= 800) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <RecNav scrollNav={scrollNav}>
          <RecNavbarContainer>
            <RecNavLogo to='/' onClick={toggleHome}>
              Sari<RecNavbarSup>2</RecNavbarSup>
            </RecNavLogo>
            <RecMobileIcon onClick={toggle}>
              <FaBars />
            </RecMobileIcon>
            <RecNavMenu>
              <RecNavItem>
                <RecNavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Message Board
                </RecNavLinks>
              </RecNavItem>
              <RecNavItem>
                <RecNavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Orders
                </RecNavLinks>
              </RecNavItem>
              <RecNavItem>
                <RecNavLinkZ to='/recipes'>Recipes</RecNavLinkZ>
              </RecNavItem>
              <RecNavItem>
                <RecNavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </RecNavLinks>
              </RecNavItem>
            </RecNavMenu>
            <RecNavBtn>
              {/* Username when logged in */}
              <RecNavBtnLink
                to='/signin'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Sign In
              </RecNavBtnLink>
            </RecNavBtn>
          </RecNavbarContainer>
        </RecNav>
      </IconContext.Provider>
    </>
  );
}

export default RecipesNav;
