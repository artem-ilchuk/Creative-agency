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
            <svg
              className={s.line1}
              viewBox="0 0 428 490"
              preserveAspectRatio="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M690.006 49.3454C686.324 53.7937 634.208 -13.3878 551.848 6.79101C469.489 26.9697 497.516 74.5847 446.857 100.796C396.198 127.008 355.852 88.256 309.839 112.278C263.827 136.3 253.048 196.113 207.452 215.213C161.857 234.313 132.271 185.652 82.7053 211.895C33.1398 238.138 55.8045 274.584 -3.96783 304.562C-63.7402 334.54 -98.1793 293.758 -155.547 336.162C-212.914 378.566 -209.082 489.638 -209.082 489.638"
                strokeWidth="6"
                fill="none"
              />
            </svg>
            <svg
              className={s.line2}
              viewBox="0 0 428 490"
              preserveAspectRatio="none"
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M670.006 49.3454C666.324 53.7937 614.208 -13.3878 531.848 6.79101C449.489 26.9697 477.516 74.5847 426.857 100.796C376.198 127.008 335.852 88.256 289.839 112.278C243.827 136.3 233.048 196.113 187.452 215.213C141.857 234.313 112.271 185.652 62.7053 211.895C13.1398 238.138 35.8045 274.584 -23.9678 304.562C-83.7402 334.54 -118.179 293.758 -175.547 336.162C-232.914 378.566 -229.082 489.638 -229.082 489.638"
                strokeWidth="6"
                fill="none"
              />
            </svg>
          </div>
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
  );
};

export default Mobmenu;
