import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';


export default function ListItem({ title, description, onPress = (f) => f }) {
  return (
    <TouchableHighlight
      activeOpacity={0.4}
      underlayColor="#DDDDDD"
      onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.itemIcon}>
        
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}> {title.toUpperCase()} </Text>
          <Text style={styles.itemDescription}> {description} </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#e2e8f0',
  },
  itemIcon: {
    flex: 2,
    alignSelf: 'center',
    backgroundColor: '#e2e8f0',
  },
  itemDetails: {
    flex: 8,
    backgroundColor: '#e2e8f0',
    borderColor: '#edf2f7',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontWeight: 'normal',
  },
});
