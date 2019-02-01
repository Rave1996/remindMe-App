import React, {Component} from 'react';
import {Modal, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './TasksStyles';

const days = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "SÁbado" ];
const months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre" ];

export default class Tasks extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View>
                    <ImageBackground source={ require('./../../img/tasks-bg.jpg') } style={styles.header} blurRadius={15}>
                        <Image source={ require('./../../img/user-avatar.png') } style={styles.avatar}></Image>
                        <View>
                            <Text style={styles.toDo}>6 Pendientes</Text>
                            <Text style={styles.date}>Fecha actual</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btnAdd}>
                        <Image source={ require('./../../img/icon-plus.png') }></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}