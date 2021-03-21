import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import facebook from "./screens/facebook";
import instagram from "./screens/instagram"


export default class App extends React.Component {
render(){
    return (
      <View style={styles.container}>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const TabNavigator = createBottomTabNavigator({
  instagram: {screen: instagram},
  facebook: {screen: facebook}
})

const AppContainer = createAppContainer(TabNavigator)
