import { StyleSheet, SafeAreaView, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import HeaderView from './HeaderView';
import Chats from './Chats';
import MessageBox from './MessageBox';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.first_container}>
      {/* <HeaderView /> */}
          <ScrollView>
            <Chats />
          </ScrollView>
          <MessageBox />
      </View>
    </SafeAreaView>
  );
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  first_container: {
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between',
    height: height - 20
  }
});
