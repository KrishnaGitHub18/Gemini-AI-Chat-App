import { StyleSheet, Text, View, Button, TextInput, Alert, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setChatData } from '../store/chatDataSlice'
import SendIcon from '../assests/SendIcon.png'

export default function MessageBox() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();


  const handleGeminiAPI = async () => {

    try {
      const que = text;

      if (text) {
        // const response_API = await axios.post('https://gemini-ai-chat-app.vercel.app/api/apiHandler', { que });
        const response_API = await axios.post('http://10.81.55.172:5000/api/apiHandler', { que });
        if (response_API.data.success) {
          console.log("done hai");
          fetchChatData();
        }
        else {
          console.log("error hai");
        }

      } else {
        console.log('Please enter a question');
      }
      setText('');

    } catch (error) {
      console.log(JSON.stringify(error.message), "error in API handling")
    }
  }

  const fetchChatData = async () => {
    const response_chatAPI = await axios.get('https://gemini-ai-chat-app.vercel.app/api/printData');
    // console.log(response_chatAPI.data);
    dispatch(setChatData(response_chatAPI.data));
  }

  useEffect(() => {
    fetchChatData();
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
      </View>
      <TouchableOpacity style={styles.send_button} onPress={handleGeminiAPI}>
        <Image
          source={SendIcon}
          style={{ width: 26, height: 22 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    backgroundColor: '#363636',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  textHead_css: {
    fontSize: 15,
    color: '#545557',
    fontWeight: '300'
  },
  container: {
    backgroundColor: '#292929',
    marginHorizontal: 2,
    height: 50,
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  send_button: {
    height: 50,
    // width: '14%',
    width: 50,
    marginHorizontal: 7,
    borderRadius: 25,
    backgroundColor: '#E64444',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSend_css: {
    color: "black",
    fontWeight: '500'
  },
  textInput: {
    color: 'white'
  }
})