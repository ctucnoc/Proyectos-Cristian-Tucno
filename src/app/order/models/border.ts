import { BClient } from './bclient';

export class BOrder {
    order_id:number;
    order_condition:string;
    order_delibery_type:string;
    data_creation:Date;
    bClient:BClient;
}
