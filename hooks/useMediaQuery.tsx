import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    setMatches(window.matchMedia(mediaQuery).matches);
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;

