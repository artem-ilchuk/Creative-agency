import s from "./Hero.module.css";
import useMedia from "../../hooks/UseMedia";
import heroMob1x from "../../assets/img/Mobile/heroMob1x.webp";
import heroMob2x from "../../assets/img/Mobile/heroMob2x.webp";
import heroTab1x from "../../assets/img/Tab/heroTab1x.webp";
import heroTab2x from "../../assets/img/Tab/heroTab2x.webp";
import heroDesc1x from "../../assets/img/Desctop/heroDesc1x.webp";
import heroDesc2x from "../../assets/img/Desctop/heroDesc2x.webp";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  return (
    <section className={s.hero}>
      {isMobile && (
        <img
          className={s.heroImgMob}
          src={heroMob1x}
          srcSet={`${heroMob1x} 1x, ${heroMob2x} 2x`}
          alt="Smiling lady"
        />
      )}
      {isTablet && (
        <img
          className={s.heroImgTab}
          src={heroTab1x}
          srcSet={`${heroTab1x} 1x, ${heroTab2x} 2x`}
          alt="Smiling lady"
        />
      )}
      {isDesktop && (
        <img
          className={s.heroImg}
          src={heroDesc1x}
          srcSet={`${heroDesc1x} 1x, ${heroDesc2x} 2x`}
          alt="Smiling lady"
        />
      )}
      <div className={s.content}>
        <h1 className={s.heroTitle}>
          Make your business <span className={s.titlePart}>more powerful </span>
          with us
        </h1>
        <p className={s.text}>
          We provide various services to make your business grow and get bigger.
          Your satisfaction is our first priority.
        </p>
        <NavLink
          className={s.start}
          to="/contact"
          aria-label="Go to contact page"
        >
          Get started
          <svg className={s.rightArrow} width="16" height="12">
            <use href="/sprite.svg#icon-Arrow-Right" />
          </svg>
        </NavLink>
        <div className={s.Line}></div>
      </div>
    </section>
  );
};

export default Hero;
