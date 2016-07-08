import React, { Component } from 'react';

class CancelButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-success topSearch alignLeft"
          onClick={event => this.onInput()}
      >CANCEL</button>
    );
  }

  onInput(text) {
    this.props.clearNotes();
  }
}

export default CancelButton;