import { BProduct } from 'src/app/client/models/bproduct';
import { BOrder } from './border';

export class BITOrder {
    itorder_id:number;
    itorden_quantity:number;
    bProduct:BProduct;
    bOrder:BOrder;
}
