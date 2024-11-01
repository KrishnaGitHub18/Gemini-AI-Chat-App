import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container_main}>
      <View style={styles.container_one}></View>
      <View style={{backgroundColor: 'blue', height: '30%'}}><View style={styles.container_two}></View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    text_main: {
        color: '#000',
        height: '100vh'
    },
    container_one: {
        backgroundColor: 'blue',
        height: '70%'
    },
    container_two: {
        backgroundColor: '#131314',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})