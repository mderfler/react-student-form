import React, {Component} from 'react';
import getData from '../services/index.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {students:[], teachers: []};
    }

    componentWillMount() {  
        this.fetchData();
    }

    fetchData() {
        getData.getStudents().then(
            function(data) {
                this.setState({students: data});
                }.bind(this)
        );
          getData.getTeachers().then(
            function(data) {
                this.setState({teachers: data});
                }.bind(this)
        );
     }

    render() {
        return (
            <div>
                Summative
            </div>
        );
    }
}

export default App;