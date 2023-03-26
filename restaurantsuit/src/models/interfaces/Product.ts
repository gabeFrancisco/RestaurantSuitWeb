import { BaseEntity } from "./BaseEntity";

export interface Product extends BaseEntity{
    name: string;
    categoryId: number;
    categoryName: string,
    quantity: number;
    price: number;
}