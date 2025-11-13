import { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ src, className, loop = true }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay blocked", err);
      });
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      loop={loop}
      muted
      playsInline
    />
  );
};

export default VideoPlayer;
