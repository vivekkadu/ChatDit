import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { tintColor } from '../constants/constants'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.onPress()}>
                <Text style={styles.textStyle}> {this.props.buttonText} </Text>
            </TouchableOpacity>
        )
    }
}



const styles = {
    buttonStyle: {
        backgroundColor: tintColor,
        height: 50,
        width: 180,
        borderRadius: 25,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: "#fff",
        fontSize: 18,
    }
}