import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./ThemeColors/theme";
import { GlobalStyles } from "./ThemeColors/global";

import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import Input from "./Input/Input";
import FilterList from "./FilterList/FilterList";
import classes from "./ToDoList.module.css";

function TodoList(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <article className={classes.TodoList}>
        <div className={classes.Header}>
          <h1>TODO</h1>
          <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Input
          todos={props.todos}
          setTodos={props.setTodos}
          onHandleAddToList={props.onHandleAddToList}
        />
        <FilterList
          todos={props.todos}
          onHandleToggleCheck={props.onHandleToggleCheck}
          onHandleDeleteTodo={props.onHandleDeleteTodo}
          onHandleClearCompleted={props.onHandleClearCompleted}
        />
      </article>
    </ThemeProvider>
  );
}

export default TodoList;
