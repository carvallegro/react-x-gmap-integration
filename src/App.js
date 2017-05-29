import React, {Component} from 'react';
import scriptLoader from 'react-async-script-loader'

import './App.css';

/*global google*/
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapMessage: 'Not loaded yet.',
            map: null
        };
    }

    componentWillReceiveProps({isScriptLoaded, isScriptLoadSucceed}) {
        if (isScriptLoaded && !this.props.isScriptLoaded) {
            if (isScriptLoadSucceed) {
                this.setState({
                    mapMessage: 'Map IS loaded ! :)'
                });
                this.initMap();
            }
            else {
                this.setState({
                    mapMessage: 'Map NOT loaded ! :('
                });
            }
        }
    }

    initMap() {
        const map = new google.maps.Map(this.refs.map, {
            center: {lat: 61.769256, lng: 92.111992},
            zoom: 3
        });
        this.setState({
            map: map
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.mapMessage}
                <div className="mapContainer">
                    <div ref="map" className="map">test</div>
                </div>
            </div>
        );
    }
}

export default scriptLoader([
    'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAP_API_KEY + '&libraries=drawing'
])(App);