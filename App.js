import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";

import {createStackNavigator} from "@react-navigation/stack";
const Stack= createStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import IssLocationScreen from "./screens/IssLocationScreen";
import MeteorScreen from "./screens/MeteorScreen";
import UpdateScreen from "./screens/UpdateScreen";

export default class App extends React.Component {
  render(){
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
       <Stack.Screen name ="Home" component={HomeScreen}/>
       <Stack.Screen name ="IssLocation" component={IssLocationScreen}/>
       <Stack.Screen name ="Meteor" component={MeteorScreen}/>
       <Stack.Screen name ="Update" component={UpdateScreen}/>

     </Stack.Navigator>
   </NavigationContainer>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
