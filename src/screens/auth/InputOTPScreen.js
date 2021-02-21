import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import { colors } from '../../styles/base';

export default function InputOTPScreen({ navigation }) {
  let textInput = useRef(null);
  let clockcall = null;
  const lengthInput = 6;
  const [internalVal, setInternalVal] = useState('');
  const [enableResend, setEnableResend] = useState(false);
  const defaultCountDown = 30;
  const [countDown, setCountDown] = useState(defaultCountDown);

  const onChangeOTPText = (OTPText) => {
    setInternalVal(OTPText);
    // Go Home after Authentication
    if (OTPText.length == lengthInput) {
      navigation.navigate('Home');
    }
  };

  const onChangeNumber = () => {
    setInternalVal('');
  };

  const onResendOTP = () => {
    if (enableResend) {
      setCountDown(defaultCountDown);
      setEnableResend(false);
      clearInterval(clockcall);

      clockcall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  const decrementClock = () => {
    if (countDown < 1) {
      return;
    }
    setCountDown(countDown - 1);
  };

  useEffect(() => {
    clockcall = setInterval(() => {
      decrementClock();
    }, 1000);

    return () => {
      clearInterval(clockcall);
    };

    // Focus text input
  }, [countDown]);

  useEffect(() => {
    textInput.focus();
    // Go Home after Authentication
    if (internalVal.length == lengthInput) {
      navigation.navigate('Home');
    }
  }, []);

  return (
    <View
      style={[styles.containerAuth, { backgroundColor: colors.tertiaryText }]}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}>
        <Text style={styles.textTitle}>
          {'Input your OTP Code sent via SMS'}
        </Text>

        <TextInput
          ref={(input) => (textInput = input)}
          onChangeText={onChangeOTPText}
          style={{ color: 'transparent' }}
          maxLength={lengthInput}
          returnKeyType="done"
          keyboardType="numeric"
          caretHidden={true}
        />
        <View style={styles.containerInput}>
          {Array(lengthInput)
            .fill()
            .map((data, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.cellView,
                    {
                      borderBottomColor:
                        index == internalVal.length ? '#68d391' : '#285e61',
                    },
                  ]}>
                  <Text style={styles.cellText} onPress={() => alert('text')}>
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ''}
                  </Text>
                </View>
              );
            })}
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.btnChangeNumber}
            onPress={onChangeNumber}>
            <Text style={styles.textChangeNumber}>{'Change number'} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnResendOTP} onPress={onResendOTP}>
            <Text style={styles.textbtnResendOTP}>
              Resend OTP ({countDown})
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
