import React from "react";
import ToDoList from "../components/ToDoList";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

function ToDo(props) {
  // const [todos, setTodos] = useState([
  //   { id: 0, description: "Complete Course", completed: true },
  //   { id: 1, description: "Jog around the park 3x", completed: false },
  //   { id: 2, description: "10 minutes meditaion", completed: false },
  //   { id: 3, description: "Read for 1 hour", completed: false },
  //   { id: 4, description: "Pick up Groceries", completed: false },
  //   { id: 5, description: "Complete my Resume", completed: false },
  // ]);

  // const handleToggleCheck = (id) => {
  //   const todo = todos.find((todo) => todo.id === +id);
  //   todo.completed = !todo.completed;
  //   setTodos([...todos]);
  // };

  // const handleDeleteTodo = (id) => {
  //   setTodos(todos.filter((t) => t.id !== +id));
  // };

  // const handleClearCompleted = () => {
  //   setTodos(todos.filter((todo) => todo.completed === false));
  // };

  return (
    <div>
      <ToDoList
        todos={props.todo}
        onHandleAddToList={props.handleAddToList}
        onHandleToggleCheck={props.handleToggleCheck}
        onHandleDeleteTodo={props.handleDeleteTodo}
        onHandleClearCompleted={props.handleClearCompleted}
        // setTodos={setTodos}
        // todos={todos}
        // onHandleDeleteTodo={handleDeleteTodo}
        // onHandleCompleted={handleClearCompleted}
      />
    </div>
  );
}

// export default ToDo;

const mapStateToProps = (state) => {
  return {
    todo: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToList: (todo) => {
      dispatch(actionCreators.handleAddToList(todo));
    },
    handleToggleCheck: (id) => {
      dispatch(actionCreators.handleToggleCheck(id));
    },
    handleDeleteTodo: (id) => {
      dispatch(actionCreators.handleDeleteTodo(id));
    },
    handleClearCompleted: () => {
      dispatch(actionCreators.handleClearCompleted());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
