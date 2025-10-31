import { useDispatch } from "react-redux";
import s from "./Mobmenu.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { closeMobileModal } from "../../redux/modal/modalSlice";
import { Toggle } from "../ToggleSwitch/ToggleSwitch";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Mobmenu = () => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(closeMobileModal());

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleLinkClick = () => {
    closeModal();
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div className="container">
          <div className={s.head}>
            <NavLink to="/" className={s.logo} aria-label="Go to home page">
              <svg className={s.iconLogo}>
                <use href="./sprite.svg#icon-Logo" />
              </svg>
            </NavLink>
            <div className={s.modalControls}>
              <Toggle />
              <button
                className={s.close}
                onClick={closeModal}
                aria-label="Close menu"
              >
                <svg className={s.iconCancel} width="40" height="40">
                  <use href="./sprite.svg#icon-Cancel" />
                </svg>
              </button>
            </div>
          </div>
          <div className={s.Line}></div>
          <nav className={s.nav}>
            <div className={s.links}>
              <NavLink
                className={buildLinkClass}
                to="/"
                aria-label="Go to home page"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
              <NavLink
                className={buildLinkClass}
                to="/works"
                aria-label="Go to works page"
                onClick={handleLinkClick}
              >
                Works
              </NavLink>
              <NavLink
                className={buildLinkClass}
                to="/about"
                aria-label="Go to about page"
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </div>
            <div className={s.line1}></div>
            <div className={s.line2}></div>
            <NavLink
              className={s.contact}
              to="/contact"
              aria-label="Go to contact page"
              onClick={handleLinkClick}
            >
              Contact us
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Mobmenu;
