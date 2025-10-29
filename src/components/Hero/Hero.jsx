import s from "./Hero.module.css";
import useMedia from "../../hooks/UseMedia";
import heroMob1x from "../../assets/img/Mobile/heroMobx1.webp";
import heroMob2x from "../../assets/img/Mobile/heroMobx2.webp";
import heroTab1x from "../../assets/img/Tab/HeroTab1x.webp";
import heroTab2x from "../../assets/img/Tab/HeroTab2x.webp";
import heroDesc1x from "../../assets/img/Desctop/HeroDesc1x.webp";
import heroDesc2x from "../../assets/img/Desctop/HeroDesc2x.webp";

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
    </section>
  );
};

export default Hero;
