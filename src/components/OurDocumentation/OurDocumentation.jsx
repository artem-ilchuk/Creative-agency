import s from "./OurDocumentation.module.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Innovation from "../../assets/video/Digital Innovation Agency.webm";

const OurDocumentation = () => {
  return (
    <section className={s.ourDocumentation}>
      <h2 className={s.title}>Our Documetation</h2>
      <p className={s.text}>
        See what our profile is like and how we work for your business
      </p>

      <div className={s.videoWrapper}>
        <VideoPlayer src={Innovation} className={s.videotest} />
      </div>

      <div className={s["background-wrapper"]}>
        <div className={s.background}>
          <div className={s.shape1}></div>
          <div className={s.shape2}></div>
        </div>
      </div>
    </section>
  );
};

export default OurDocumentation;
