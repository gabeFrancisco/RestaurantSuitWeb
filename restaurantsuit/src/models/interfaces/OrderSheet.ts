import { BaseEntity } from "./BaseEntity";
import { ProductOrder } from "./ProductOrder";

export interface OrderSheet extends BaseEntity{
    orderState: number;
    openBy: string;
    tableId: number;
    productOrders: Array<ProductOrder>;
    customerId?: number;
}