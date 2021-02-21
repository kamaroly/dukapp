import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class SalePayment extends Model {
  static get tableName() {
    return 'sales_payments';
  }

  static get columnMapping() {
    return {
      sale_id: { type: types.INTEGER },
      payment_type: { type: types.TEXT, not_null: false },
      payment_amount: { type: types.INTEGER }
    };
  }
}