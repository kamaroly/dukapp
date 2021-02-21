import { types } from 'expo-sqlite-orm'
import Model from './model';

export default class Cart extends Model{

  static get tableName() {
    return 'carts'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
      content: { type: types.JSON, not_null: true, unique: true },
      created_at: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}