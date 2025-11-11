import { useRef, useEffect, useState } from "react";

const VideoPlayer = ({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay={autoPlay && isVisible}
      loop={loop}
      muted={muted}
      playsInline
    />
  );
};

export default VideoPlayer;
