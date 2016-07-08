import React, { Component } from 'react';

class SaveButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-success alignLeft"
          onClick={event => this.onInput(this.props.notes)}
      >SAVE</button>
    );
  }

  onInput(text) {
    this.props.logNotes(text);
  }
}

export default SaveButton;