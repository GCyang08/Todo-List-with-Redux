import React, { useEffect, useState } from "react";
import classes from "./Lists.module.css";
import check from "../../assets/icon-check.svg";
import cross from "../../assets/icon-cross.svg";

function List(props) {
  const [checked, setChecked] = useState(props.completed);

  useEffect(() => {
    setChecked(props.completed);
  }, [props.completed]);

  return (
    <ul className={classes.List}>
      <div className={classes.Wrapper}>
        <span
          className={classes.Circle}
          onClick={() => props.onHandleToggleCheck(props.id)}
        >
          {checked ? (
            <span className={classes.Checked}>
              <img src={check} alt="check" />
            </span>
          ) : null}
        </span>

        <h4 className={props.completed ? classes.Completed : ""}>
          <p>{props.description}</p>
        </h4>
      </div>
      <img
        src={cross}
        alt="remove icon"
        className={classes.Remove}
        onClick={() => props.onHandleDeleteTodo(props.id)}
      />
    </ul>
  );
}

export default List;
