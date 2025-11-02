import s from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/OurServices/OurServices";

const HomePage = () => {
  return (
    <main className={s.home}>
      <Hero />
      <OurServices />
    </main>
  );
};

export default HomePage;
