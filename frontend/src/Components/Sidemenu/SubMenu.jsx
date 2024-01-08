import React from "react";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 60px;
    justify-content: space-between;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      background: #101650;
      border-left: 4px solid #101650;
      cursor: pointer;
    }
  `;
  const SidebarLable = styled.span`
    margin-left: 16px;
  `;
  const DropdownLink = styled(Link)`
    background: #101650;
    height: 60px;
    padding: left;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 15px;

    &:hover {
      background: #474b71;
      cursor: pointer;
    }
  `;
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLable>{item.title}</SidebarLable>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLable>{item.title}</SidebarLable>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
