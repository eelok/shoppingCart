import {ICartItem} from "./CartItem";
import {IProduct} from "./Product";

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
            if (currVal.quantity !== 1) {
                const priceByQuantity: number = currVal.product.price * currVal.quantity;
                return acc + priceByQuantity;
            }
            return acc + currVal.product.price;
        }, 0);
    };

    checkout(): void {
        console.log("total: ", this.getTotal());
        this.emptyCart();
    }

    private emptyCart() {
        this.cartItems.splice(0, this.cartItems.length);
    }
}

const shoppingCart: IShoppingCart = new ShoppingCart([]);
shoppingCart.addProduct({id: 1, name: "t-shirt", price: 10}, 1);
shoppingCart.addProduct({id: 3, name: "pulover", price: 15}, 2);
shoppingCart.addProduct({id: 2, name: "dress", price: 3}, 5);
shoppingCart.addProduct({id: 22, name: "dress001", price: 10}, 1);
shoppingCart.removeProduct(1);
shoppingCart.checkout();
shoppingCart.getTotal();
