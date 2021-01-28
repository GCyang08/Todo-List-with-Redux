import * as actionTypes from "./actionTypes";

export const addToList = (list, id, checked) => {
  return {
    type: actionTypes.ADD_TO_LIST,
    newItem: list,
    idEl: id,
    check: checked,
  };
};

export const removeFromList = (removeId) => {
  return {
    type: actionTypes.REMOVE_FROM_LIST,
    idElRemove: removeId,
  };
};

export const checkFromList = (checkId) => {
  return {
    type: actionTypes.CHECK_FROM_LIST,
    checkBox: checkId,
  };
};

export const deleteCompleted = () => {
  return {
    type: actionTypes.DELETE_FROM_LIST,
  };
};
