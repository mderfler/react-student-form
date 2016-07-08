import React, {Component} from 'react';
import getData from '../services/index.jsx';
import Activity from './activity';

class Activities extends Component{
    constructor(props) {
        super(props);
        this.state = {activities:[]};
    }

    componentWillMount() {  
        this.fetchData();
    }

    fetchData() {
       getData.getActivities().then(
            function(data) {
                this.setState({activities: data});
                }.bind(this))
     }

render(){
  console.log(this.props);
  return(
  <div key = {this.props.student.id}>
    <Activity id={this.props.student.id} activities={this.state.activities} />
  </div>
  )
}

}

export default Activities;