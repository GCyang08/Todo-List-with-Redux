import React from "react";
import icon from "../../../assets/icon-cross.svg";
import check from "../../../assets/icon-check.svg";
import classes from "./Lists.module.css";

const Lists = (props) => {
  return (
    <div className={classes.Lists}>
      <div className={classes.Checked} onClick={props.checkToDo}>
        {props.checked && <img src={check} alt="check" />}
      </div>
      <div className={props.checked ? classes.Done : " "}>
        <span>{props.list}</span>
      </div>
      <div onClick={props.clicked}>
        <img src={icon} alt="check list" />
      </div>
    </div>
  );
};

export default Lists;
