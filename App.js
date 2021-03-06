import React from 'react';
import Expo from 'expo';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { StyleProvider } from 'native-base';
import MainStack from './src/Router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Warning', 'Setting', 'Possible'];
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>;
    }
    return (
      <StyleProvider style = {getTheme(material)}>
        <MainStack/>
      </StyleProvider>
    );
  }
}
