import s from "./BenefitsList.module.css";
import { GiCheckMark } from "react-icons/gi";

const BenefitsList = ({ text }) => {
  return (
    <div className={s.benefitsDescription}>
      <div className={s.checkbox}>
        <GiCheckMark className={s.tick} />
      </div>
      <p className={s.benefitsText}>{text}</p>
    </div>
  );
};

export default BenefitsList;
