import { StyleSheet, Text, View, Button, TextInput, } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

export default function MessageBox() {

  const [text, setText] = useState('');

  const handleGeminiAPI = async () => {

    // const que = text;
    // console.log(que);
    // return; 

    try {
      const que = text;

      if (text) {
        const response_API = await axios.post('https://gemini-ai-chat-app.vercel.app/api/apiHandler', { que });
        const cleanedText = response_API.data.replace(/\*/g, '').replace(/\n+/g, ' ');
        console.log(cleanedText);

      } else {
        console.log('Please enter a question');
      }

      setText('');
    } catch (error) {
      console.log(error, "error in API handling")
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textHead_css}>MessageBox</Text> */}

      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder={'Please type here…'}
      />

      <View style={styles.send_button} onTouch={handleGeminiAPI}>
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
  },
  textInput: {
    color: 'black'
  }
})