# React x GoogleMapJS
Integrate the Google Maps JS API into a React application

## Step 2 : Display the map

Displaying a message is obviously not enough, we want to display a map !

### Prepare the map container
We are going to put the map in a container. It will allow us to easily size the map in the future.

Add the container inside the App renderer :
```ecmascript 6
<div className="App">
    {this.state.mapMessage}
    <div className="mapContainer">
        This is the map Container.
    </div>
</div>
```

Don't forget to add some styling into the App.css
```css
.mapContainer {
    position: absolute;
    height: 300px;
    width: 500px;
    background-color: grey;
}
```

### Initialize the map object
Once the map object has been initialized, we want to create the google map object. Create a `initMap()` class method and call it into the `componentWillReceiveProps()` method (On success obviously).

```ecmascript 6
initMap() {
    const map = new google.maps.Map(this.refs.map, {
        center: {lat: 61.769256, lng: 92.111992},
        zoom: 3
    });
    this.setState({
        map: map
    });
}
```
> Do not forget to add the map object in the initial state with a `null` value !


Because the google.maps library is not loaded on compile time, ESLint will throw an error. To bypass this error, just add this line before the class declaration :
```ecmascript 6
/*global google*/
class App extends Component {
    //...
}
```

To display the map, modify the `.mapContainer` element content : 
```html
<div className="mapContainer">
   <div ref="map" className="map">test</div>
</div>
```

Let's not forget to add the map styling in the App.css file !
```css
.mapContainer > .map {
    height: 100%;
    width: 100%;
}
```

### Let's run this !

Run `npm start`. The map should be loaded and centered on Russia :)