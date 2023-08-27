import {IProduct} from "./IProduct";
import {NormalPricingStrategy} from "./pricingStrategies/NormalPricingStrategy";
import {DiscountPricingStrategy} from "./pricingStrategies/DiscountPricingStrategy";
import {IProductWithDescription} from "./IProductWithDescription";

export class GenericProduct <T extends IProduct> {
    createProduct(attributes: T): Partial<T> {
        return { ...attributes };
    }
}

const tShirt = new GenericProduct<IProductWithDescription>();
const p = tShirt.createProduct({
    id: 1,
    name: "t-shirt",
    price: 10,
    pricingStrategy: new DiscountPricingStrategy(5),
    description: "This is a t-shirt"
});
