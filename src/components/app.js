import React, {Component} from 'react';
import getData from '../services/index.jsx';
import Navbar from './navbar';
import Top from './top';
import BelowTop from './belowTop';
import Student from './studentContainer';
import Activities from './activities';
import WeekOf from './weekOf';
import TextBox from './textbox';
import SaveButton from './saveButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {students:[], teachers: [], activities:[], notes:'notes'};
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
          getData.getActivities().then(
            function(data) {
                this.setState({activities: data});
                }.bind(this))
     }

     logNotes(text){
        console.log(text, " Your notes have been saved in your imagination!");
     }

     changeNotes(text){
        this.setState({notes: text})
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
                    
                        <Student student={this.state.students} />
                    
                </div>
                <div className="container-fluid solidBorder">
                   <button className="btn alignLeft">BTN 1</button> <button className="btn topSearch">BTN 2</button>
                </div>
                <div className="container-fluid lightGray">
                    <div className="col-md-4 box">
                        <Activities student={this.state.students} activities={this.state.activities} />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <WeekOf teachers={this.state.teachers} activities={this.state.activities}/>
                        </div>
                        <div>
                            Session Notes
                        </div>
                        <TextBox sessionNotes={this.state.notes} changeNotes={this.changeNotes.bind(this)}/>
                         <div>
                            Other Notes
                        </div>
                        <TextBox />
                        <div>
                            Buttons
                        </div>
                        <SaveButton notes={this.state.notes} logNotes={this.logNotes} />
                        <button className="btn btn-success topSearch">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;