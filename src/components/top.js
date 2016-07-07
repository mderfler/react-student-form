import React, {Component} from 'react';
import Searchbar from './searchbar';

class Top extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        Catalyst 03 Tracker
                        <Searchbar />
                        <button className="btn alignRight">BTN</button>
                    </div>
                </nav>
        
        );
    }
}

export default Top;