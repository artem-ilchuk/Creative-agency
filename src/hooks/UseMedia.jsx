import { useMediaQuery } from "react-responsive";

function useMedia() {
  const isSmall = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 427.98px)",
  });

  const isMobile = useMediaQuery({
    query: "(min-width: 428px) and (max-width: 1023.98px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1439.98px)",
  });

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const isMobileAll = isSmall || isMobile;

  return { isSmall, isMobile, isMobileAll, isTablet, isDesktop };
}

export default useMedia;
