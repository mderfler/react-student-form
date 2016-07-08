import React, {Component} from 'react';
import getData from '../services/index.jsx';
import Dropdown from './dropdown';
import Rating from './ratingDropdown';

class WeekOf extends Component{
    constructor(props) {
        super(props);
        this.state = {date:[]};
        
    }

    componentWillMount() {  
        this.fetchData();
    }

    fetchData() {
          getData.getDate().then(
          function(data) {
              this.setState({date: [data[0].date.toString().split(" ").slice(1,4).join(' ')]});
              }.bind(this)
        );
     }

render(){
  return(
  <div>
      <div>
        <h4>
           03 for week of: {this.state.date}
        </h4>
      </div>
      <div>
          <div>
            Instructor:
          </div>
          <Dropdown items={this.props.teachers} />
      </div>
      <div>
          <div>
            Teacher's aide:
          </div>
          <Dropdown items={this.props.teachers} />
      </div>
      <div>
          <div>
            Rating:
          </div>
          <Rating items={this.props.activities} />
      </div>
  </div>
  )
}

}

export default WeekOf;