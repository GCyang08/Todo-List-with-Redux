import React, { Component } from "react";
import AddToList from "../components/AddToList/AddToList";
import FilterList from "../components/FilterList/FilterList";

import Container from "@material-ui/core/Container";
import classes from "./ToDo.module.css";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

class ToDo extends Component {
  render() {
    return (
      <Container>
        <div className={classes.Todo}>
          <AddToList listAdded={this.props.onAddToListHandler} />
          <FilterList
            lists={this.props.list}
            checkToDo={this.props.checkList}
            clicked={this.props.removeFromList}
            deleteCompleted={this.props.deleteFromList}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.todoLists.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToListHandler: (list, id, checked) => {
      dispatch(actionCreators.addToList(list, id, checked));
    },
    removeFromList: (id) => {
      dispatch(actionCreators.removeFromList(id));
    },
    checkList: (checkId) => {
      dispatch(actionCreators.checkFromList(checkId));
    },
    deleteFromList: () => {
      dispatch(actionCreators.deleteCompleted());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
