import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';

import Sale from '../../models/Sale';
import styles from '../../styles/styles';
import { allColors } from '../../styles/base';
import EllipsisVertical from '../../components/EllipsisVertical';
import SearchButton from '../../components/SearchButton';

import { useNavigation } from '@react-navigation/native';

export default function ReportsScreen() {
  const [sales, setSales] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    async function getSales() {
      const sales = await Sale.query();
      setSales(sales);

      console.log(sales);
    }

    getSales();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: 'Reports',
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <SearchButton onPress={() => alert('Search is being implemented')} />
          <EllipsisVertical onPress={() => alert('Settings')} />
        </View>
      ),
    });
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = (sale) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <TouchableOpacity onPress={() => console.log(sale.item)}>
          <ListItem.Title>
            {'Sale #'} {sale.item.id}
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text style={{ fontWeight: 'bold', color: allColors.green500 }}>
              {'Total:'} {sale.item.total} {sale.item.currency}
            </Text>
            {' | '}
            <Text style={{ color: allColors.yellow600 }}>
              {' QTY:'}
              {sale.item.items.reduce(
                (total, item) => item.quantity + total,
                0
              )}
            </Text>
            {' | '}
            <Text style={{ color: allColors.blue600 }}>
              {' Items:'} {sale.item.items.length}
            </Text>
          </ListItem.Subtitle>
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={sales}
        renderItem={renderItem}
      />
    </View>
  );
}
