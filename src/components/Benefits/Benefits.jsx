import s from "./Benefits.module.css";
import BenefitsCard from "../Cards/BenefitsCard/BenefitsCard";
import { benefitsData } from "../../data/benefitsData";
import BenefitsList from "../BenefitsList/BenefitsList";
import { benefitsDescription } from "../../data/benefitsDescription";

const Benefits = () => {
  return (
    <section className={s.benefits}>
      <ul className={s.cardsList}>
        {benefitsData.map((item) => (
          <li className={s.cardsItem} key={item.title}>
            <BenefitsCard {...item} />
          </li>
        ))}
      </ul>
      <div className={s.content}>
        <h2 className={s.title}>Customer satisfaction is our first priority</h2>
        <p className={s.text}>
          We serve many customers, ranging from small businesses, medium
          entrepreneurs, to world-renowned companies. Their satisfaction is our
          pleasure. We strive to provide the best service by:
        </p>
        <ul className={s.benefitsList}>
          {benefitsDescription.map((item) => (
            <li className={s.benefitsItem} key={item.text}>
              <BenefitsList {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
