import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Alert,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Models
import Item from '../../models/Item';
// import hooks
import useItem from '../../hooks/useItem';

/**
 * Item form
 */
export default function ItemCreateScreen({ route, navigation }) {
  const { createItem, item, setItem, submitButtonText } = useItem();

  // If this is editing then set it according

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}> Name </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Item Name"
          value={item.name}
          onChangeText={(name) => setItem({ ...item, name: name })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}> Description </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Item Description"
          value={item.description}
          onChangeText={(desc) => setItem({ ...item, description: desc })}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}> Quantity </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Quantity"
          keyboardType="numeric"
          value={item.quantity.toString()}
          onChangeText={(qty) => setItem({ ...item, quantity: qty })}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}> Unit Price </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Unit Price"
          value={item.unitPrice.toString()}
          onChangeText={(uPrice) => setItem({ ...item, unitPrice: uPrice })}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}> Sales Price </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Sales Price"
          keyboardType="numeric"
          value={item.salePrice.toString()}
          onChangeText={(sPrice) => setItem({ ...item, salePrice: sPrice })}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonGreen]}
        onPress={createItem}
        underlayColor="#fff">
        <Text style={styles.buttonText}>{submitButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
    marginBottom: 7,
    margin: 10,
  },
  formGroup: {
    flexDirection: 'row',
  },
  formLabel: {
    flex: 2,
  },
  button: {
    marginRight: 4,
    marginLeft: 4,
    marginTop: 4,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  buttonGreen: {
    backgroundColor: '#2f855a',
    borderColor: '#f0fff4',
  },
  buttonYellow: {
    backgroundColor: '#d69e2e',
    borderColor: '#fefcbf',
  },
  buttonRed: {
    backgroundColor: '#9b2c2c',
    borderColor: '#fed7d7',
  },
  buttonText: {
    color: '#fff5f5',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 6,
    fontSize: 16,
    borderRadius: 2,
    height: 48,
    margin: 18,
    marginTop: 5,
    marginBottom: 2,
    padding: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
});
