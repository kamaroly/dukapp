import { types } from 'expo-sqlite-orm'
import Model from './model';

export default class Receiving extends Model{

  static get tableName() {
    return 'receivings'
  }

  static get columnMapping() {
    return {
      receiving_id: { type: types.INTEGER, primary_key: true },
      supplier_name: { type: types.TEXT, not_null: true },
      comment: {type: types.TEXT, not_null: false},
      payment_type: {type: types.TEXT, not_null: false},
      reference: {type: types.TEXT, not_null: false, unique: true},
      created_at: { type: types.INTEGER, default: () => Date.now() },
    }
  }
}