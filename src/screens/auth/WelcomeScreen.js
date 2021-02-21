import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import { colors, allColors } from '../../styles/base';

import OpenURLButton from '../../components/OpenURLButton';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.containerAuth}>
      <View>
        <Text style={[styles.header1, { color: colors.secondaryText }]}>
          {'Welcome to DukApp'}
        </Text>
        <Text style={styles.subtitle}>
          {
            'A cross-platform mobile application to manage your small shop(Duka).'
          }
        </Text>
      </View>

      <View style={styles.termsConditions}>
        <OpenURLButton url={'https://google.com'}>
          {' Terms and Conditions '}
        </OpenURLButton>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primaryText }]}
          onPress={() => navigation.navigate('Authentication')}>
          <Text style={[styles.buttonText, { color: colors.primary }]}>
            {'Accept & continue  '}

            <Ionicons
              name="arrow-forward-outline"
              size={16}
              color={colors.primary}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
