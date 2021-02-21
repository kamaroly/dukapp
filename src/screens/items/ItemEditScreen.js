import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Input, Card } from 'react-native-elements';

import HistoryButton from '../../components/HistoryButton';

import styles from '../../styles/styles';
import { colors } from '../../styles/base';

// Models
import Item from '../../models/Item';

// import hooks
import useItem from '../../hooks/useItem';

/**
 * Item form
 */
export default function ItemEditScreen({ route }) {
  const {
    updateItem,
    deleteItem,
    item,
    setItem,
    submitButtonText,
    deleteButtonText,
  } = useItem();

  const navigation = useNavigation();

  // If this is editing then set it according
  useEffect(() => {
    setItem(route.params.item);

    // Update the title of this page
    navigation.setOptions({
      title: route.params.item.name,
      headerRight: () => (
        <HistoryButton onPress={() => alert('See history for this item')} />
      ),
    });
  }, []);

  const addToCart = (f) => f;

  return (
    <View style={[styles.container, {backgroundColor: '#ffffff'}]}>
      <Input
        label="Name"
        placeholder="Item Name"
        value={item.name}
        onChangeText={(name) => setItem({ ...item, name: name })}
      />
      <Input
        label="Description"
        placeholder="Item Description"
        value={item.description}
        onChangeText={(desc) => setItem({ ...item, description: desc })}
      />
      <Input
        label="Quantity"
        placeholder="Item Quantity"
        value={item.quantity.toString()}
        onChangeText={(qty) => setItem({ ...item, quantity: qty })}
      />
      <Input
        label="Unit Price"
        placeholder="0"
        style={{ flex: 2 }}
        value={item.unitPrice.toString()}
        onChangeText={(uPrice) => setItem({ ...item, unitPrice: uPrice })}
      />
      <Input
        label="Sales Price"
        placeholder="0"
        style={{ flex: 2 }}
        value={item.salePrice.toString()}
        onChangeText={(sPrice) => setItem({ ...item, salePrice: sPrice })}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[styles.button, styles.buttonRed, { flex: 2 }]}
          onPress={() => deleteItem()}
          underlayColor="#c53030">
          <Text style={styles.buttonText}>{deleteButtonText}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary, flex: 2 }]}
          onPress={updateItem}
          underlayColor="#fff">
          <Text style={[styles.buttonText, { color: colors.primaryText }]}>
            {submitButtonText}
            <Ionicons
              name="checkmark-done-circle-outline"
              size={24}
              color={colors.primaryText}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
