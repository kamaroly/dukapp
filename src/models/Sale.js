import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class Sale extends Model {
  static get tableName() {
    return 'sales';
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      created_at: { type: types.INTEGER, default: () => Date.now() },
      customer: { type: types.JSON, not_null: false },
      currency: { type: types.TEXT, not_null: false },
      comment: { type: types.TEXT, not_null: false },
      discount_total: { type: types.TEXT, not_null: false },
      discount_tax: { type: types.TEXT, not_null: false },
      cart_tax: { type: types.TEXT, not_null: false },
      total: { type: types.TEXT, gnot_null: false },
      payment_method: { type: types.TEXT, not_null: false },
      items: { type: types.JSON, not_null: false },
      sale_status: { type: types.TEXT, not_null: true },
      sale_type: { type: types.TEXT, not_null: true },
    };
  }
}
