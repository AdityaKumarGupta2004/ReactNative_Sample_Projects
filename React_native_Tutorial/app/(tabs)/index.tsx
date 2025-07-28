import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>☕ Brew & Bean</Text>
        <Text style={styles.subHeader}>Your Daily Dose of Coffee</Text>
      </View>

      {/* Coffee List */}
      <View style={styles.coffeeList}>
        {coffeeMenu.map((item, index) => (
          <View key={index} style={styles.coffeeCard}>
            <Image source={{ uri: item.image }} style={styles.coffeeImage} />
            <View style={styles.coffeeInfo}>
              <Text style={styles.coffeeName}>{item.name}</Text>
              <Text style={styles.coffeePrice}>₹{item.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const coffeeMenu = [
  {
    name: 'Espresso',
    price: 120,
    image: 'https://images.unsplash.com/photo-1587912871262-825d4e1a5d90',
  },
  {
    name: 'Cappuccino',
    price: 150,
    image: 'https://images.unsplash.com/photo-1605477832671-fd07c78fcba0',
  },
  {
    name: 'Latte',
    price: 140,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
  },
  {
    name: 'Cold Brew',
    price: 160,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf7',
  },
  header: {
    padding: 24,
    backgroundColor: '#6f4e37',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    color: '#e0c9a6',
    marginTop: 4,
  },
  coffeeList: {
    padding: 16,
  },
  coffeeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
  },
  coffeeImage: {
    width: 100,
    height: 100,
  },
  coffeeInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3e2723',
  },
  coffeePrice: {
    fontSize: 16,
    color: '#8d6e63',
    marginTop: 4,
  },
});

export default App;
