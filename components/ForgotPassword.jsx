import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import vectorFGP from '../assests/Vector-FGP.png'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

export default function ForgotPassword() {

  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  const handleContinue = async () => {
    console.log(email);

    const response = await axios.post('http://10.81.55.172:5000/api/forgotPassword', { email });

    if (response.data.success) {
      alert('OTP successfully sent to your email id');
      setTimeout(
        () => {
          navigation.replace("OTP");
        }
      )
      setEmail();
    }
    else {
      alert(response.data.error);
    }

  }

  return (
    <View style={styles.container}>
      <Image
        source={vectorFGP}
        style={{ marginTop: 50 }}
      />
      <View style={styles.text_container}>
        <Text style={styles.text1}>
          OTP Verification
        </Text>
        <Text style={styles.text2}>
          Enter email to send one time Password
        </Text>
      </View>
      <View style={styles.form_container}>
        <TextInput
          style={styles.formText}
          onChangeText={setEmail}
          value={email}
          placeholder={'Enter Your Email'}
        />
        <TouchableOpacity style={styles.btn} onPress={handleContinue}>
          <Text style={{ fontWeight: '600', color: 'white' }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text_container: {
    width: '90%',
    marginTop: 70,
    paddingLeft: 20
  },
  text1: {
    color: "#D71E1E",
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 15
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