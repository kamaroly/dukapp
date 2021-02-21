import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class ReceivingItem extends Model {
  static get tableName() {
    return 'receiving_items';
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      item_id: { type: types.INTEGER },
      description: { type: types.TEXT, not_null: false },
      serialnumber: { type: types.TEXT, not_null: false },
      line: { type: types.INTEGER },
      quantity_purchased: { type: types.INTEGER },
      item_cost_price: { type: types.INTEGER },
      item_unit_price: { type: types.INTEGER },
      discount_percent: { type: types.INTEGER },
      receiving_quantity: { type: types.INTEGER, default: 1 },
    };
  }
}
