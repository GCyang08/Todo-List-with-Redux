import React from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import "./ToggleSwitch.module.css";

const ToggleSwitch = (props) => {
  const isLight = props.theme === "light";
  return (
    <div>
      <span onClick={props.toggleTheme}>
        {isLight ? (
          <img src={moon} alt="moon-theme-switcher" />
        ) : (
          <img src={sun} alt="sub-theme-switcher" />
        )}
      </span>
    </div>
  );
};

export default ToggleSwitch;
