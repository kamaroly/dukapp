import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Cart from '../models/Cart';
import Sale from '../models/Sale';
import Item from '../models/Item';

export default function useCart() {
  var total = 0;

  const [cart, setCart] = useState({
    customer: {
      phone: null,
      name: null,
      email: null,
    },
    items: [],
    paymentMethod: null,
    total: 0,
    comment: null,
  });

  const navigation = useNavigation();

  const showItems = () => {
    navigation.navigate('StoreItems');
  };

  const clearCart = () => {
    Cart.destroyAll(); // Clear database

    // Update cart
    setCart({
      customer: null,
      items: [],
      paymentMethod: null,
      total: 0,
      comment: null,
    });
  };

  // Get items
  useEffect(() => {
    /**
     * Get cart content from database
     */
    async function getCart() {
      // Create table if not exists
      await Cart.createTable();

      // Update cart
      const cartModel = await Cart.query();
      setCart(cartModel[0].content);

      // Get cart total
      // getCartTotal();

      let cartTotal = 0;
      cartModel[0].content.items.forEach((item) => {
        cartTotal += item.quantity * item.salePrice;
      });

      navigation.setOptions({
        title: 'Cart: ' + cartTotal.toLocaleString() + ' RWF',
      });
    }

    // Get a refreshed cart
    getCart();
  }, [cart, navigation]);

  const refreshState = () => {
    setCart(cart);
  };

  /**
   * Get Cart total
   */
  const getTotal = (item) => {
    total = total + item.salesPrice;
  };

  /**
   * Add new Cart Item
   */
  const addCartItem = useCallback(
    async (item) => {
      let newItems = cart.items;
      // If Item exist in the cart, then increase quantity instead
      // of adding it as duplicate
      const existingIndex = cart.items.findIndex((x) => x.id == item.id);
      if (existingIndex !== -1) {
        // Add quantinty
        cart.items[existingIndex].quantity += 1;
        newItems = cart.items;
      } else {
        // If we reach here, it means that this item is new we
        // need to handle it in its special way.
        item.quantity = 1; // Limit item quantity to one

        newItems = [...cart.items, item];
      }

      // Ensure we only have one cart at time.
      // Delete anything we have in the cart
      await Cart.destroyAll();

      // Store this in the database
      const cartModel = new Cart({ content: { ...cart, items: newItems } });
      await cartModel.save();

      setCart(cartModel.content);
    },
    [cart]
  );

  /**
   * Add new Cart Item
   */
  const updateCartItem = useCallback(
    (item) => {
      let newItems = cart.items;

      // If Item exist in the cart, then increase quantity instead
      // of adding it as duplicate
      const existingIndex = cart.items.findIndex((x) => x.id == item.id);
      // Add quantinty
      cart.items[existingIndex].quantity = item.quantity;
      newItems = cart.items;

      // Ensure we only have one cart at time.
      // Delete anything we have in the cart
      Cart.destroyAll();

      // Store this in the database
      const cartModel = new Cart({ content: { ...cart, items: newItems } });
      cartModel.save();

      setCart(cartModel.content);

      navigation.navigate('Cart');
    },
    [cart, navigation]
  );

  const addCustomer = () => {
    navigation.setOptions({ title: 'Customer ADDED' });
  };

  const addPayment = () => {
    navigation.setOptions({ title: 'Added payment' });
  };

  /**
   * Remove item from the cart
   */
  const removeCartItem = useCallback(
    async (itemToRemove) => {
      // Find the item to be removed by its id
      const remainingItems = cart.items.filter(function (item) {
        return item.id !== itemToRemove.id;
      });

      // Empty the entire cart in order to updated it with new items.
      Cart.destroyAll();

      // Store this in the database
      const newCartContent = { ...cart, items: remainingItems };
      const cartModel = new Cart({ content: newCartContent });
      await cartModel.save();

      setCart(cartModel.content);

      navigation.navigate('Cart');
    },
    [navigation, cart]
  );

  const addCartComment = () => {
    navigation.setOptions({ title: 'Adding Comment' });
  };

  const recordSale = (cart) => {
    const props = {
      customer: cart.customer,
      currency: 'RWF',
      comment: cart.comment,
      discount_total: 0,
      discount_tax: 0,
      cart_tax: 0,
      // Find total for this cart
      total: cart.items.reduce(
        (total, item) => item.quantity * item.salePrice + total,
        0
      ),
      payment_method: 'MPESA',
      items: cart.items,
      sale_status: 'completed',
      sale_type: 'normal-sale',
    };

    // Create table if not exists
    Sale.createTable();

    const sale = new Sale(props);
    sale.save();

    return sale;
  };

  // Complete an order
  const completeSale = useCallback(async (cart, clearCart = true) => {
    // 1. Record sales information
    const sale = recordSale(cart);

    // 2. Reduce Quantity items
    cart.items.forEach(async (item) => {
      const itemToUpdate = await Item.find(item.id);
      itemToUpdate.quantity = itemToUpdate.quantity - item.quantity;
      itemToUpdate.save();
    });

    // 3. Clear cart object
    if (clearCart) {
      clearCart();
    }

    return sale;
  }, []);

  /** Cancel and order */
  const cancelSale = () => {
    clearCart();
  };

  return {
    cart,
    clearCart,
    showItems,
    cancelSale,
    addCartItem,
    addCustomer,
    addPayment,
    removeCartItem,
    addCartComment,
    completeSale,
    updateCartItem,
  };
}
