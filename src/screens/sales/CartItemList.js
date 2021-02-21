import React from 'react';
import { FlatList, Alert, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import useCart from '../../hooks/useCart';

import styles from '../../styles/styles';
import { colors, allColors, dimensions } from '../../styles/base';

export default function CartItemList({ cart, addItems = (f) => f }) {
  const navigation = useNavigation();
  const { removeCartItem } = useCart();

  const confirmRemoval = (item) => {
    Alert.alert(
      'Delete ' + item.name + '?',
      'Tap yes to confirm the removal of ' + item.name + ' from this sale',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => removeCartItem(item) },
      ],
      { cancelable: false }
    );
  };

  const renderCartItem = (cartItem) => (
    <ListItem
      bottomDivider
      onPress={() =>
        navigation.navigate('CartItemEdit', { item: cartItem.item })
      }
      onLongPress={() => confirmRemoval(cartItem.item)}>
      <ListItem.Content>
        <ListItem.Title>{cartItem.item.name}</ListItem.Title>
        <ListItem.Subtitle>
          <Text style={{ color: allColors.yellow600 }}>
            {'QTY:'} {cartItem.item.quantity}{' '}
          </Text>
          <Text>|</Text>
          <Text style={{ color: allColors.blue600 }}>
            {' U.Price:'}
            {cartItem.item.salePrice.toLocaleString()}
          </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Subtitle>
        <Text style={{ fontWeight: 'bold', color: allColors.green500 }}>
          {(cartItem.item.salePrice * cartItem.item.quantity).toLocaleString()}
          {' RWF'}
        </Text>
      </ListItem.Subtitle>
    </ListItem>
  );

  return (
    <View>
    <ScrollView>
      <FlatList
        data={cart.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCartItem}
      />

      <View style={{ marginTop: 4, marginBottom: 4 }}>
        <TouchableOpacity
          onPress={addItems}
          style={[styles.buttonCta, { backgroundColor: colors.primary }]}>
          <Text style={{ color: colors.primaryText }}>
            {'Add item'}
            <Ionicons name="add-outline" size={16} color={colors.primaryText} />
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
