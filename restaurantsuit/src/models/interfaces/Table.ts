import { BaseEntity } from "./BaseEntity";

export interface Table extends BaseEntity{
    number: number;
    chairs:number;
    isBusy: boolean;
}