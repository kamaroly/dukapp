import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
  Input,
  Divider,
  Overlay,
} from 'react-native-elements';

import styles from '../styles/styles';
import { allColors,dimensions } from '../styles/base';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];

export default function SplashScreen() {
   const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={[styles.container, {backgroundColor:allColors.white}]}>
      <View>
          <Text style={{ marginBottom: 10 }}>
            Fill below form to add new items to your Duka store.
          </Text>
          
          <Divider style={{ backgroundColor: allColors.teal600 }} />

      </View>
    </View>
  );
}
