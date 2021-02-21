import React, { useState } from 'react';
import {
  SafeAreaView,
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-elements';
import styles from '../../styles/styles';
import { allColors, dimensions } from '../../styles/base';
import { Ionicons } from '@expo/vector-icons';

import useCart from '../../hooks/useCart';

export default function ConfirmSale({
  visible,
  cart,
  completeSale = (f) => f,
  toggleOverlay = (f) => f,
  afterConfirmation = f => f
}) {
  const [isSaleCompleted, setIsSaleCompleted] = useState(false);
  const navigation = useNavigation();
  const [sale, setSale] = useState();

  const confirmSale = () => {
    // 1. Complete
    const newSale = completeSale(cart, false); // False = don't clear cart
    setSale(newSale);

    console.log(newSale);

    // 2. Update the page
    setIsSaleCompleted(true);
  };

  /**
   * Condition customer display
   */
  const displayPaymentMethod = () => {
    // Display Label if payment is done
    if (isSaleCompleted) {
      return (
        <Text
          style={{
            color: allColors.gray900,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {'MPesa'}
        </Text>
      );
    }

    // Give option to change if paymente is not yet confirmed
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: allColors.yellow600 }]}
        onPress={() => alert('You can change payment method')}>
        <Text
          style={[
            styles.buttonText,
            { color: allColors.yellow100, padding: 2 },
          ]}>
          {'M-Pesa'}
        </Text>
      </TouchableOpacity>
    );
  };

  const displayCustomer = () => {
    if (isSaleCompleted) {
      return (
        <Text
          style={{
            color: allColors.gray900,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {'N/A'}
        </Text>
      );
    }

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: allColors.yellow600 }]}
        onPress={() => alert('You can add a customer')}>
        <Text
          style={[
            styles.buttonText,
            { color: allColors.yellow100, padding: 2 },
          ]}>
          {'+ Customer'}
        </Text>
      </TouchableOpacity>
    );
  };

  /**
   * Conditional bottom button display
   */
  const displayBottomButtons = () => {
    // Show continue button if sales is completed
    if (isSaleCompleted) {
      return (
        <View style={[styles.stickToTheBottom, { flexDirection: 'row' }]}>
          <TouchableOpacity
            style={[
              styles.button,
              { flex: 2, backgroundColor: allColors.green500 },
            ]}
            onPress={afterConfirmation}>
            <Text style={styles.buttonText}>
              {'Continue  '}
              <Ionicons
                name="arrow-forward-outline"
                size={16}
                color={allColors.green100}
              />
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    // Ask users whether to cancel or confirm sale
    return (
      <View style={[styles.stickToTheBottom, { flexDirection: 'row' }]}>
        <TouchableOpacity
          style={[
            styles.button,
            { flex: 2, backgroundColor: allColors.gray700 },
          ]}
          onPress={toggleOverlay}
          underlayColor={allColors.gray700}>
          <Text style={styles.buttonText}>{'Cancel'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { flex: 2, backgroundColor: allColors.green500 },
          ]}
          onPress={confirmSale}>
          <Text style={styles.buttonText}>
            {'Confirm  '}

            <Ionicons
              name="checkmark-circle-outline"
              size={16}
              color={allColors.green100}
            />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const displayTransactionDetails = () => {
    if (isSaleCompleted) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: allColors.gray900, fontSize: 16 }}>
            {'Sale #:'}
          </Text>
          <Text>{sale.id}</Text>
        </View>
      );
    }
  };

  /**
   * Display title conditionally
   */
  const displayTitle = () => {
    // Display this is sale is not completed
    if (isSaleCompleted === false) {
      return (
        <Text
          style={{
            fontSize: 22,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: allColors.yellow500,
            marginBottom: 10,
          }}>
          {'CONFIRM SALE'}
        </Text>
      );
    }

    return (
      <Text
        style={{
          fontSize: 24,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: allColors.green500,
          marginBottom: 10,
        }}>
        {/** DISPLAY TOTAL */}
        {cart.items.reduce(
          (total, item) => item.quantity * item.salePrice + total,
          0
        )}{' '}
        {' RWF'}
        {' | Confirmed'}
        <Ionicons
          name="checkmark-done-circle-outline"
          size={24}
          color={allColors.green500}
        />
      </Text>
    );
  };

  return (
    <Modal animationType="none" transparent={false} visible={visible}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.modalContainer}>
          {/**DISPLAY TITLE CONDITIONALLY */}

          {displayTitle()}
          <Divider style={{ backgroundColor: allColors.gray300 }} />
          <View
            style={{
              borderRadius: 4,
              minHeight: dimensions.fullHeight / 4,
              backgroundColor: 'white',
              padding: 10,
              marginBottom: 4,
            }}>
            {displayTransactionDetails()}

            <Divider />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: allColors.gray900,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {'ITEM'}
              </Text>
              <Text
                style={{
                  color: allColors.gray900,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {'PRICE'}
              </Text>
            </View>

            {cart.items.map((item, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 2,
                  }}>
                  <Text style={{ color: allColors.gray900, fontSize: 16 }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: allColors.gray900, fontSize: 16 }}>
                    {item.quantity * item.salePrice} {' RWF'}
                  </Text>
                </View>
              );
            })}

            <Divider
              style={{ backgroundColor: allColors.teal600, marginBottom: 10 }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: allColors.gray900,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {'Total:'}
              </Text>
              <Text
                style={{
                  color: allColors.gray900,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {cart.items.reduce(
                  (total, item) => item.quantity * item.salePrice + total,
                  0
                )}
                {' RWF'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{ color: allColors.gray900, fontSize: 16 }}>
                {'Balance:'}
              </Text>
              <Text style={{ color: allColors.gray900, fontSize: 16 }}>
                {0} {' RWF'}
              </Text>
            </View>

            <Divider
              style={{
                backgroundColor: allColors.yellow400,
                marginBottom: 10,
                marginTop: 10,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: allColors.gray900,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {'Payment Mode:'}
              </Text>

              {/** Change payment method */}
              {displayPaymentMethod()}
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: allColors.gray900,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {'Customer:'}
              </Text>

              {/** Change payment method */}
              {displayCustomer()}
            </View>
          </View>
        </View>
        {/** Display button based on the sale status */}
        {displayBottomButtons()}
      </SafeAreaView>
    </Modal>
  );
}
