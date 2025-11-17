import s from "./OurPartners.module.css";
import { companies } from "../../../data/partnersData";

const OurPartners = () => {
  return (
    <section className={s.ourPartners}>
      <h2 className={s.title}>Some of Our Great Customers</h2>
      <p className={s.text}>Some of the companies we have worked with</p>
      <ul className={s.partnersList}>
        {companies.map(({ id, alt, width, height }) => (
          <li className={s.partnersItem}>
            <svg
              key={id}
              className={s.logo}
              aria-label={alt}
              width={width}
              height={height}
            >
              <use href={`/sprite.svg#${id}`} />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurPartners;
