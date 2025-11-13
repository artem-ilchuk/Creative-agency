import s from "./HomePage.module.css";
import Hero from "../../components/sections/Hero/Hero";
import OurServices from "../../components/sections/OurServices/OurServices";
import OurDocumentation from "../../components/sections/OurDocumentation/OurDocumentation";
import Benefits from "../../components/sections/Benefits/Benefits";
import WorkingSpace from "../../components/sections/WorkingSpace/WorkingSpace";

const HomePage = () => {
  return (
    <main className={s.home}>
      <Hero />
      <OurServices />
      <OurDocumentation />
      <Benefits />
      <WorkingSpace />
    </main>
  );
};

export default HomePage;
