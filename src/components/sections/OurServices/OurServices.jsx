import s from "./OurServices.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import { servicesData } from "../../../data/servicesData";

const OurServices = () => {
  return (
    <section className={s.ourServices}>
      <h2 className={s.title}>Our Services</h2>
      <p className={s.text}>
        The various services we provide to make your business more powerful
      </p>
      <div className={s.Line}></div>
      <ul className={s.servicesList}>
        {servicesData.map((item) => (
          <li className={s.serviceItem} key={item.id}>
            <ServiceCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurServices;
