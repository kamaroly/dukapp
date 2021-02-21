import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';
import {colors} from '../styles/base';

export default function EllipsisVertical({ onPress = (f) => f}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          right: 14
        }}
        onPress={onPress}>
        <Ionicons name="ellipsis-vertical-outline" size={24} color={colors.primaryText} />
      </TouchableOpacity>
    </View>
  );
}