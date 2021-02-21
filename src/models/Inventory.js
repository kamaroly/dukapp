import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class Inventory extends Model {
  static get tableName() {
    return 'inventories';
  }

  static get columnMapping() {
    return {
     id: { type: types.INTEGER, primary_key: true },
     item_id: { type: types.INTEGER },
     item_sales_price:  { type: types.INTEGER, default: 0 },
     item_unit_price:  { type: types.INTEGER, default: 0 },
     item_quantity:  { type: types.INTEGER, default: 0 },
     trans_type:  { type: types.TEXT, default: 'sale' }, // Sale / Receive / Edit
     trans_comment: { type: types.TEXT, default: 'Sale' },
     created_at:{ type: types.INTEGER, default: () => Date.now() },
    };
  }
}
