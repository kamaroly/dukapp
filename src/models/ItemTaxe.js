import { types } from 'expo-sqlite-orm'
import Model from './model';

export default class ItemTaxe extends Model{

  static get tableName() {
    return 'item_taxes'
  }

  static get columnMapping() {
    return {
      item_id: { type: types.NUMERIC, default: 1 },
      name: { type: types.TEXT, not_null: true, unique: true },
      description: {type: types.TEXT, not_null: false},
      percent: { type: types.NUMERIC, default: 1 },
      created_at: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}