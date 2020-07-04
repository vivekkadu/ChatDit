import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppLogo from '../assets/app_logo.png'
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {
        const value = await AsyncStorage.getItem('token')
        console.log("TOKEN", value)


        setTimeout(() => {
            if (value) {
                if (value === '') {
                    this.props.navigation.navigate("Login")
                } else {
                    global.token = value

                    this.props.navigation.navigate("Home")
                }
            } else {
                this.props.navigation.navigate("Login")
            }

        }, 3000)
    }
    render() {
        return (
            <LinearGradient
                colors={['#7030A0', '#3F165A']}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image source={AppLogo}
                    style={{ height: "25%", width: "85%", resizeMode: 'contain' }} />

            </LinearGradient >
        );
    }
}
