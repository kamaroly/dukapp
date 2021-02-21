import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class Customer extends Model {
  static get tableName() {
    return 'customers';
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
      name: { type: types.TEXT, not_null: false },
      phone_number: { type: types.INTEGER, unique: true },
      company_name: { type: types.TEXT, default: 1 },
      discount_percent: { type: types.NUMERIC, default: 1 },
      created_at: { type: types.INTEGER, default: () => Date.now() },
    };
  }
}
