import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/Store';

import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import ChatScreen from './components/ChatScreen';

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
            <Stack.Screen name="Chats" component={ChatScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
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
    backgroundColor: "#202020",
  },
});
