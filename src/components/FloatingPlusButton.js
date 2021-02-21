import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';
import {colors} from '../styles/base';

export default function FloatingPlusButton({ onPress = (f) => f}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.floatingButton}>
        <Ionicons name="add-outline" size={32} color={colors.primaryText} />
      </TouchableOpacity>
    </View>
  );
}
