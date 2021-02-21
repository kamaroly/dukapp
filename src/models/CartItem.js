import { types } from 'expo-sqlite-orm'
import Model from './model';

export default class CartItem extends Model{

  static get tableName() {
    return 'cart_items'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, not_null: true, unique: true },
      description: {type: types.TEXT, not_null: true},
      quantity: { type: types.NUMERIC, default: 1 },
      unitPrice: { type: types.NUMERIC, default: 1 },
      salePrice: { type: types.INTEGER, default: 1 },
      itemType: {type: types.TEXT, default: 'product'},
      create_at: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}