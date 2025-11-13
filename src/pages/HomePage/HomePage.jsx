import s from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/OurServices/OurServices";
import OurDocumentation from "../../components/OurDocumentation/OurDocumentation";
import Benefits from "../../components/Benefits/Benefits";

const HomePage = () => {
  return (
    <main className={s.home}>
      <Hero />
      <OurServices />
      <OurDocumentation />
      <Benefits />
    </main>
  );
};

export default HomePage;
