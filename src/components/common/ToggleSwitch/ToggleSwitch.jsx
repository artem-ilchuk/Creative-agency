import s from "./ToggleSwitch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/uiSlice";

export const Toggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";

    const overlay = document.createElement("div");
    overlay.classList.add("theme-transition");
    document.body.appendChild(overlay);

    setTimeout(() => {
      root.setAttribute("data-theme", newTheme);
      dispatch(setTheme(newTheme));
    }, 200);

    overlay.addEventListener("animationend", () => {
      overlay.remove();
    });
  };

  return (
    <div className={s.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={s.toggle}
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="check"></label>
    </div>
  );
};
