import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import AuthNav from "../auth-nav";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavbarSup,
  NavLinkZ,
} from "./NavBarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const location = useLocation();

  // when past particular point in page, function will trigger
  const changeNav = () => {
    // target actual window
    if (window.scrollY >= 800) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const navRecipe = () => {
    setScrollNav(true);
    window.removeEventListener("scroll", changeNav);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", changeNav);
      console.log(location.pathname);
    } else {
      window.onload = navRecipe();
      console.log(location.pathname);
    }
    return () => {
      navRecipe();
    };
  }, [location.pathname]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Sari<NavbarSup>2</NavbarSup>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Message Board
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinkZ
                  to='/order'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Orders
                </NavLinkZ>
              </NavItem>
              <NavItem>
                <NavLinkZ to='/recipes'>Recipes</NavLinkZ>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {/* Username when logged in */}
              <AuthNav />
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
