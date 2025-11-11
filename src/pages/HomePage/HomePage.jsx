import s from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import OurServices from "../../components/OurServices/OurServices";
import OurDocumentation from "../../components/OurDocumentation/OurDocumentation";

const HomePage = () => {
  return (
    <main className={s.home}>
      <Hero />
      <OurServices />
      <OurDocumentation />
    </main>
  );
};

export default HomePage;
