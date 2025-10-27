import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import useMedia from "../../hooks/UseMedia";
import { NavLink } from "react-router-dom";
import { Toggle } from "../ToggleSwitch/ToggleSwitch";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const { isMobile } = useMedia();

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.head}>
          <div className={s.logo}>
            <svg className={s.iconLogo} width="20" height="20">
              <use href="/sprite.svg#icon-Logo" />
            </svg>
          </div>

          {isMobile ? (
            <div>
              <Toggle />
              <div className={s.menu}>
                <svg className={s.iconMenu} width="40" height="40">
                  <use href="/sprite.svg#icon-Menu" />
                </svg>
              </div>
            </div>
          ) : (
            <nav className={s.nav}>
              <NavLink className={buildLinkClass} to="/">
                Home
              </NavLink>
              <NavLink className={buildLinkClass} to="/works">
                Works
              </NavLink>
              <NavLink className={buildLinkClass} to="/about">
                About
              </NavLink>
              <Toggle />
              <NavLink className={buildLinkClass} to="/contact">
                Contact us
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
