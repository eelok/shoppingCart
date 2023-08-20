import {IPricingStrategy} from "./IPricingStrategy";

// (buy one, get one for free) promotion
export class BOGOPricingStrategy implements IPricingStrategy {
    calculatePrice(price: number, quantity: number): number {
        if(quantity === 1){
            return price;
        }
        else if(quantity % 2 === 0){
            return (quantity / 2) * price;
        }
        else return  ((((quantity - 1) / 2)) + 1) * price;
    }
}
