import {ICartItem} from "./ICartItem";
import {IProduct} from "./IProduct";

export interface IShoppingCart {
    addProduct(product: IProduct, quantity: number): void;
    removeProduct(productId: number): void;
    // Calculate and return the total cost of the products in the cart.
    getTotal(): number;
    // Display a message with the total cost and empty the cart.
    checkout(): void;
}

export class ShoppingCart implements IShoppingCart {
    private cartItems: ICartItem[];

    constructor(cartItems: ICartItem[]) {
        this.cartItems = cartItems;
    }

    addProduct(product: IProduct, quantity: number): void {
        const existingProduct: ICartItem | undefined = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
            return;
        }
        this.cartItems.push({product, quantity} as ICartItem);
    }

    removeProduct(productId: number): void {
        const indexOfExistingProduct = this.cartItems.findIndex(cartItems => cartItems.product.id === productId);
        this.cartItems.splice(indexOfExistingProduct, 1);
    }

    getTotal(): number {
        return this.cartItems.reduce((acc, currVal): number => {
            const price = currVal.product.price;
            const quantity = currVal.quantity;
            const totalFoProduct = currVal.product.pricingStrategy.calculatePrice(price, quantity);
            return acc + totalFoProduct;
        }, 0);
    }

    checkout(): void {
        console.log("total: ", this.getTotal());
        this.emptyCart();
    }

    private emptyCart() {
        this.cartItems.splice(0, this.cartItems.length);
    }
}
