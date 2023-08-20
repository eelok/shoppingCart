import {BOGOPricingStrategy} from "../../promotions/BOGOPricingStrategy";
import {expect} from "chai";

describe('BOGOPricingStrategy', () => {
    it('should return correct price if only one item is purchased', () => {
        const bOGOPromotion: BOGOPricingStrategy = new BOGOPricingStrategy();
        const price: number = 25;
        const quantity: number = 1;

        const result: number = bOGOPromotion.calculatePrice(price, quantity);

        expect(result).to.be.equal(25);
    });
    it('should return correct price if 2 item is purchased', () => {
        const bOGOPromotion: BOGOPricingStrategy = new BOGOPricingStrategy();
        const price: number = 25;
        const quantity: number = 2;

        const result: number = bOGOPromotion.calculatePrice(price, quantity);

        expect(result).to.be.equal(25);
    });
    it('should return correct price if 4 item is purchased', () => {
        const bOGOPromotion: BOGOPricingStrategy = new BOGOPricingStrategy();
        const price: number = 25;
        const quantity: number = 4;

        const result: number = bOGOPromotion.calculatePrice(price, quantity);

        expect(result).to.be.equal(50);
    });
    it('should return correct price if 6 item is purchased', () => {
        const bOGOPromotion: BOGOPricingStrategy = new BOGOPricingStrategy();
        const price: number = 25;
        const quantity: number = 6;

        const result: number = bOGOPromotion.calculatePrice(price, quantity);

        expect(result).to.be.equal(75);
    });
    it('should return correct price if 3 item is purchased', () => {
        const bOGOPromotion: BOGOPricingStrategy = new BOGOPricingStrategy();
        const price: number = 15;
        const quantity: number = 3;

        const result: number = bOGOPromotion.calculatePrice(price, quantity);

        expect(result).to.be.equal(30);
    });
    it('should return correct price if 5 item is purchased', () => {
        const bOGOPromotion: BOGOPricingStrategy = new BOGOPricingStrategy();
        const price: number = 15;
        const quantity: number = 5;

        const result: number = bOGOPromotion.calculatePrice(price, quantity);

        expect(result).to.be.equal(45);
    });
});
