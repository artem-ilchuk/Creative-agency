import s from "./ServiceCard.module.css";

const ServiceCard = ({
  id,
  title,
  text,
  color,
  shadow,
  iconWidth = 40,
  iconHeight = 40,
}) => {
  return (
    <div className={s.thumb}>
      <div
        className={s.round}
        style={{ backgroundColor: color, boxShadow: shadow }}
      >
        <svg className={s.svg} width={iconWidth} height={iconHeight}>
          <use href={`/sprite.svg#${id}`} />
        </svg>
      </div>
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
      </div>
      <div className={s.back}>
        <svg className={s.action} width="16" height="12">
          <use href="/sprite.svg#icon-Arrow-Short" />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;
