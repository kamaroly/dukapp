import React from 'react';
import { View, Text } from 'react-native';
import {colors} from '../styles/base';

export default function InitialIcon({ initials }) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: 32,
        height: 32,
      }}>
      <Text style={{ color: colors.primaryText, fontSize: 12 }}>{initials}</Text>
    </View>
  );
}
