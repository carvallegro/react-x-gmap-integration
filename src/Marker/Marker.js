/**
 * Created by vcarmignac on 30/5/17.
 */
import {Component} from 'react'
import PropTypes from 'prop-types'

/*global google*/
class Marker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: null
        }
    }

    componentDidMount() {
        const marker = new google.maps.Marker({
            map: this.props.map,
            position: this.props.position
        });
        this.setState({
            marker: marker
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.map !== this.props.map) {
            this.state.marker.setMap(this.props.map);
        }
    }

    render() {
        return null;
    }
}

Marker.propTypes = {
    map: PropTypes.object,
    position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired
};

export default Marker;