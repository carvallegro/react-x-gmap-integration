# React x GoogleMapJS
Integrate the Google Maps JS API into a React application

## Step 3 : Refactoring
So we have now a functional map being displayed. That's good. But we're going to make it better by putting the map code into a component.

### Creating the files
Create the folder `src/Map` and create two files in it : `Map.js` and `Map.css`. 


### The Map class
Into the `Map.js` file, create a Map class extending the React Component class with the following render method :

```javascript
render() {
    return (
        <div>
            HelloMap
        </div>
    )
}
```

### Changing the loading behavior
To prepare the field for further modifications, we are going to replace the `mapMessage` prop by a boolean.
Add a `hasLoaded` field with an initial state of `false` to the state. Change the `componentWillReceiveProps()` so it modifies `hasLoaded` accordingly.

You can now delete every use of `mapMessage` in App.js.

### Moving the map object into the Map class
This section involves a lot of changes in the code. First of all, you need to move the `initMap()` method to the Map class.

Move the content of `App.css` into `Map.css`.

Move the `div.mapContainer` element to the Map's `render()` method and replace it with a `<Map />` element (do not forget to import it!)

```javascript
// App.js render method 
render() {
    return (
        <div className="App">
            <Map />
        </div>
    );
}

// Map.js render method
render() {
    return (
        <div className="mapContainer">
            <div ref="map" className="map">test</div>
        </div>
    )
}
```

It doesn't do much for now because we haven't called `initMap()` anywhere. We could try to call it into the constructor but we need the component to be rendered. To do so, we're going to use the `componentDidMount()` method.
```javascript
componentDidMount() {
    this.initMap();
}
```

If you run it right now, you'll see that there is a whole bunch of errors. that's because we're rendering the Map component before the library is loaded !

Now we are going to use the `hasLoaded` property we declared before in the App's state. Add the following code at the beginning of the App's render method :
```javascript
if(!this.state.hasLoaded) {
    return (
        <h1>Please Wait</h1>
    )
}
```

### Let's run this !

Run `npm start`. You should have the same result as before.
