import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    setMatches(media.matches);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
