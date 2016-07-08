import React, {Component} from 'react';
import getData from '../services/index.jsx';
import Navbar from './navbar';
import Top from './top';
import BelowTop from './belowTop';
import Student from './studentContainer';
import Activities from './activities';

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
            <div className="container-fluid">
                <div className="container-fluid">
                    <Top />
                </div>
                <div className="container-fluid">
                    <BelowTop />
                </div>
                <div className="container-fluid centerText bold">
                    <h4>Associate Training</h4>
                </div>
                <div className="container-fluid lightBlue centerText">
                    <h4>
                        <Student student={this.state.students} />
                    </h4>
                    <h6>
                        <Student student={this.state.teachers} />
                    </h6>
                </div>
                <div className="container-fluid solidBorder">
                   <button className="btn alignLeft">BTN 1</button> <button className="btn topSearch">BTN 2</button>
                </div>
                <div className="container-fluid lightGray">
                    <div className="col-md-4 box">
                        <Activities student={this.state.students} />
                    </div>
                    <div className="col-md-8">
                        <textarea rows="4" cols="50">
                            new column 8
                        </textarea>
                        <textarea rows="4" cols="50">
                            new column 8
                        </textarea>
                         <textarea rows="4" cols="50">
                            new column 8
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;