import {IPricingStrategy} from "./IPricingStrategy";

export class DiscountPricingStrategy implements IPricingStrategy {

    discountPercentage: number;

    constructor(discountPercentage: number) {
        this.discountPercentage = discountPercentage;
    }
    calculatePrice(price: number, quantity: number): number {
        return (price - this.calculateDiscount(price)) * quantity;
    }

    calculateDiscount(price: number): number {
        return price * (this.discountPercentage / 100);
    }
}
