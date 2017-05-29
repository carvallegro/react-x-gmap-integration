# React x GoogleMapJS
Integrate the Google Maps JS API into a React application

### Dependencies
Because I'm a lazy person, I've generated the project using [create-react-app](https://github.com/facebookincubator/create-react-app). We will also use the [react-async-script-loader](https://github.com/leozdgao/react-async-script-loader) component to import the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/).

## Step 0 : Setting up the environment

### API key
Prior to anything make sure you've created a [Google Map API key](https://developers.google.com/maps/documentation/javascript/get-api-key) and added it into the `.env` file :
```
REACT_APP_GOOGLE_MAP_API_KEY=[Your API key]
```

### Create the project
> Make sure you have create-react-app installed. If not, install it using globally :
> ```
> npm install -g create-react-app
> ```

To create the project, just type in the following command :
``` 
create-react-app my-app
cd my-app
```

### Get rid of everything
create-react-app generates a default, minimalist app. For the sake of the demo, we'll be even more basic. To do so, just delete the `logo.svg` file and the content of the `index.css` file.
Also, copy paste the following code into `App.js` 
```ecmascript 6
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default App;
```
