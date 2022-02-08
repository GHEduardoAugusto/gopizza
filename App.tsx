import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from '@hooks/auth';
import { Routes } from './src/routes';

import { Orders } from '@screens/Orders';

import theme from './src/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });
  
  if(!fontsLoaded){
     return  <AppLoading />
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' translucent backgroundColor='transparent'/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}


