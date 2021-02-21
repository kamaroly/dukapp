import { types } from 'expo-sqlite-orm';
import Model from './model';

export default class Settings extends Model {
  static get tableName() {
    return 'settings';
  }

  static get columnMapping() {
    return {
      key: { type: types.TEXT, not_null: true, unique: true }, // For while only supports id as primary key
      value: { type: types.TEXT, not_null: true, unique: true },
      created_at: { type: types.INTEGER, default: () => Date.now() },
    };
  }

  static get seeds() {
    return [
      {
        key: 'address',
        value: '123 Nowhere street',
      },
      {
        key: 'company',
        value: 'Dukapp',
      },
      {
        key: 'default_register_mode',
        value: 'sale',
      },
      {
        key: 'default_tax_rate',
        value: '8',
      },
      {
        key: 'default_tax_category',
        value: 'Standard',
      },
      {
        key: 'email',
        value: 'changeme@example.com',
      },
      {
        key: 'fax',
        value: '',
      },
      {
        key: 'phone',
        value: '555-555-5555',
      },
      {
        key: 'return_policy',
        value: 'Test',
      },
      {
        key: 'timezone',
        value: 'America/New_York',
      },
      {
        key: 'website',
        value: '',
      },
      {
        key: 'company_logo',
        value: '',
      },
      {
        key: 'receipt_show_company_name',
        value: '1',
      },
      {
        key: 'receipt_show_taxes',
        value: '0',
      },
      {
        key: 'receipt_show_total_discount',
        value: '1',
      },
      {
        key: 'receipt_show_description',
        value: '1',
      },
      {
        key: 'receipt_show_serialnumber',
        value: '1',
      },
      {
        key: 'invoice_email_message',
        value: 'Dear {CU}, In attachment the receipt for sale $INV',
      },
      {
        key: 'invoice_default_comments',
        value: 'This is a default comment',
      },
      {
        key: 'default_sales_discount',
        value: '0',
      },
      {
        key: 'dateformat',
        value: 'm/d/Y',
      },
      {
        key: 'timeformat',
        value: 'H:i:s',
      },
      {
        key: 'currency_symbol',
        value: '$',
      },
      {
        key: 'number_locale',
        value: 'en_US',
      },
      {
        key: 'thousands_separator',
        value: '1',
      },
      {
        key: 'currency_decimals',
        value: '2',
      },
      {
        key: 'tax_decimals',
        value: '2',
      },
      {
        key: 'quantity_decimals',
        value: '0',
      },
      {
        key: 'country_codes',
        value: 'us',
      },
      {
        key: 'default_tax_1_name',
        value: '',
      },
      {
        key: 'default_tax_1_rate',
        value: '',
      },
      {
        key: 'default_tax_2_name',
        value: '',
      },
      {
        key: 'default_tax_2_rate',
        value: '',
      },
      {
        key: 'language',
        value: 'english',
      },
      {
        key: 'language_code',
        value: 'en-US',
      },
      {
        key: 'date_or_time_format',
        value: '',
      },
    ];
  }
}
