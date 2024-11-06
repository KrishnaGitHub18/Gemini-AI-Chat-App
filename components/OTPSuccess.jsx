import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OTPSuccess() {

    const navigation = useNavigation();
    const handleContinue = () => {
        navigation.replace('Chats')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Success!</Text>
            <Text style={styles.text2}>Congratulations! You have been successfully authenticated</Text>
            <TouchableOpacity style={styles.btn} onPress={handleContinue}>
                <Text style={{ fontWeight: '600', color: 'white' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 100,
        paddingHorizontal: 40,
    },
    text1: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20
    },
    text2: {
        fontSize: 17,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#D71E1E',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 15
    }
})