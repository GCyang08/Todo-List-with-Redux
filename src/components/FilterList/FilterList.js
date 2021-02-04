import React, { useState, useEffect } from "react";
import List from "../Lists/Lists";
import classes from "./FilterList.module.css";

function FilterList(props) {
  const [filteredTodos, setFilteredTodos] = useState(props.todos);
  const [activeFilter, setActiveFilter] = React.useState(() => "All");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter.id);
  };

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredTodos(props.todos);
    } else if (activeFilter === "Active") {
      setFilteredTodos(props.todos.filter((t) => t.completed === false));
    } else if (activeFilter === "Completed") {
      setFilteredTodos(props.todos.filter((t) => t.completed === true));
    }
  }, [activeFilter, props.todos]);

  return (
    <section className={classes.ShadowBox}>
      {filteredTodos.map((todo) => {
        return (
          <List
            key={todo.id}
            {...todo}
            onHandleDeleteTodo={props.onHandleDeleteTodo}
            onHandleToggleCheck={props.onHandleToggleCheck}
          />
        );
      })}
      <div className={classes.Filter}>
        <div className={classes.ItemsLeft}>
          {`${
            props.todos.filter((t) => t.completed === false).length
          } items left`}
        </div>
        <div className={classes.Wrapper}>
          <span
            id="All"
            className={`${activeFilter === "All" ? classes.FilterButtons : ""}`}
            onClick={(e) => handleFilterChange(e.target)}
          >
            All
          </span>
          <span
            id="Active"
            className={`${
              activeFilter === "Active" ? classes.FilterButtons : ""
            }`}
            onClick={(e) => handleFilterChange(e.target)}
          >
            Active
          </span>
          <span
            id="Completed"
            className={`${
              activeFilter === "Completed" ? classes.FilterButtons : ""
            }`}
            onClick={(e) => handleFilterChange(e.target)}
          >
            Completed
          </span>
        </div>
        <div>
          <span
            className={classes.Wrapper}
            onClick={() => props.onHandleClearCompleted()}
          >
            Clear completed
          </span>
        </div>
      </div>
    </section>
  );
}

export default FilterList;
