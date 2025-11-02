import s from "./OurServices.module.css";
import ServiceCard from "../Cards/ServiceCard/ServiceCard";

const OurServices = () => {
  return (
    <section className={s.ourServices}>
      <h2 className={s.title}>OurServices</h2>
      <p className={s.text}>
        The various services we provide to make your business more powerful
      </p>
      <ul className={s.servicesList}>
        <li className={s.serviceItem}>
          <ServiceCard
            id="icon-Flame"
            title="Ideate"
            text="We help you develop creative ideas so that your business can grow more rapidly"
            color="#4C40F7"
            shadow=" 0 15px 30px 0 #372dbc;"
          />
        </li>
        <li className={s.serviceItem}>
          <ServiceCard
            id="icon-Pen"
            title="Design"
            text="We provide services with the best designs than our designer team for your business"
            color="#ff2d59"
            shadow="0 15px 30px 0 rgba(255, 45, 89, 0.4)"
          />
        </li>
        <li className={s.serviceItem}>
          <ServiceCard
            id="icon-dekstop"
            title="Web Development"
            text="We help develop company websites to be more professional and attractive"
            color="#4adb61"
            shadow="0 15px 30px 0 rgba(74, 219, 97, 0.4)"
          />
        </li>
        <li className={s.serviceItem}>
          <ServiceCard
            id="icon-Mobile"
            title="App Development"
            text="We help develop company mobile apps to be more professional and attractive"
            color="#fc0"
            shadow="0 15px 30px 0 rgba(255, 204, 0, 0.4)"
          />
        </li>
        <li className={s.serviceItem}>
          <ServiceCard
            id="icon-Building"
            title="Business Growth"
            text="We also provide services by providing input for your business growth"
            color="#007bff"
            shadow="0 15px 30px 0 rgba(0, 123, 255, 0.4)"
          />
        </li>
        <li className={s.serviceItem}>
          <ServiceCard
            id="icon-Chart"
            title="Digital marketing"
            text="We also help you market your products through an online marketplace"
            color="#ff6800"
            shadow="0 15px 30px 0 rgba(255, 104, 0, 0.4)"
          />
        </li>
      </ul>
    </section>
  );
};

export default OurServices;
