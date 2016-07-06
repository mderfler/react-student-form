import React, {Component} from 'react';
import Searchbar from './searchbar';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        Project name
                        <Searchbar />
                    </div>
                </nav>
        
        );
    }
}

export default Navbar;