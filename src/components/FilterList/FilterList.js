import React, { Component } from "react";
import Lists from "./Lists/Lists";

class FilterList extends Component {
  state = {
    filterMode: 1,
  };

  setFilter(mode) {
    this.setState({ filterMode: mode });
  }

  render() {
    const todoComps = this.props.lists
      .filter((lists) => {
        switch (this.state.filterMode) {
          case 1:
            return true;
          case 2:
            return !lists.isChecked;
          case 3:
            return lists.isChecked;
        }
      })
      .map((list, id) => (
        <Lists
          key={id}
          list={list.lists}
          checkToDo={() => this.props.checkToDo(id)}
          checked={list.isChecked}
          clicked={() => this.props.clicked(id)}
        />
      ));
    return (
      <div>
        {todoComps}
        <button type="button" role="filter" onClick={() => this.setFilter(1)}>
          All
        </button>
        <button type="button" role="filter" onClick={() => this.setFilter(2)}>
          Active
        </button>
        <button type="button" role="filter" onClick={() => this.setFilter(3)}>
          Completed
        </button>
        <button
          className="btn btn-danger btn-xs"
          onClick={this.props.deleteCompleted}
        >
          Delete Completed
        </button>
      </div>
    );
  }
}

export default FilterList;
