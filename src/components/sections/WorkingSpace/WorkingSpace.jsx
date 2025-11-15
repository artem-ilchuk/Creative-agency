import s from "./WorkingSpace.module.css";
import imagesData from "../../../data/imagesData";
import useMedia from "../../../hooks/UseMedia";

const WorkingSpace = () => {
  const { isSmall, isMobileAll, isTablet, isDesktop } = useMedia();

  return (
    <section className={s.WorkingSpace}>
      <div className={s.WorkingSpaceContent}>
        <h2 className={s.title}>Working space</h2>
        <p className={s.text}>Let`s meet our interior room decoration</p>
        <div className={s.Line1}></div>
        <div className={s.Line2}></div>

        <ul className={s.servicesList}>
          {imagesData.map((img, index) => (
            <li key={index}>
              {isMobileAll && (
                <img
                  className={s.heroImgMob}
                  src={img.mob.src1x}
                  srcSet={`${img.mob.src1x} 1x, ${img.mob.src2x} 2x`}
                  height={isSmall ? img.small?.height : img.mob.height}
                  width={isSmall ? img.small?.width : img.mob.width}
                  alt={img.alt}
                />
              )}

              {isTablet && (
                <img
                  className={s.heroImgTab}
                  src={img.tab.src1x}
                  srcSet={`${img.tab.src1x} 1x, ${img.tab.src2x} 2x`}
                  height={img.tab.height}
                  width={img.tab.width}
                  alt={img.alt}
                />
              )}

              {isDesktop && (
                <img
                  className={s.heroImg}
                  src={img.desc.src1x}
                  srcSet={`${img.desc.src1x} 1x, ${img.desc.src2x} 2x`}
                  height={img.desc.height}
                  width={img.desc.width}
                  alt={img.alt}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkingSpace;
