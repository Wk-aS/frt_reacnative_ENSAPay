import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyStack from './navigation';
import * as constants from './constants';
import { Block } from './components';
import { log } from 'react-native-reanimated';

const images = [
  require('./assets/adaptive-icon.png'),
  require('./assets/favicon.png'),
  require('./assets/icon.png'),
  require('./assets/splash.png'),
];
export default class App extends React.Component {
  state = {
    Phone: '',
    password: '',
    isLoadingComplete: false,
  };

  handleResourcesAsync = async () => {
    const cacheImages = images.map((img) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={(err) => console.warn(err)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      /*     */
    );
  }
}
