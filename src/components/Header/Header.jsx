import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
  useTheme,
} from "../../context/ThemeProvider";
import Favorite from "../Favorite/Favorite";
import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import "./Header.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const [toggleClass, setToggleClass] = useState(false);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgDroid);
        break;
      case THEME_NEITRAL:
        setIcon(imgSpaceStation);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  }, [isTheme]);

  const handleSetClassActive = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div className="container">
      <img className="logo" src={icon} alt="Star Wars" />
      <ul className={`list__container ${toggleClass && "active"}`}>
        <li>
          <NavLink to="/" onClick={handleSetClassActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people?page=1" onClick={handleSetClassActive}>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" onClick={handleSetClassActive}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/fail" onClick={handleSetClassActive}>
            Fail
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" onClick={handleSetClassActive}>
            Not Found
          </NavLink>
        </li>
      </ul>
      <div
        className={`burger__menu ${toggleClass && "active"}`}
        onClick={handleSetClassActive}
      >
        <span></span>
      </div>
      <Favorite />
    </div>
  );
};

export default Header;
