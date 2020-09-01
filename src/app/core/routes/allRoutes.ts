import { Routes } from '@angular/router';

//los demas modulos del sistema
export const ALLROUTES:Routes= [
    { 
        path: '',
        loadChildren: ()=> import('../../security/security.module').then(m => m.SecurityModule)
    },
    { 
        path: 'client',
        loadChildren: ()=> import('../../client/client.module').then(m => m.ClientModule)
    },
    { 
        path: 'global',
        loadChildren: ()=> import('../../global/global.module').then(m => m.GlobalModule)
    },
    { 
        path: 'company',
        loadChildren: ()=> import('../../order/order.module').then(m => m.OrderModule)
    },
    { 
        path: 'sale',
        loadChildren: ()=> import('../../venta/venta.module').then(m => m.VentaModule)
    }
];
