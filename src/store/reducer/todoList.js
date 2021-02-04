import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  todos: [
    { id: 0, description: "Complete Course", completed: true },
    { id: 1, description: "Jog around the park 3x", completed: false },
    { id: 2, description: "10 minutes meditaion", completed: false },
    { id: 3, description: "Read for 1 hour", completed: false },
    { id: 4, description: "Pick up Groceries", completed: false },
    { id: 5, description: "Complete my Resume", completed: false },
  ],
};

const handleAddToList = (state, action) => {
  return updatedObject(state, { todos: state.todos.concat(action.todo) });
};

const handleToggleCheck = (state, action) => {
  const todo = state.todos.find((todo) => todo.id === +action.id);
  todo.completed = !todo.completed;
  return updatedObject(state, { todos: [...state.todos] });
};

const handleDeleteTodo = (state, action) => {
  return updatedObject(state, {
    todos: state.todos.filter((t) => t.id !== +action.id),
  });
};

const handleClearCompleted = (state) => {
  return updatedObject(state, {
    todos: state.todos.filter((todo) => todo.completed === false),
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST:
      return handleAddToList(state, action);
    case actionTypes.CHECK_FROM_LIST:
      return handleToggleCheck(state, action);
    case actionTypes.DELETE_FROM_LIST:
      return handleDeleteTodo(state, action);
    case actionTypes.CLEAR_COMPLETED:
      return handleClearCompleted(state, action);
  }
  return state;
};

export default reducer;
