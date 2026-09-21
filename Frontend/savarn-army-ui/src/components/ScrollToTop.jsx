import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
 ScrollToTop
 - Listens for route changes and scrolls the window to top.
 - Mount this once inside your Router so every navigation resets scroll position.
*/
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // instant jump to top so content starts at top on navigation
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
