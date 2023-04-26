import { BaseEntity } from "./BaseEntity";
import { ProductOrder } from "./ProductOrder";

export interface OrderSheet extends BaseEntity{
    tableId: number;
    productOrders: Array<ProductOrder>;
    customerId?: number;
}