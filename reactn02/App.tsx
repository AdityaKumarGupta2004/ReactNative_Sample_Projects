import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  // Step 1: Define state variable for click count
  const [count, setCount] = useState(0);

  // Step 2: Function to handle button click
  const handleClick = () => {
    setCount(count + 1); // Increase count
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>You clicked {count} times</Text>

        <Button
          title="Click Me"
          onPress={handleClick}
          color="#4CAF50"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f0f0'
  },
  inner: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333'
  }
});


// export default App