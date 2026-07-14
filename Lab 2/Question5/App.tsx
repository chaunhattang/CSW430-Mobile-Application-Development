import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState('');
  const [waitingSecond, setWaitingSecond] = useState(false);

  const pressNumber = (num: string) => {
    if (waitingSecond) {
      setDisplay(num);
      setWaitingSecond(false);
      return;
    }

    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const pressOperator = (op: string) => {
    if (firstNumber === null) {
      setFirstNumber(parseFloat(display));
      setOperator(op);
      setWaitingSecond(true);
      return;
    }

    if (!waitingSecond) {
      calculate();
      setOperator(op);
    } else {
      setOperator(op);
    }
  };

  const calculate = () => {
    if (firstNumber === null || operator === '') return;

    const second = parseFloat(display);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstNumber + second;
        break;

      case '-':
        result = firstNumber - second;
        break;

      case '×':
        result = firstNumber * second;
        break;

      case '÷':
        if (second === 0) {
          setDisplay('Error');
          setFirstNumber(null);
          setOperator('');
          setWaitingSecond(false);
          return;
        }
        result = firstNumber / second;
        break;

      default:
        return;
    }

    let text = result.toString();

    if (text.endsWith('.0')) {
      text = parseInt(text).toString();
    }

    setDisplay(text);
    setFirstNumber(result);
    setWaitingSecond(true);
  };

  const clear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperator('');
    setWaitingSecond(false);
  };

  const Button = (
    text: string,
    onPress: () => void,
    style: any = {},
    textStyle: any = {}
  ) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text
          style={styles.displayText}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      <View style={styles.keyboard}>
        <View style={styles.row}>
          {Button('7', () => pressNumber('7'))}
          {Button('8', () => pressNumber('8'))}
          {Button('9', () => pressNumber('9'))}
          {Button(
            '÷',
            () => pressOperator('÷'),
            styles.operatorButton,
            styles.operatorText,
          )}
        </View>

        <View style={styles.row}>
          {Button('4', () => pressNumber('4'))}
          {Button('5', () => pressNumber('5'))}
          {Button('6', () => pressNumber('6'))}
          {Button(
            '×',
            () => pressOperator('×'),
            styles.operatorButton,
            styles.operatorText,
          )}
        </View>

        <View style={styles.row}>
          {Button('1', () => pressNumber('1'))}
          {Button('2', () => pressNumber('2'))}
          {Button('3', () => pressNumber('3'))}
          {Button(
            '–',
            () => pressOperator('–'),
            styles.operatorButton,
            styles.operatorText,
          )}
        </View>

        <View style={styles.row}>
          {Button(
            '0',
            () => pressNumber('0'),
            styles.zeroButton,
          )}

          {Button(
            '+',
            () => pressOperator('+'),
            styles.operatorButton,
            styles.operatorText,
          )}

          {Button(
            '=',
            calculate,
            styles.equalButton,
            styles.equalText,
          )}
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          activeOpacity={0.8}
          onPress={clear}>
          <Text style={styles.clearText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;