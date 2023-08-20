import {NormalPricingStrategy} from "../../promotions/NormalPricingStrategy";
import {assert} from "chai";

describe('NormalPricingStrategy', () => {
    it('should calculate price for item', () => {
        const price: number = 15;
        const quantity: number = 5;
        const normalPricingStrategy: NormalPricingStrategy = new NormalPricingStrategy();
        const expectedPrice: number = price * quantity;

        const result: number =  normalPricingStrategy.calculatePrice(price, quantity);

        assert.equal(result, expectedPrice);
    });
    it('should calculate price for item', () => {
        const price: number = 15;
        const quantity: number = 1;
        const normalPricingStrategy: NormalPricingStrategy = new NormalPricingStrategy();
        const expectedPrice: number = price * quantity;

        const result: number =  normalPricingStrategy.calculatePrice(price, quantity);

        assert.equal(result, expectedPrice);
    });
});
