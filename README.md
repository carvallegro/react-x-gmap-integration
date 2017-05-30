# React x GoogleMapJS
Integrate the Google Maps JS API into a React application

## Step 4 : Add a Marker
In this step we are going to add a Marker to the map and create a dedicated class for it.

### Create the marker in Map

Let's start simple, change `initMap()` like so :
```javascript
initMap() {
    const map = new google.maps.Map(this.refs.map, {
        center: {lat: 61.769256, lng: 92.111992},
        zoom: 3
    });
    const marker = new google.maps.Marker({
        map: map,
        position: {lat: 61.769256, lng: 92.111992}
    });
    this.setState({
        map: map,
        marker: marker
    });
}
```
You shoud now have a marker at the center of your map.

### Create a class for the marker

We are going to extract the Marker code into a class of its own. Before any of this, let's look at what we've got and what we are going to need :
 1. We don't actually need to `render()` anything. 
 2. A Google Marker object needs to know two things : the **map** and the **position**.
 3. The map might not be initialized when the marker is mounted.

Create a `src/Marker` folder and create a `Marker.js` file in it. Create and export the Marker class.

To assess the evolution of the class, you're going to add one `<Marker />` element into the Map class (and its import). 

#### 1. Rendering or not rendering
Because we have to define a `render()` method but we don't need to render anything just yet, the `render()` method will look like this:
```javascript
render() {
    return null;
}
```

#### 2. Adding the props
In order to provide the Marker with the **map** and the **position**, we are going to create two properties. And to check that these two properties are setted onto the component, we are going to use [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html).

> If it's not done yet, run this commande to install the `prop-types` dependency
> ```
> npm i --save prop-types
> ```

Write the following code between the class definition and the export :
```javascript
Marker.propTypes = {
    map: PropTypes.object,
    position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired
};
```

If you run the code right now, you'll see that you will have the following error into the browser console :
```
proxyConsole.js:56 Warning: Failed prop type: The prop `position` is marked as required in `Marker`, but its value is `undefined`.
    in Marker (at Map.js:36)
    in Map (at App.js:41)
    in div (at App.js:40)
    in App (created by ScriptLoader)
    in ScriptLoader (at index.js:7)
```

This is because your `<Marker />` element doesn't have any of these properties. Just add a map and a position properties :
```javascript
<Marker position={{lat: 61.769256, lng: 92.111992}} map={this.state.map}/>
```

The javascript will now compile (even though it doesn't do anything yet)

#### 3. Create the marker and set the map when initialized
To create the map we will use the same logic than for the Map and create it into `componentDidMount()`
```javascript
componentDidMount() {
    const marker = new google.maps.Marker({
        map: this.props.map,
        position: this.props.position
    });
    this.setState({
        marker: marker
    });
}
```

> You can now delete every usage of the state property `marker` in App.js

Note that we've used the map props. If the marker is added dynamically, then it is highly likely than the map will be initialized.

To allow the map to be updated, we are going to use the `componentDidUpdate()` method.
```javascript
componentDidUpdate(prevProps, prevState) {
    if (prevProps.map !== this.props.map) {
        this.state.marker.setMap(this.props.map);
    }
}
```

### Let's run this !

Run `npm start`. You should have the same result as before.
