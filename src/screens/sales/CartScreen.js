import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Image,
  Modal,
  TextInput,
  Picker,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  ListItem,
  Icon,
  Avatar,
  Text,
  Button,
  Divider,
  Overlay,
} from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import AddButton from '../../components/AddButton';
import CancelContinueButton from '../../components/CancelContinueButton';

import styles from '../../styles/styles';
import { colors, allColors, dimensions } from '../../styles/base';

import ConfirmSale from './ConfirmSale';
import SearchItems from './SearchItems';
import CartItemList from './CartItemList';

import useCart from '../../hooks/useCart';
import useItem from '../../hooks/useItem';

export default function CartScreen() {
  const navigation = useNavigation();
  const [paymentMethod, setpaymentMethod] = useState('Cash');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItemEditVisible, setModalItemEditVisible] = useState(false);
  const [itemToEdit, setItemToEdit] = useState();
  const { items, setItems, searchItems } = useItem();
  const [visible, setVisible] = useState(false);

  const toggleConfirmSale = () => {
    setVisible(!visible);
  };

  const {
    cart,
    addCartItem,
    cancelCart,
    clearCart,
    removeCartItem,
    addCartComment,
    completeSale,
  } = useCart();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddButton onPress={onShowSearchItems} />,
    });
  }, []);

  const onShowSearchItems = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const onModalItemChosen = (item) => {
    addCartItem(item);
    onShowSearchItems();
  };

  const afterConfirmation = () => {
    clearCart();
    toggleConfirmSale();
  };

  const showHideContinueButton = () => {
    if (cart.items.length <= 0) {
      return;
    }

    return (
      <CancelContinueButton
        onCancel={cancelCart}
        onContinue={toggleConfirmSale}
      />
    );
  };

  // For us to reach here is because we do have items
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CartItemList cart={cart} addItems={onShowSearchItems} />

        <View
          style={[
            styles.stickToTheBottom,
            { backgroundColor: colors.white, width: dimensions.fullWidth },
          ]}>
          {showHideContinueButton()}
        </View>

        <SearchItems
          visible={modalVisible}
          toggleModal={onShowSearchItems}
          onModalItemChosen={onModalItemChosen}
        />

        <ConfirmSale
          visible={visible}
          toggleOverlay={toggleConfirmSale}
          cart={cart}
          completeSale={completeSale}
          afterConfirmation={afterConfirmation}
        />
      </SafeAreaView>
    </View>
  );
}
