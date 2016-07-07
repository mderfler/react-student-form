import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
        <input
          className="topSearch"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
    );
  }

  onInputChange(term) {
    console.log("searchbar");
    // this.setState({term});
    // this.props.onSearchTermChange(term);
  }
}

export default SearchBar;