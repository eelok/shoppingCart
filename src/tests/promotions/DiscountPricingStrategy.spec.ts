import {DiscountPricingStrategy} from "../../promotions/DiscountPricingStrategy";
import {assert} from "chai";

describe('DiscountPricingStrategy', () => {
    it('should return correct price if discount 10 % only one item is purchased', () => {
        const discountPercentage: number = 10;
        const discountPromotionStrategy: DiscountPricingStrategy = new DiscountPricingStrategy(discountPercentage);
        const price: number = 25;
        const quantity: number = 1;
        const expectedPrice: number = (25 - 2.5);

        const result: number = discountPromotionStrategy.calculatePrice(price, quantity);

        assert.equal(result, expectedPrice);
    });
    it('should return correct price if discount 10 % and three item was purchased', () => {
        const discountPercentage: number = 10;
        const discountPromotionStrategy: DiscountPricingStrategy = new DiscountPricingStrategy(discountPercentage);
        const price: number = 25;
        const quantity: number = 3;
        const expectedPrice: number = 67.5;

        const result: number = discountPromotionStrategy.calculatePrice(price, quantity);

        assert.equal(result, expectedPrice);
    });
});

describe('calculateDiscount()', () => {
    it('should calculate 10 % discount', () => {
        const discountPercentage: number = 10;
        const price: number = 25;
        const discountPromotionStrategy: DiscountPricingStrategy = new DiscountPricingStrategy(discountPercentage);
        const expectedDiscount: number = price * (discountPercentage/100);

        const discount: number = discountPromotionStrategy.calculateDiscount(price);

        assert.equal(discount, expectedDiscount);
    });

    it('should calculate 20 % discount', () => {
        const discountPercentage: number = 10;
        const price: number = 25;
        const discountPromotionStrategy: DiscountPricingStrategy = new DiscountPricingStrategy(discountPercentage);
        const expectedDiscount: number = price * (discountPercentage/100);

        const discount: number = discountPromotionStrategy.calculateDiscount(price);

        assert.equal(discount, expectedDiscount);
    });
});
