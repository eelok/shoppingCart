import {IPricingStrategy} from "./pricingStrategies/IPricingStrategy";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    pricingStrategy: IPricingStrategy;
}
