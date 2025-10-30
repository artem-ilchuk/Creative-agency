import s from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  return (
    <main className={s.home}>
      <Hero />
    </main>
  );
};

export default HomePage;
