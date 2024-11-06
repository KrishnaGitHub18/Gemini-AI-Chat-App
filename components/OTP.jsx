import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function OTP() {

    const [otp, setOtp] = useState(null);
    const navigation = useNavigation();

    const handleContinue = async () => {
        console.log(otp);

        const response = await axios.post('http://10.81.55.172:5000/api/forgotPassword', { otp });

        if (response.data.success) {

            console.log(response.data);
            
            await AsyncStorage.setItem("authToken", response.data.authToken);
            await AsyncStorage.setItem("username", response.data.name);

            setTimeout(() => {
                navigation.replace("OTPSuccess");
                setOtp(null);
            }, 1000)
        }
        else {
            alert(response.data.error);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>We have sent the verification code to your email address, please enter that</Text>
            </View>
            <View style={styles.form_container}>
                <TextInput
                    style={styles.formText}
                    onChangeText={setOtp}
                    value={otp}
                    placeholder={'Enter Your Email'}
                />
                <TouchableOpacity style={styles.btn} onPress={handleContinue}>
                    <Text style={{ fontWeight: '600', color: 'white' }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text1: {
        marginTop: 60,
    },
    textContainer: {
        width: '90%',
        paddingLeft: 20
    },
    form_container: {
        width: '90%',
        marginTop: 40,
        paddingHorizontal: 20
    },
    formText: {
        fontSize: 14,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 20
    },
    btn: {
        borderRadius: 15,
        marginTop: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D71E1E',
    }
})