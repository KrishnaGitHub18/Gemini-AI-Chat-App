import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function MessageBox() {

  const handleGeminiAPI = async () => {
    try {
        const que = "hey";
        const response_API = await axios.post('https://gemini-ai-chat-app.vercel.app/api/apiHandler', { que });
        console.log(response_API.data);
    } catch (error) {
        console.log(error, "error in API handling")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHead_css}>MessageBox</Text>
      <View style={styles.send_button} onTouch={handleGeminiAPI}>
        {/* <Text style={styles.textSend_css}>Send</Text> */}
        <Button 
          title='Send'
          onPress={handleGeminiAPI}
          style={styles.textSend_css}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textHead_css: {
    fontSize: 15,
    color: '#545557',
    fontWeight: '300'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#FFFBFB',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0.2,
    height: 50,
    borderRadius: 20,
    paddingLeft: 20
  },
  send_button: {
    marginRight: 20
  },
  textSend_css: {
    color: "black",
    fontWeight: '500'
  }
})