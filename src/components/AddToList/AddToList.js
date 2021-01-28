import React, { Component } from "react";

class AddToList extends Component {
  state = {
    lists: "",
    id: null,
    isChecked: false,
  };

  handleChange = (event) => {
    this.setState({
      lists: event.target.value,
      id: Math.random(),
      isChecked: false,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter New Task"
          value={this.state.lists}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={() =>
            this.props.listAdded(
              this.state.lists,
              this.state.id,
              this.state.isChecked
            )
          }
        >
          Add To List
        </button>
      </div>
    );
  }
}

export default AddToList;
