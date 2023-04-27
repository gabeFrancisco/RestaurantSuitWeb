import { BaseEntity } from "./BaseEntity";
import { Product } from "./Product";

export interface ProductOrder extends BaseEntity{
    orderSheetId: number;
    productId: number;
    product: Product;
    quantity: number;
}