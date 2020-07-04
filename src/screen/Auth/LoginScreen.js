import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AppLogo from '../../assets/app_logo.png'
import bgImg from '../../assets/bg_angle.png'
import TextInputComponent from '../../components/TextInputComponent'
import Button from '../../components/Button'
import { postData } from '../../services/apiCall';
import SpinnerModal from '../../components/SpinnerModal'
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {


    state = {
        email: '',
        password: '',
        loader: false
    }


    async login() {
        if (this.state.email === '' || this.state.password === '') {
            alert('Please Enter Email/Password');
        } else {
            this.loginApi();
        }
    }


    async loginApi() {

        this.setState({ loader: true })
        console.log("DATA", this.state.email)
        const data = {
            "username": this.state.email,
            "password": this.state.password,
            "fcmToken": "test"
        };


        const res = await postData('login', data);
        console.log('DATA', res);
        this.setState({ loader: false })

        if (res.status == 401) {
            alert("Registered successfully, please check your email for verification")
        } else
            if (res.status === 200) {
                await AsyncStorage.setItem('token', res.data.token)
                this.props.navigation.navigate('Home');
            } else {
                alert("Email/Password is incorrect")
            }
    }


    render() {
        return (
            <LinearGradient
                colors={['#7030A0', '#3F165A']}
                style={{ flex: 1, }}>

                <Image
                    source={AppLogo}
                    style={styles.logoStyle}
                />



                <View style={styles.viewStyle}>
                    <View style={{

                        transform: [{ rotate: '-45deg' }],
                    }}>

                        <Text style={{
                            textAlign: "center",
                            // marginRight: "12%"
                        }}>
                            Welcome Back
                        </Text>


                        <Text style={{
                            textAlign: "center",
                            // marginRight: "12%",
                            color: '#7030A0', fontSize: 26,
                            fontWeight: 'bold',
                            marginBottom: 10
                        }}>
                            Chat Dit
                       </Text>


                        <View style={{ marginLeft: 30 }}>



                            <TextInputComponent
                                placeholder="Email Address"
                                ontextChange={(text) => this.setState({ email: text })}
                            />
                            <TextInputComponent
                                placeholder="Password"
                                secure={true}
                                ontextChange={(text) => this.setState({ password: text })}

                            />

                            <TouchableOpacity>

                                <Text style={{ color: "#2C2C2B", margin: 10 }}>Forgot Password</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={{ alignSelf: 'flex-end', marginTop: 7 }}>
                            <Button buttonText={"LOGIN"} onPress={() => this.login()} />
                        </View>


                        <Text style={{ marginLeft: "32%", marginTop: 12 }}>Don't have account</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                            <Text style={{ marginLeft: "37%", color: "#7030A0", marginTop: 5 }}>Please Signup</Text>
                        </TouchableOpacity>


                    </View>

                </View>

                <SpinnerModal
                    visible={this.state.loader}
                    heading="Please Wait..."
                />
            </LinearGradient>
        )
    }
}


const styles = {
    logoStyle: {
        height: "20%",
        width: "40%",
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginRight: 20
    },
    viewStyle: {
        backgroundColor: "#fff",
        transform: [{ rotate: '45deg' }],
        height: 320,
        width: 320,
        borderRadius: 15,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: -25
    }
}
