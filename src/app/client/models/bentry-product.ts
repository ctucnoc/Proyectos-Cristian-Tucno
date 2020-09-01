import { BWarehouse } from './bwarehouse';
import { BProviderClient } from 'src/app/global/models/bprovider-client';
import { BITEntreProduct } from './bitentre-product';

export class BEntryProduct {
    entry_product_id:number;
    entry_product_document_type:string;
    entry_product_document_number:string;
    entry_product_type:string;
    bWarehouse:BWarehouse;
    bProvider_Client:BProviderClient;
    bITEntry_Product:BITEntreProduct[];
}
