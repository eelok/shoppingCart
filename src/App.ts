import {IShoppingCart, ShoppingCart} from "./ShoppingCart";
import {NormalPricingStrategy} from "./pricingStrategies/NormalPricingStrategy";

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


