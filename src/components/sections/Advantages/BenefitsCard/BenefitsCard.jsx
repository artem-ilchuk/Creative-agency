import s from "./BenefitsCard.module.css";

const BenefitsCard = ({ title, text, color }) => {
  return (
    <div className={s.content}>
      <h3 className={s.title} style={{ color: color }}>
        {title}
      </h3>
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default BenefitsCard;
