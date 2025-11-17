import s from "./OurPartners.module.css";
import { companies } from "../../../data/partnersData";

const OurPartners = () => {
  const firstRow = companies.slice(0, 5);
  const secondRow = companies.slice(5);

  return (
    <section className={s.ourPartners}>
      <h2 className={s.title}>Some of Our Great Customers</h2>
      <p className={s.text}>Some of the companies we have worked with</p>
      <ul className={`${s.partnersList} ${s.partnersRow1}`}>
        {firstRow.map(({ id, alt, width, height }) => (
          <li key={id}>
            <svg
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

      <ul className={`${s.partnersList} ${s.partnersRow2}`}>
        {secondRow.map(({ id, alt, width, height }) => (
          <li key={id}>
            <svg
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
