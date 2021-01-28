import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  list: [
    { lists: "Complete online JS course", isChecked: true },
    { lists: "Jog around the park 3x", isChecked: false },
    { lists: "10 minutes meditation", isChecked: false },
    { lists: "Read for 1 hour", isChecked: false },
    { lists: "Pick up groceries", isChecked: false },
    { lists: "Complete Todo App on Frontend Mentor", isChecked: false },
  ],
};

const addToList = (state, action) => {
  const userInput = {
    lists: action.newItem,
    id: action.idEl,
    isChecked: action.check,
  };
  const copyState = [...state.list];
  const newState = copyState.concat(userInput);
  return updatedObject(state, { list: newState });
};

const removeItemFromList = (state, action) => {
  const updatedList = state.list.filter((list, id) => id !== action.idElRemove);
  return updatedObject(state, { list: updatedList });
};

const checkList = (state, action) => {
  const checkedId = action.checkBox;
  console.log(checkedId);
  const listArray = [...state.list];
  listArray[checkedId].isChecked = !listArray[checkedId].isChecked;
  return updatedObject(state, { list: listArray });
};

const deleteFromList = (state) => {
  return updatedObject(state, {
    list: state.list.filter((lists) => !lists.isChecked),
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST:
      return addToList(state, action);
    case actionTypes.REMOVE_FROM_LIST:
      return removeItemFromList(state, action);
    case actionTypes.CHECK_FROM_LIST:
      return checkList(state, action);
    case actionTypes.DELETE_FROM_LIST:
      return deleteFromList(state, action);
  }
  return state;
};

export default reducer;
