/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={ require('./img/remindMe-lLogo.png') }></Image>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
        <Image source={ require('./img/avatars.png') }></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ED184A',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 285,
    height: 75,
    marginTop: 100,
  },
  button: {
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 55,
    justifyContent: 'center',
    width: 325,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
