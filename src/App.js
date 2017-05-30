import React, {Component} from 'react';
import Map from './Map/Map'
import scriptLoader from 'react-async-script-loader'

import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false
        };
    }

    componentWillReceiveProps({isScriptLoaded, isScriptLoadSucceed}) {
        if (isScriptLoaded && !this.props.isScriptLoaded) {
            if (isScriptLoadSucceed) {
                this.setState({
                    hasLoaded: true
                });
            }
            else {
                this.setState({
                    hasLoaded: false
                });
            }
        }
    }

    render() {
        if(!this.state.hasLoaded) {
            return (
                <h1>Please Wait</h1>
            )
        }

        return (
            <div className="App">
                <Map />
            </div>
        );
    }
}

export default scriptLoader([
    'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAP_API_KEY + '&libraries=drawing'
])(App);