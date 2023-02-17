// In App.js in a new project

import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';


const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("./assets/bg.jpg")} style = {{height : '100%'}}/>
        <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({})
export default Background;