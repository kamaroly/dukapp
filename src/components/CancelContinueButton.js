import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { allColors,colors } from '../styles/base';
import styles from '../styles/styles';

export default function CancelContinueButton({
  onCancel = (f) => f,
  onContinue = (f) => f,
}) {
  return (
    <View style={{ flex: 1, flexDirection: 'row'}}>
      {/** Cancel Button */}
      <TouchableOpacity
        style={[styles.button, { flex: 2, backgroundColor: allColors.gray600 }]}
        onPress={onCancel}>
        <Text
          style={[
            styles.buttonText,
            { color: allColors.gray100, fontSize: 16 },
          ]}>
          {'Cancel'}
        </Text>
      </TouchableOpacity>

      {/** Continue Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { flex: 2, backgroundColor: allColors.green500 },
        ]}
        underlayColor="#fff"
        onPress={onContinue}>
        <Text
          style={[
            styles.buttonText,
            { color: allColors.green100, fontSize: 16 },
          ]}>
          {'Continue '}
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={allColors.green100}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
