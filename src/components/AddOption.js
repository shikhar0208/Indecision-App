import React from "react";

// Class based component
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    //this handleAddOption is method of AddOption class
    e.preventDefault();

    const option = e.target.elements.option.value.trim(); // it stores value on submitting the form
    const error = this.props.handleAddOption(option); // this handleAddOption is method of parent class IndecisionApp.

    this.setState(() => ({ error })); // shorthand syntax

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {/*<p>{this.state.error}</p>*/} {/* also correct */}
        {this.state.error && <p className="add-option-error">{this.state.error}.</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" autocomplete="off"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
