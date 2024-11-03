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
import axios from 'axios'

export default function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const handleNavig = () => {
        navigation.navigate('Login')
    }

    const mailValidator = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            return {valid: false};
        }
        else {
            return {valid: true};
        }
    }
    const handlesignup = async () => {
        console.log(name, email, password);

        if (!email || !name || !password){
            alert('Please fill all the fields');
            return;
        }

        const mailValdity = mailValidator(email);
        if (mailValdity.valid === false) {
            alert("Invalid Email");
        }
        else {
            if (password.length < 8){
                alert("Password must be at least 8 characters long");
            }
            else {
                const response = await axios.post('http://10.81.55.172:5000/api/signup', {name, email, password});
                console.log(response.data);

                if (response.data.success){
                    alert('Registered Successfully');
                    await AsyncStorage.setItem(authToken, response.data.authToken);
                    setTimeout(()=>{
                        navigation.navigate('Chats')
                    }, 1000)
                }
                else {
                    alert(response.data.error)
                }
            }
        }
        
    }

    return (
        <View style={styles.containerMain}>
            <Image
                source={Logo}
                style={{ width: 180, height: 100, marginTop: 20 }}
                resizeMode="contain"
            />
            <Text>Please Signup To Your Account</Text>
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
                        onChangeText={setName}
                        value={name}
                        placeholder={'Enter Your Name'}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Image
                        source={EmailIcon}
                        style={{ width: 18, height: 14 }}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.formText}
                        onChangeText={setEmail}
                        value={email}
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
                        onChangeText={setPassword}
                        value={password}
                        placeholder={'Enter Your Password'}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.sendButton} onPress={handlesignup}>
                <Text style={styles.text_main1}>Signup</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
                <Text style={{ fontSize: 10 }}>Already Have Account?</Text>
                <TouchableOpacity onPress={handleNavig}>
                    <Text style={{ fontSize: 10, color: '#D71E1E' }}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        paddingHorizontal: 10,
        // paddingVertical: 20,
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
        fontSize: 12,
        flex: 1
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