import * as React from 'react';
import {Text, View, Stylesheet, Button} from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './Screen/homeScreen';
import SummaryScreen from './Screen/summaryscreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen
})
const AppContainer = createAppContainer(AppNavigator);