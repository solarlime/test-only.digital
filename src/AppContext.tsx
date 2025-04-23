import { createContext, useState, useEffect, Context, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext({}) as Context<{ [key: string]: any }>;
// eslint-disable-next-line mobx/missing-observer
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCompact, setIsCompact] = useState(
    document.documentElement.clientWidth <= 500,
  );

  useEffect(() => {
    const compactMatcher = window.matchMedia('(max-width: 500px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsCompact(event.matches);
    };
    if (compactMatcher.addEventListener) {
      compactMatcher.addEventListener('change', handleChange);
    } else {
      // fallback for Safari 12
      compactMatcher.addListener(handleChange);
    }
    return () => {
      if (compactMatcher.removeEventListener) {
        compactMatcher.removeEventListener('change', handleChange);
      } else {
        // fallback for Safari 12
        compactMatcher.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isCompact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
