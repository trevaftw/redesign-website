import React, { Component } from 'react';

//styling
import './header.css'
import Navicon from './navicon.svg';

class App extends Component {

    handleNav = () => {
        console.log('nav clicked')
    }
    render() {
        return (
            <nav className="nav-bar">
                <img id="nav-icon" onClick={this.handleNav} src={Navicon} alt="navigation dropdown" />
                <div id="title">Trevor</div>
                <div id="hidden"></div>
            </nav>
        );
    }
}

export default App;
