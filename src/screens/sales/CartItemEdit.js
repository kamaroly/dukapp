import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles';
import useCart from '../../hooks/useCart';

export default function CartItemEdit() {
  const route = useRoute();
  const navigation = useNavigation();
  const [item, setItem] = useState(route.params.item);
  const { updateCartItem, removeCartItem } = useCart();

  // If this is editing then set it according
  useEffect(() => {
    // Update the title of this page
    navigation.setOptions({ title: ' ' + item.name });
  }, []);

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      setItem({ ...item, quantity: item.quantity - 1 });
    }
  };

  const increaseQuantity = () => {
    setItem({ ...item, quantity: item.quantity + 1 });
  };

  // For us to reach here is because we do have items
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.itemRow,
          { alignContent: 'center', justifyContent: 'center' },
        ]}>
        <Text style={styles.value}> {item.description} </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.label}> {'Quantity'} </Text>
        <Text style={styles.value}> {item.quantity} </Text>

        <TouchableOpacity onPress={decreaseQuantity}>
          <Text style={[styles.button, styles.yellow600]}> {'-'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseQuantity}>
          <Text style={[styles.button, styles.teal600]}> {'+'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.label}> {'Sale Price'} </Text>
        <Text style={styles.value}>
          {item.salePrice.toLocaleString()} {'RWF'}{' '}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.label}> {'Total'} </Text>
        <Text style={styles.value}>
          {' '}
          {(item.quantity * item.salePrice).toLocaleString()} {'RWF'}{' '}
        </Text>
      </View>

      <TouchableOpacity onPress={() => removeCartItem(item)}>
        <View style={[styles.buttonCta, styles.red600]}>
          <Text style={styles.red600}>{'Remove from cart'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => updateCartItem(item)}>
        <View style={[styles.buttonCta, styles.teal600]}>
          <Text style={styles.teal600}> {'Save and Return'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
