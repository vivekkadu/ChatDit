import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AppLogo from '../../assets/app_logo.png'
import TextInputComponent from '../../components/TextInputComponent'
import Button from '../../components/Button'
import { postData } from '../../services/apiCall';
import SpinnerModal from '../../components/SpinnerModal'
import CheckBox from '@react-native-community/checkbox';

export default class SignupScreen extends Component {


    state = {
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        firstName: '',
        lastName: '',
        loader: false,
        toggle: false

    }
    signup() {
        if (this.state.email === '' || this.state.password === '') {
            alert('Please Enter all details');
        } if (this.state.toggle == false) {
            alert("Please Accept Terms and Condition")
        } else {
            this.signupApi();
        }
    }

    async  signupApi() {

        this.setState({ loader: true })
        const data = {
            "username": this.state.username,
            "email": this.state.email,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword,
            "terms": 1
        }

        const res = await postData('register', data);

        this.setState({ loader: false })

        console.log('DATA', res);

        if (res.status === 200) {

            alert(res.data.message)

            this.props.navigation.navigate('Login');
            this.setState({ username: '' })
        } else {
            alert("Something Went Wrong!")
        }
    }

    render() {
        return (

            <LinearGradient
                colors={['#7030A0', '#3F165A']}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image
                    source={AppLogo}
                    style={styles.logoStyle}
                />
                <Text style={{
                    color: "#fff", alignSelf: 'center',
                    marginTop: -10,
                    marginBottom: 10,
                    fontSize: 18
                }}>Create an Account</Text>

                <ScrollView style={styles.viewStyle}>
                    <TextInputComponent
                        placeholder="Email Address"
                        ontextChange={(text) => this.setState({ email: text })}

                    />

                    <TextInputComponent
                        placeholder="User Name"
                        ontextChange={(text) => this.setState({ username: text })}

                    />


                    <TextInputComponent
                        placeholder="Password"
                        ontextChange={(text) => this.setState({ password: text })}
                        secure={true}

                    />


                    <TextInputComponent
                        placeholder="Confim Password"
                        ontextChange={(text) => this.setState({ confirmPassword: text })}
                        secure={true}

                    />


                    <TextInputComponent
                        placeholder="First Name"
                        ontextChange={(text) => this.setState({ firstName: text })}

                    />


                    <TextInputComponent
                        placeholder="Last Name"
                        ontextChange={(text) => this.setState({ lastName: text })}

                    />


                    <TextInputComponent
                        placeholder="Country"
                        ontextChange={(text) => this.setState({ country: text })}

                    />


                    <TextInputComponent
                        placeholder="Gender"
                        ontextChange={(text) => this.setState({ gender: text })}

                    />


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <CheckBox
                            disabled={false}
                            value={this.state.toggle}
                            onValueChange={() => this.state.toggle ? this.setState({ toggle: false })
                                : this.setState({ toggle: true })}
                        />
                        <Text style={{ margin: 12 }}>I accpet terms and conditions</Text>
                    </View>



                    <View style={{ marginBottom: 80, marginTop: 10 }}>

                        <Button
                            onPress={() => this.signup()}
                            buttonText="SIGNUP"
                        />

                    </View>

                </ScrollView>



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
        width: "50%",
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    viewStyle: {
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 15,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,


    }
}

