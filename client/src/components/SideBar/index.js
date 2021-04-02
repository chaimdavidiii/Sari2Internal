import React from "react";
import AuthNav from "../auth-nav";
import SignupLink from "../signup-link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='/'>
            Message Board
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/order'>
            Orders
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/recipes'>
            Recipes
          </SidebarLink>
          <SidebarLink>
            <SignupLink />
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>
            <AuthNav />
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
