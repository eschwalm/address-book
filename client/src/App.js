import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
// import HeaderNavigation from './components/HeaderNavigation'
import ConnectedSearch from './components/Search'

import './index.css';

class App extends Component {

    render() {

        return (
           <div className='App'>                
                <div>
                    <Jumbotron>
                        <h1> Simple Address Book App </h1>
                    </Jumbotron>
                </div>
                <div>
                    <ConnectedSearch/>
                </div>
            </div>
        );
    }
}

export default App;