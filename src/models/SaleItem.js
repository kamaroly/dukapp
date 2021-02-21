import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class SaleItem extends Model {
  static get tableName() {
    return 'sales_items';
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      sale_id: { type: types.INTEGER, not_null:true},
      item_id: { type: types.INTEGER },
      description: { type: types.TEXT, not_null: false },
      serialnumber: { type: types.TEXT, not_null: false },
      line: { type: types.INTEGER },
      quantity_purchased: { type: types.INTEGER },
      item_cost_price: { type: types.INTEGER },
      item_unit_price: { type: types.INTEGER },
      discount_percent: { type: types.INTEGER },
      print_option: { type: types.TEXT, not_null: false },
    };
  }
}
