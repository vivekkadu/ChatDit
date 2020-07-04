import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class TextInputComponent extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder={this.props.placeholder}
                    underlineColorAndroid="#ddd"
                    placeholderTextColor="#000"
                    secureTextEntry={this.props.secure}
                    style={{ padding: 10, margin: 5, width: 250 }}
                    onChangeText={(text) => this.props.ontextChange(text)}
                />
            </View>
        )
    }
}
