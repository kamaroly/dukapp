import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import styles from '../../styles/styles';

import customers from './../../../assets/icons/customers.png';

export default function homeMenuItem({ title, onPress = (f) => f, icon }) {
  return (
    <TouchableHighlight
      style={styles.homeMenuItem}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}>
      <View>
        <Image
          source={icon}
          style={styles.homeMenuItemIcon}
        />
        <Text style={styles.homeMenuItemTitle}> {title} </Text>
      </View>
    </TouchableHighlight>
  );
}

