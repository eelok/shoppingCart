import {IShoppingCart, ShoppingCart} from "./ShoppingCart";
import {NormalPricingStrategy} from "./pricingStrategies/NormalPricingStrategy";
import {DiscountPricingStrategy} from "./pricingStrategies/DiscountPricingStrategy";
import {BOGOPricingStrategy} from "./pricingStrategies/BOGOPricingStrategy";
import {IProduct} from "./IProduct";

const shoppingCart: IShoppingCart = new ShoppingCart([]);

let pricingStrategyNormal: NormalPricingStrategy = new NormalPricingStrategy();
shoppingCart.addProduct({id: 1, name: "t-shirt", price: 10, pricingStrategy: pricingStrategyNormal}, 1);
shoppingCart.addProduct({id: 2, name: "t-shirt", price: 50, pricingStrategy: pricingStrategyNormal}, 1);
shoppingCart.addProduct({id: 3, name: "pulover", price: 15, pricingStrategy: pricingStrategyNormal}, 2);
shoppingCart.addProduct({id: 22, name: "dress", price: 5, pricingStrategy: pricingStrategyNormal}, 1);
console.log(shoppingCart.getTotal());
shoppingCart.removeProduct(1);
console.log(shoppingCart.getTotal());
shoppingCart.checkout();
console.log(shoppingCart.getTotal());
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

const pricingStrategyDiscount001: DiscountPricingStrategy = new DiscountPricingStrategy(20);
const shoppingCart002: IShoppingCart = new ShoppingCart([]);
shoppingCart002.addProduct({id: 1, name: "t-shirt", price: 10, pricingStrategy: pricingStrategyDiscount001}, 1);
shoppingCart002.addProduct({id: 2, name: "t-shirt", price: 50, pricingStrategy: pricingStrategyDiscount001}, 1);
shoppingCart002.addProduct({id: 3, name: "pulover", price: 15, pricingStrategy: pricingStrategyDiscount001}, 2);
shoppingCart002.addProduct({id: 22, name: "dress", price: 5, pricingStrategy: pricingStrategyDiscount001}, 1);
console.log(shoppingCart002.getTotal());
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

const bogoPricingStrategy: BOGOPricingStrategy = new BOGOPricingStrategy();
const shoppingCart003: IShoppingCart = new ShoppingCart([]);
shoppingCart003.addProduct({id: 1, name: "t-shirt", price: 10, pricingStrategy: bogoPricingStrategy}, 3);
console.log(shoppingCart003.getTotal());

const dress: IProduct = {id: 22, name: "dress", price: 5, pricingStrategy: pricingStrategyNormal};

const jeans: IProduct = {
    id: 23,
    name: "jeans",
    price: 10,
    pricingStrategy: new DiscountPricingStrategy(20)
}

