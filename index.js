/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

//AppRegistry.registerComponent(appName, () => App);
import React from 'react'; // when you don't specify a path,
                          //react-native looks for an npm module in node_modules
//import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'; // don't need .js as part of header
import AlbumList from './src/components/AlbumList';

// A component is a JS function that returns some amount of JSX
// JSX is effectively hiding the React.createElement function call
// only 1 top level JSX tag can be returned
const App = () => { // this is a component
   return (
     <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
     </View>

  );
};
// register one application to react native then
// pass a function that returns the first component to render for our application (App)
// only the root component uses the app registry
AppRegistry.registerComponent('albums', () => { return App; });
