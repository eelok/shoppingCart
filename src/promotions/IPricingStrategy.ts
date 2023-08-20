
export interface IPricingStrategy {
    // returns the discounted price.
    calculatePrice(price: number, quantity: number): number;
}


