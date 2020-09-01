import { BProduct } from './bproduct';
import { BEntryProduct } from './bentry-product';

export class BITEntreProduct {
    itentry_product_id:number;
    itentry_product_number_lote:string;
    itentry_product_date_expiration:Date;
    itentry_product_stock_entry:number;
    itentry_product_stock_max:number;
    itentry_product_min:number;
    bProduct:BProduct;
    bEntre_Product:BEntryProduct;
}
