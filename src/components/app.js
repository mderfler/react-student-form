import React, {Component} from 'react';
import getData from '../services/index.jsx';
import Navbar from './navbar';

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
                <div>
                    <Navbar />
                </div>
                <div>
                    Summative
                </div>
            </div>
        );
    }
}

export default App;