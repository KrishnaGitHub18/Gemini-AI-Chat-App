import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Logo from '../assests/logo.png'

export default function HeaderView() {
    return (
        <View  style={styles.container}>
            <Image 
                source={Logo}
                style={{width: 80, height: 50}}
            />
            <Image 
                source={{uri: 'https://ongpng.com/wp-content/uploads/2023/06/person-icon1.png'}}
                style={{width: 40, height: 40, borderRadius: 30}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 2,
        // borderWidth: 2,
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 40

    }
})