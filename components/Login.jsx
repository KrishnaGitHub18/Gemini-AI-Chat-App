import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Logo from '../assests/logo.png'
import GoogleLogo from '../assests/Login/Google.png'
import FacebookLogo from '../assests/Login/facebook.png'
import AppleLogo from '../assests/Login/apple.png'
import NameIcon from '../assests/Login/Name.png'
import EmailIcon from '../assests/Login/Email.png'
import PasswordIcon from '../assests/Login/Password.png'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const [text, setText] = useState('');

    const navigation = useNavigation();
    const handleNavigSignup = () => {
        navigation.navigate('Signup')
    }
    const handleNavigChat = () => {
        navigation.navigate('Chats')
    }

    return (
        <View style={styles.containerMain}>
            <Image
                source={Logo}
                style={{ width: 180, height: 100, marginTop: 40 }}
                resizeMode="contain"
            />
            <Text>Please Login To Your Account</Text>
            <View style={styles.authBoxContainer}>
                <TouchableOpacity style={styles.authBox}>
                    <Image
                        source={GoogleLogo}
                        style={{ width: 26, height: 22 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.authBox}>
                    <Image
                        source={FacebookLogo}
                        style={{ width: 26, height: 22 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.authBox}>
                    <Image
                        source={AppleLogo}
                        style={{ width: 26, height: 22 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <Text style={[styles.text_main1, { fontSize: 15, marginTop: 30 }]}> ------------------------or------------------------</Text>
            <View>
                {/* FORM */}
                <View style={styles.formContainer}>
                    <Image
                        source={NameIcon}
                        style={{ width: 18, height: 14 }}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.formText}
                        onChangeText={setText}
                        value={text}
                        placeholder={'Enter Your Email'}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Image
                        source={PasswordIcon}
                        style={{ width: 18, height: 14 }}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.formText}
                        onChangeText={setText}
                        value={text}
                        placeholder={'Enter Your Password'}
                    />
                </View>
            </View>
            <View style={styles.forgetPassContainer}>
                <Text style={styles.forgetPassText}>Forget Password?</Text>
            </View>
            <TouchableOpacity style={styles.sendButton} onPress={handleNavigChat}>

                <Text style={styles.text_main1}>Login</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
                <Text style={{ fontSize: 10 }}>Don't Have Account?</Text>
                <TouchableOpacity onPress={handleNavigSignup}><Text style={{ fontSize: 10, color: '#D71E1E' }}> Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: "#202020",
        flex: 1
    },
    text_main1: {
        color: 'white'
    },
    authBoxContainer: {
        height: 100,
        width: 270,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    authBox: {
        height: '70%',
        width: '28%',
        borderRadius: 15,
        backgroundColor: '#292929',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        marginTop: 30,
        backgroundColor: '#292929',
        height: 50,
        width: 320,
        borderRadius: 20,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row'
    },
    formText: {
        marginLeft: 15,
        fontSize: 12
    },
    forgetPassContainer: {
        marginTop: 20,
        alignItems: 'flex-end',
        paddingRight: 30,
        width: 320
    },
    forgetPassText: {
        fontSize: 10,
        color: '#D71E1E'
    },
    sendButton: {
        borderWidth: 1,
        backgroundColor: '#F74141',
        height: 50,
        width: 320,
        marginTop: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})