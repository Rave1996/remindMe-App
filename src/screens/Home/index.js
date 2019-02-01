import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './HomeStyles';

export default class Home extends Component {
    gotoHome(){
      this.props.navigation.navigate('Tasks');
    }

    render() {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={ require('./../../img/remindMe-lLogo.png') }></Image>
          <TouchableOpacity style={styles.button} onPress={ this.gotoHome.bind(this) }>
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
          <Image source={ require('./../../img/avatars.png') }></Image>
        </View>
      )
    }
  }