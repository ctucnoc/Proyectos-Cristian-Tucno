import { BCategory } from './bcategory';

export class BProduct {
    product_id:string;
    product_name:string;
    product_name_summary:string;
    product_print_label:string;
    product_refrigeration:string;
    product_control_lot:string;
    product_control_expiration:string;
    bCategory:BCategory;
}
