import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import {Header} from 'react-native-elements';
import HomeMenuItem from './HomeMenuItem';

import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/styles';
import { colors } from '../../styles/base';


import useItem from '../../hooks/useItem';

// You can import from local files
import customers from './../../../assets/icons/customers.png';
import items from './../../../assets/icons/items.png';
import sales from './../../../assets/icons/sales.png';
import reports from './../../../assets/icons/reports.png';
import employees from './../../../assets/icons/employees.png';
import settings from './../../../assets/icons/settings.png';
import { useNavigation } from '@react-navigation/native';

export default function homeScreen() {

  const navigation = useNavigation();
  const {seedItems} = useItem();
  
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>


  return (
    <View style={styles.container}>
      <Text style={{fontSize:16, color: colors.secondary}}>
        {'Happy Day! Please chose menu below to start. '}
        
      </Text>
      <View style={styles.homeRow}>
        <HomeMenuItem
          title="Sales"
          icon={sales}
          onPress={() => navigation.navigate('Cart')}
        />
        <HomeMenuItem
          title="Items"
          icon={items}
          onPress={() => navigation.navigate('Items')}
        />
      </View>

      <View style={styles.homeRow}>
        <HomeMenuItem
          title="Customers"
          icon={customers}
          onPress={() => navigation.navigate('Customers')}
        />
        <HomeMenuItem
          title="Reports"
          icon={reports}
          onPress={() => navigation.navigate('Reports')}
        />
      </View>

      <View style={styles.homeRow}>
        <HomeMenuItem
          title="Employees"
          icon={employees}
          onPress={() => navigation.navigate('Employees')}
        />
        <HomeMenuItem
          title="Settings"
          icon={settings}
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
}
