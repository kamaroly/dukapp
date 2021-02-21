import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ProductCataloges } from '../data/ProductCataloges';

import Item from '../models/Item';

/**
 * Hooks that deals with Items in the store
 * 1. Adding Item from a form
 * 2. Editing Item in a form
 * 3. Store Item in the database
 * 4. Retrive item(s) from database
 * 5. Delete item(s) from database.
 */
export default function useItem() {
  const navigation = useNavigation();

  // Initiate our state with detfault values
  const props = {
    name: 'New Item',
    description: 'New Item',
    quantity: 1,
    unitPrice: 2,
    salePrice: 4,
  };

  const [submitButtonText, setSubmitButtonText] = useState('SUBMIT');
  const [deleteButtonText, setDeleteButtonText] = useState('DELETE');
  const [item, setItem] = useState(props);
  const [loadItems, setLoadItems] = useState(false);

  // Collection for the items
  const [items, setItems] = useState([]);
  const [notification, setNotification] = useState(false);

  /**
   * Save new item
   */
  const createItem = useCallback(async () => {
    const itemModel = new Item(item);
    const results = await itemModel.save();

    navigation.setOptions({ title: item.name + ' added!' });
    setSubmitButtonText('Saved!');
    navigation.goBack();
  }, [item, navigation]);

  /**
   * Update an existing item
   */
  const updateItem = useCallback(async () => {
    Item.update(item);

    navigation.setOptions({ title: item.name + ' updated!' });
    setSubmitButtonText(' Updated');
    navigation.goBack();
  }, [item, navigation]);

  /**
   * Destroy an existing item
   */
  const deleteItem = useCallback(async () => {
    Item.destroy(item.id);
    setDeleteButtonText(item.name + ' removed!');

    // Goback after deleting item
    navigation.goBack();
  }, [item, navigation]);

  // Get items
  useEffect(() => {
    async function getItems() {
      await Item.createTable(); // Create table if not exists
      // You can await here
      setItems(await Item.query());
    }

    getItems();
  }, [items]);

  // Search items
  const searchItems = (searchKeyWord) => {
    // Don't perform if keyword is empty
    if (searchKeyWord == '') return items;

    const filteredItems = items.filter((item) => {
      item = JSON.stringify(item).toLowerCase();
      searchKeyWord = searchKeyWord.toLowerCase();
      return item.indexOf(searchKeyWord) > -1;
    });
    setItems(filteredItems);
  };

  const seedItems = () => {
    ProductCataloges.boutique_shop.forEach(async (item) => {
     
      const itemModel = new Item(item);
      const results = await itemModel.save();
    });
  };

   
  const resetStock = () =>{
    Item.destroyAll();
  };

  return {
    item,
    items,
    setItem,
    setItems,
    seedItems,
    resetStock,
    createItem,
    updateItem,
    deleteItem,
    searchItems,
    deleteButtonText,
    submitButtonText,
  };
}
