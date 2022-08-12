import React, { useState } from "react";

const DarkMode = React.createContext({
  isDarkMode: false,
  changeDarkMode: () => {},
});

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkMode.Provider
      value={{ isDarkMode: darkMode, changeDarkMode: changeDarkModeHandler }}
    >
      {children}
    </DarkMode.Provider>
  );
};

export default DarkMode;
