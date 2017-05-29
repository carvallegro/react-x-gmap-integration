# React x GoogleMapJS
Integrate the Google Maps JS API into a React application

## Step 1 : Loading the library

Now, let's start with the serious stuff and load the GoogleMaps library. Because we're taking it slow, we won't display the map just yet. We'll just make sure that it's been loaded and then display a message accordingly. 

### Display a message

To display a message, we'll just add a property in the Component's state. To do so, let's declare the initial state and display the message

```ecmascript 6
class App extends Component {

    constructor(props) {
        super(props);
        // This is the initial state
        this.state = {
            mapMessage: 'Not loaded yet.'
        };
    }
    
    render() {
        // Instead of the "Hello World", we're gonna display mapMessage.
        return (
            <div className="App">
                {this.state.mapMessage}
            </div>
        );
    }
}
```

### Using `react-async-script-loader`

> If not done yet, use npm to install the dependency
> ```
> npm i --save react-async-script-loader
> ```

Because this library has to be loaded asynchronously we're going to use react-async-script-loader to load the map.

react-async-script-loader works in two steps :

#### 1. Decorate the component
Instead of doing a basic export of the class like, We will call the script loader to decorate the export :
```ecmascript 6
// The old way
export default App;
// With the scriploader
export default scriptLoader([
    'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAP_API_KEY + '&libraries=drawing'
])(App);
```
Note that the library is between brackets. It means that it will be loaded parallelly.

> Make sure that your REACT_APP_GOOGLE_MAP_API_KEY environment variable has the right value.

#### 2. Write the callback method
Once scriptLoader has loaded every script, it will call the `componentWillReceiveProps()` method of the App component, passing two parameters : `{ isScriptLoaded, isScriptLoadSucceed }`.

```ecmascript 6
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
```

### Let's run this !

Run `npm start`. You should see a "Not loaded yet." shortly followed by a "Map IS loaded ! :)" message.
If you got a "Map NOT loaded ! :(" message, well... You have a problem somewhere.