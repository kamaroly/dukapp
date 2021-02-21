import { types } from 'expo-sqlite-orm'
import Model from './model';

export default class Item extends Model{

  static get tableName() {
    return 'items'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
      name: { type: types.TEXT, not_null: true, unique: true },
      description: {type: types.TEXT, not_null: true},
      quantity: { type: types.NUMERIC, default: 1 },
      unitPrice: { type: types.NUMERIC, default: 1 },
      salePrice: { type: types.INTEGER, default: 1 },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}