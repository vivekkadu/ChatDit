import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import searchImg from '../../assets/Search.png'
import profileImg from '../../assets/user_avatar.png'
import setting from '../../assets/Setting.png'
import profile from '../../assets/Update.png'
import Friends from '../../assets/fr.png'
import News from '../../assets/News.png'
import Blog from '../../assets/Blog.png'
import Pages from '../../assets/Pages.png'
import Saved from '../../assets/Saved.png'
import Logout from '../../assets/Logout.png'
import { postData } from '../../services/apiCall';
import SpinnerModal from '../../components/SpinnerModal'
import AsyncStorage from '@react-native-community/async-storage';


export default class MenuTab extends Component {

    state = { loader: false }

    async  logout() {
        this.setState({ loader: true })
        const value = await AsyncStorage.getItem('token')


        const headers = {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + value
        };



        console.log("token", value)
        const res = await postData('logout?token=tufan.alkurn.token0231355', null, headers);
        console.log('DATA', res);
        this.setState({ loader: false })


        if (res.status === 200) {
            await AsyncStorage.setItem('token', '')
            this.props.navigation.navigate("Login")
        }
    }
    render() {
        return (
            <ScrollView>

                <View style={styles.topConatiner}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Menu </Text>
                    <Image source={searchImg} style={{ width: 26, height: 26 }} />
                </View>

                <View style={[styles.topConatiner, { justifyContent: 'flex-start' }]}>

                    <Image source={profileImg} style={{ height: 80, width: 80, }} />
                    <View style={{ marginLeft: 15 }}>

                        <Text>
                            Kay
                    </Text>
                        <Text style={{ color: "#A8A8A8" }}>
                            View Profile Details
                       </Text>

                    </View>

                </View>

                <View style={{ margin: 15, marginLeft: 25 }}>

                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={setting} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Account Setting</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={profile} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Update Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={Friends} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Friends</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={News} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>News</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={Blog} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Blog</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={Pages} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Pages</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.viewStyle}>
                        <Image source={Saved} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Saved Post</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.logout()} style={styles.viewStyle}>
                        <Image source={Logout} style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Logout</Text>
                    </TouchableOpacity>


                </View>
                <SpinnerModal
                    visible={this.state.loader}
                    heading="Please Wait..."
                />
            </ScrollView >
        )
    }
}


const styles = {
    topConatiner: {
        flexDirection: 'row', alignItems: 'center',
        marginTop: 2, padding: 20, justifyContent: 'space-between'
    }, iconStyle: {
        height: 25,
        width: 25,
        marginRight: 10,
        resizeMode: 'contain'
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 20
    },
    textStyle: {
        fontSize: 17
    }
}