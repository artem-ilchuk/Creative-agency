import s from "./Header.module.css";
import clsx from "clsx";
import useMedia from "../../hooks/UseMedia";
import { NavLink } from "react-router-dom";
import { Toggle } from "../ToggleSwitch/ToggleSwitch";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMobileModalOpen } from "../../redux/modal/modalSelectors";
import { toggleMobileModal } from "../../redux/modal/modalSlice";
import Mobmenu from "../MobMenu/Mobmenu";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const { isMobile } = useMedia();
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(selectIsMobileModalOpen);

  const handleMobileOpenModal = () => {
    dispatch(toggleMobileModal());
  };
  return (
    <header className={s.header}>
      <div className={s.head}>
        <NavLink to="/" className={s.logo} aria-label="Go to home page">
          <svg className={s.iconLogo}>
            <use href="./sprite.svg#icon-Logo" />
          </svg>
        </NavLink>

        {isMobile ? (
          <div className={s.mobileControls}>
            <Toggle />
            <button
              className={s.iconMenu}
              onClick={handleMobileOpenModal}
              aria-label="Menu"
              aria-expanded={isMobileModalOpen}
              aria-controls="mobile-menu"
            >
              <svg width="40" height="40">
                <use href="/sprite.svg#icon-Menu" />
              </svg>
            </button>
          </div>
        ) : (
          <nav className={s.nav}>
            <div className={s.links}>
              <NavLink
                className={buildLinkClass}
                to="/"
                aria-label="Go to home page"
              >
                Home
              </NavLink>
              <NavLink
                className={buildLinkClass}
                to="/works"
                aria-label="Go to works page"
              >
                Works
              </NavLink>
              <NavLink
                className={buildLinkClass}
                to="/about"
                aria-label="Go to about page"
              >
                About
              </NavLink>
            </div>
            <div className={s.action}>
              <Toggle />
              <NavLink
                className={s.contact}
                to="/contact"
                aria-label="Go to contact page"
              >
                Contact us
              </NavLink>
            </div>
          </nav>
        )}
      </div>

      {isMobile && isMobileModalOpen && <Mobmenu />}
    </header>
  );
};

export default Header;
