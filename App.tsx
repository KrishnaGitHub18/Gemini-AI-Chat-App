import { View, Text, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import HeaderView from './components/HeaderView'
import MessageBox from './components/MessageBox'
import Chats from './components/Chats'
import { Provider } from 'react-redux'
import store from './store/Store'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main_container}>

        <View style={styles.first_container}>
          <HeaderView />
          <ScrollView>
            <Chats />
          </ScrollView>
          <MessageBox />
        </View>

      </SafeAreaView>
    </Provider>
  )
}

export default App

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  main_container: {
    padding: 10,
    flex: 1,
    backgroundColor: "white",
  },
  first_container: {
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
    height: height - 20
  }
})