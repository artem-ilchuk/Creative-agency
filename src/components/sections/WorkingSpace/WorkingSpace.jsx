import s from "./WorkingSpace.module.css";
import imagesData from "../../../data/imagesData";
import useMedia from "../../../hooks/UseMedia";

const WorkingSpace = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  return (
    <section className={s.WorkingSpace}>
      <h2 className={s.title}>Working space</h2>
      <p className={s.text}>Let`s meet our interior room decoration</p>
      <div className={s.Line}></div>

      <ul className={s.servicesList}>
        {imagesData.map((img, index) => (
          <li key={index}>
            {isMobile && (
              <img
                className={s.heroImgMob}
                src={img.mob.src1x}
                srcSet={`${img.mob.src1x} 1x, ${img.mob.src2x} 2x`}
                alt={img.alt}
              />
            )}
            {isTablet && (
              <img
                className={s.heroImgTab}
                src={img.tab.src1x}
                srcSet={`${img.tab.src1x} 1x, ${img.tab.src2x} 2x`}
                alt={img.alt}
              />
            )}
            {isDesktop && (
              <img
                className={s.heroImg}
                src={img.desc.src1x}
                srcSet={`${img.desc.src1x} 1x, ${img.desc.src2x} 2x`}
                alt={img.alt}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkingSpace;
