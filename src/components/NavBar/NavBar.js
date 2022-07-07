import React from "react";
import { NavLink } from "react-router-dom";
//styles
import { Wrapper } from "./NavBar.styles";

const NavBar = () => (
  <Wrapper>
    <ul>
      <li>
        <NavLink to="LiveStatus">Live Status</NavLink>
      </li>
      <li>
        <NavLink to="BetweenStations">Trains Between Stations</NavLink>
      </li>
    </ul>
  </Wrapper>
);

export default NavBar;
