import s from "./ToggleSwitch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/uiSlice";

export const Toggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
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
