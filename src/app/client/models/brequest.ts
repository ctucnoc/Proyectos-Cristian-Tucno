import { BITRequest } from './bitrequest';

export class BRequest {
    request_id:number;
    request_type:string;
    request_condition:string;
    warehouse_origin:number;
    warehouse_origin_description:string;
    warehouse_destination:number;
    warehouse_destination_description:string;
    list:BITRequest[];
}
