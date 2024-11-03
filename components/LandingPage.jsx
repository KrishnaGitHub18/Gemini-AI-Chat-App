import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackgroundImage from '../assests/BackgroundImage.png'
import { useNavigation } from '@react-navigation/native'

export default function LandingPage() {

    const navigation = useNavigation()

    const handleNavig = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.containerMain}>
            <Image
                source={BackgroundImage}
            />
            <Text style={styles.textType1}>The Future of Chat is Here With AI Technology</Text>
            <Text style={styles.textType2}>"The future of chat is here with AI technology" implies that the integration of AI into chat technology is already happening and that it's an exciting development for the way we communicate. AI-powered chatbots are becoming increasingly sophisticated and are able to understand and respond to natural language.</Text>
            <TouchableOpacity style={styles.launchButton} onPress={handleNavig}>
                <Text style={styles.textType3}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        alignItems: 'center'
    },
    textType1: {
        position: 'absolute',
        color: 'white',
        fontSize: 24,
        top: 510,
        textAlign: 'left',
        marginHorizontal: 40
    },
    textType2: {
        position: 'absolute',
        color: '#DEDEDE',
        fontSize: 10,
        top: 590,
        textAlign: 'left',
        marginHorizontal: 50
    },
    launchButton: {
        position: 'absolute',
        top: 710,
        height: 50,
        width: 320,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F74141',
    },
    textType3: {
        color: 'white',
        fontWeight: '700'
    }
})