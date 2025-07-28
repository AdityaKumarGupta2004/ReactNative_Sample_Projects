import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';

type Currency = {
  name: string;
  value: number;
  symbol: string;
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 8 - 10; // For 8 columns

const AppCurrency = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState<Currency | null>(null);

  useEffect(() => {
    if (!inputValue || !targetCurrency) {
      setResultValue('');
      return;
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetCurrency.value;
      const result = `${targetCurrency.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
    } else {
      setResultValue('');
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }
  }, [inputValue, targetCurrency]);

  const buttonPressed = (currency: Currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
        duration: 3000,
      });
      return;
    }

    setTargetCurrency(currency);
  };

  return (
    <>
      <StatusBar backgroundColor="#2d2d2d" barStyle="light-content" />
      <View style={styles.container}>
        {/* Input Section */}
        <View style={styles.topContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.rupeeSymbol}>₹</Text>
            <TextInput
              style={styles.inputField}
              value={inputValue}
              onChangeText={setInputValue}
              maxLength={14}
              keyboardType="number-pad"
              placeholder="Enter amount in Rupees"
              placeholderTextColor="#888"
              clearButtonMode="always"
            />
          </View>

          {resultValue ? (
            <Text style={styles.resultText}>{resultValue}</Text>
          ) : null}
        </View>

        {/* Currency Buttons */}
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={8}
            data={currencyByRupee}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.gridContainer}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.currencyButton,
                  targetCurrency?.name === item.name && styles.selectedButton,
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  rupeeSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  inputField: {
    width: 180,
    fontSize: 16,
    color: '#000',
  },
  resultText: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomContainer: {
    flex: 3,
    paddingHorizontal: 10,
  },
  gridContainer: {
    paddingBottom: 20,
  },
  currencyButton: {
    width: ITEM_WIDTH,
    height: 50,
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  selectedButton: {
    backgroundColor: '#ffeaa7',
  },
});

export default AppCurrency;
