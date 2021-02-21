import React from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { ListItem } from 'react-native-elements';

import styles from '../../styles/styles';
import InitialIcon from '../../components/InitialIcon';
import { allColors, dimensions } from '../../styles/base';

import useItem from '../../hooks/useItem';

export default function SearchItems({
  visible,
  toggleModal = (f) => f,
  onModalItemChosen = (f) => f,
}) {
  const { items, setItems, searchItems } = useItem();

  const renderItem = (stockItem) => (
    <ListItem bottomDivider onPress={() => onModalItemChosen(stockItem.item)}>
      <ListItem.Content>
        <ListItem.Title>{stockItem.item.name}</ListItem.Title>
        <ListItem.Subtitle>
          <Text style={{ color: allColors.yellow600 }}>
            {'QTY:'} {stockItem.item.quantity}{' '}
          </Text>
          <Text>|</Text>
          <Text style={{ color: allColors.blue600 }}>
            {' U.Price:'}
            {stockItem.item.salePrice.toLocaleString()}
          </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Subtitle>
        <Text style={{ fontWeight: 'bold', color: allColors.green500 }}>
          {stockItem.item.salePrice}
          {' RWF'}
        </Text>
      </ListItem.Subtitle>
    </ListItem>
  );

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.modalContainer}>
          <View style={styles.filterInputContainer}>
            <TextInput
              autoFocus={true}
              onChangeText={searchItems}
              placeholder={'Filter an item'}
              focusable={true}
              style={styles.filterInputStyle}
            />
          </View>

          <FlatList
            style={{ flex: 1 }}
            data={items}
            renderItem={renderItem}
            extraData={items}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <TouchableOpacity style={styles.closeButtonStyle} onPress={toggleModal}>
          <Text style={styles.closeTextStyle}> {'CLOSE'} </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}
