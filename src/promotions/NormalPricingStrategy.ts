import {IPricingStrategy} from "./IPricingStrategy";

export class NormalPricingStrategy implements IPricingStrategy {
    calculatePrice(price: number, quantity: number): number {
        return price * quantity;
    }
}
