import * as actionTypes from "./actionTypes";

export const handleAddToList = (todo) => {
  return {
    type: actionTypes.ADD_TO_LIST,
    todo: todo,
  };
};
export const handleToggleCheck = (id) => {
  return {
    type: actionTypes.CHECK_FROM_LIST,
    id: id,
  };
};

export const handleDeleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_FROM_LIST,
    id: id,
  };
};

export const handleClearCompleted = () => {
  return {
    type: actionTypes.CLEAR_COMPLETED,
  };
};
