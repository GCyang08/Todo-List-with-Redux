import React, { useState } from "react";

import ToDo from "../src/containers/ToDo";
import classes from "./App.module.css";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./store/ThemeSwitcher/theme";
import { GlobalStyles } from "./store/ThemeSwitcher/global";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className={classes.App}>
          <h1>TODO</h1>
          <button onClick={toggleTheme}>ThemeSwitcher</button>
        </div>
        <ToDo />
      </ThemeProvider>
    </div>
  );
}

export default App;
