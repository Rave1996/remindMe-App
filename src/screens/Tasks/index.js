import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './TasksStyles';
import Modal from "react-native-modal";

const days = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ];
const months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre" ];

export default class Tasks extends Component {
    constructor(props){
        super(props);
        var now = new Date();
        this.state = {
            today: days[now.getDay()] + " " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear(),
            modalVisible: false
        };
    }

    toggleModal = () => this.setState({ modalVisible: !this.state.modalVisible })

    render(){
        return(
            <View style={{ flex:1 }}>
                <View>
                    <ImageBackground source={ require('./../../img/tasks-bg.jpg') } style={styles.header} blurRadius={15}>
                        <Image source={ require('./../../img/user-avatar.png') } style={styles.avatar}></Image>
                        <View>
                            <Text style={styles.toDo}>6 Pendientes</Text>
                            <Text style={styles.date}>{ this.state.today.toUpperCase() }</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btnAdd} onPress={this.toggleModal}>
                        <Image source={ require('./../../img/icon-plus.png') }></Image>
                    </TouchableOpacity>
                </View>
                <Modal isVisible={this.state.modalVisible} onBackdropPress={this.toggleModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View>
                            <ImageBackground style={styles.modalHeader}>
                                <Image source={ require('./../../img/remindMe-lLogo.png') } style={styles.modalLogo}></Image>
                            </ImageBackground>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}