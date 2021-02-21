import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Icon } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

import FloatingPlusButton from '../../components/FloatingPlusButton';
import EllipsisVertical from '../../components/EllipsisVertical';
import SearchButton from '../../components/SearchButton';
import InitialIcon from '../../components/InitialIcon';

import styles from '../../styles/styles';
import { colors, allColors, dimensions } from '../../styles/base';

import useItem from '../../hooks/useItem';

export default function ItemsScreen() {
  const navigation = useNavigation();
  const { items, searchItems, seedItems, resetStock } = useItem();
  const actions = [
    {
      text: 'New',
      name: 'bt_accessibility',
      position: 2,
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      title: 'Stock',
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <SearchButton onPress={() => alert('Search is being implemented')} />
          <EllipsisVertical onPress={() => alert('Settings')} />
        </View>
      ),
    });
  }, []);

  // Propose to seed database is tock is empty
  const displayItems = () => {
    if (items.length <= 0) {
      return (
        <View style={{ height: 40 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { flex: 2, backgroundColor: colors.primary },
            ]}
            onPress={seedItems}>
            <Text style={styles.buttonText}>
              {'Would you like to populate your stock?  '}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderStockItem}
        bottomDivider
        chevron
      />
    );
  };

  const renderStockItem = (stockitem) => (
    <ListItem
      bottomDivider
      onPress={() => navigation.navigate('ItemEdit', { item: stockitem.item })}>
      <ListItem.Content>
        <ListItem.Title>{stockitem.item.name}</ListItem.Title>
        <ListItem.Subtitle>
          <Text style={{ color: colors.primary }}>
            {'Sales Price:'}
            {stockitem.item.salePrice.toLocaleString()}
          </Text>
        </ListItem.Subtitle>
      </ListItem.Content>

      <ListItem.Subtitle>
        <Text style={{ fontWeight: 'bold', color: colors.secondary }}>
          {'Stock:'} {stockitem.item.quantity}
        </Text>
      </ListItem.Subtitle>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <View style={{ height: dimensions.fullHeight / 1.2 }}>
        {/** propose to seed items if stock is empty items*/}
        {displayItems()}
      </View>

      <FloatingPlusButton onPress={() => navigation.navigate('Item')} />
    </View>
  );
}
