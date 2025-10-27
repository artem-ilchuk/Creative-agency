import { useMediaQuery } from "react-responsive";

function useMedia() {
  const isMobile = useMediaQuery({
    query: "(min-width: 428px) and (max-width: 1023.98px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1439.98px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return { isMobile, isTablet, isDesktop };
}

export default useMedia;
