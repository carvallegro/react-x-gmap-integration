/**
 * Created by vcarmignac on 29/5/17.
 */
import React, {Component} from 'react'

/*global google*/
class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
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

    componentDidMount() {
        this.initMap();
    }

    render() {
        return (
            <div className="mapContainer">
                <div ref="map" className="map"><h1>Please wait</h1></div>
            </div>
        )
    }
}

export default Map;