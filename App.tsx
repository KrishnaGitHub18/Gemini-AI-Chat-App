import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import ChatScreen from './components/ChatScreen';
import ForgotPassword from './components/ForgotPassword';
import OTP from './components/OTP';
import OTPSuccess from './components/OTPSuccess';

const Stack = createNativeStackNavigator();

const App = () => {
  const darkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#202020',
      text: '#FFFFFF',
    },
  };

  const fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      console.log(token);
    } catch (error) {
      console.error("Error fetching auth token:", error);
    }
  };

  useEffect(() => {
    fetchToken(); 
  }, []); 

  return (
    <Provider store={store}>
      <NavigationContainer theme={darkTheme}>
        <SafeAreaView style={styles.main_container}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#202020' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          >

            <Stack.Screen name="Home" component={LandingPage} />

            <Stack.Screen
              name="Chats"
              component={ChatScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={async () => {
                      await AsyncStorage.removeItem('authToken');
                      navigation.navigate('Home');
                    }}
                    style={{ paddingRight: 10, paddingTop: 8 }}
                  >
                    <Text style={{ color: '#fff' }}>Logout</Text>
                  </TouchableOpacity>
                ),
              })}
            />

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="OTPSuccess" component={OTPSuccess} />

          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});
