import React, {Component} from 'react';
import scriptLoader from 'react-async-script-loader'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapMessage: 'Not loaded yet.'
        };
    }

    componentWillReceiveProps({isScriptLoaded, isScriptLoadSucceed}) {
        if (isScriptLoaded && !this.props.isScriptLoaded) {
            if (isScriptLoadSucceed) {
                this.setState({
                    mapMessage: 'Map IS loaded ! :)'
                });
            }
            else {
                this.setState({
                    mapMessage: 'Map NOT loaded ! :('
                });
            }
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.mapMessage}
            </div>
        );
    }
}

export default scriptLoader([
    'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAP_API_KEY + '&libraries=drawing'
])(App);