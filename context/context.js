// import createContext and useState
import { createContext, useState, useColorScheme } from "react";

// Initiate context
const ThemeContext = createContext(useColorScheme());

const ThemeProvider = ({ children }) => {
  // Manage theme state
  const [colorScheme, setColorScheme] = useState(useColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
