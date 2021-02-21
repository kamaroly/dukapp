import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/styles';
import { colors } from '../../styles/base';

import { Countries } from '../../data/Countries';

export default function AuthenticationScreen({ navigation }) {
  let textInput = useRef(null);
  const defaultCodeCountry = '+250';
  const defaultMaskCountry = '722 123 127';
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, setFocusInput] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataCountries, setDataCountries] = useState(Countries);
  const [codeCountry, setCodeCountry] = useState(defaultCodeCountry);
  const [placeholder, setDefaultPlaceHolder] = useState(defaultMaskCountry);

  const onShowHideModal = () => {
    setModalVisible(!modalVisible);
  };

  const onChangePhone = (number) => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if (phoneNumber) {
      navigation.navigate('InputOTP');
    }
  };

  const onChangeFocus = () => {
    setFocusInput(true);
  };

  const onChangeBlur = () => {
    setFocusInput(false);
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  const filterCountries = (val) => {
    if (val) {
      const countryData = dataCountries.filter(
        (obj) => obj.en.indexOf(val) > -1 || obj.dialCode.indexOf(val) > -1
      );

      return setDataCountries(countryData);
    }

    setDataCountries(Countries);
  };

  const onCountryChange = (item) => {
    setCodeCountry(item.dialCode);
    setDefaultPlaceHolder(item.mask);
    onShowHideModal();
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => onCountryChange(item)}>
      <View style={styles.countryModalStyle}>
        <View style={styles.modalItemContainer}>
          <Text style={styles.modalItemName}> {item.en} </Text>
          <Text style={styles.modalItemDialcode}> {item.dialCode}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const showContinueButton = () => {
    if (phoneNumber) {
      return (
        <View style={{ marginTop: 16 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.primary },
            ]}
            onPress={onPressContinue}
            underlayColor="#fff">
            <Text style={[styles.buttonText, { color: colors.primaryText }]}>
              {' Continue '}
              <Ionicons
                name="arrow-forward-outline"
                size={16}
                color={colors.primaryText}
              />
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  let renderModal = () => {
    return (
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.modalContainer}>
            <View style={styles.filterInputContainer}>
              <TextInput
                autoFocus={true}
                onChangeText={filterCountries}
                placeholder={'Filter'}
                focusable={true}
                style={styles.filterInputStyle}
              />
            </View>

            <FlatList
              style={{ flex: 1 }}
              data={dataCountries}
              renderItem={renderItem}
              extraData={dataCountries}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <TouchableOpacity style={styles.closeButtonStyle}>
            <Text style={styles.closeTextStyle}> {'CLOSE'} </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    );
  };

  return (
    <View
      style={[styles.containerAuth, { backgroundColor: colors.tertiaryText }]}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}>
        <Text style={styles.header1}>
          {'Please input your mobile phone number'}{' '}
        </Text>

        <View
          style={[
            styles.containerInput,
            {
              borderBottomColor: phoneNumber ? colors.primary : '',
            },
          ]}>
          <TouchableOpacity onPress={onShowHideModal}>
            <View style={styles.openDialogView}>
              <Text>{codeCountry + ' | '} </Text>
            </View>
          </TouchableOpacity>

          {renderModal()}

          <TextInput
            ref={(input) => (textInput = input)}
            style={styles.phonInputStyle}
            placeholder={placeholder}
            keyboardType={'numeric'}
            maxLength={9}
            onChange={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            returnKeyType="done"
            onBlur={onChangeBlur}
          />
        </View>

        {showContinueButton()}
      </KeyboardAvoidingView>
    </View>
  );
}
