import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function AppPro() {
  const colorScheme = useColorScheme(); 

  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#111' : '#fff'}
      />
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        {isDarkMode ?'Hello World' : 'Hello World!!!'}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightContainer: {
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});
