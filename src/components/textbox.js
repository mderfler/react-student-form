import React, {Component} from 'react';

class TextBox extends Component{
    constructor(props) {
        super(props);   
    }

  newText(text) {
    this.props.changeNotes(text);
  } 

   handleChange(text) {
    this.setState({value: text});
    this.newText(text);
  }  

render(){
	this.state = { value: this.props.sessionNotes };
    return(
		<textarea rows="4" cols="50"
			value={this.state.value}
			onChange={event=>this.handleChange(event.target.value)}
		>
            {this.state.value}
        </textarea>
    )
}

}

export default TextBox;