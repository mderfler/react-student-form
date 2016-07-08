import React, {Component} from 'react';
import getData from '../services/index.jsx';
import Activity from './activity';

class Activities extends Component{
    constructor(props) {
        super(props);
    }

render(){
  return(
  <div key = {this.props.student.id}>
    <Activity id={this.props.student.id} activities={this.props.activities} />
  </div>
  )
}

}

export default Activities;