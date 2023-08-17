import {ICartItem} from "./CartItem";
import {IProduct} from "./Product";

export interface IShoppingCart {
    addProduct(product: IProduct, quantity: number): void;
    removeProduct(productId: number): void;
}
export class ShoppingCart implements IShoppingCart{
    private cartItems: ICartItem[];
    constructor(cartItems: ICartItem[]) {
        this.cartItems = cartItems;
    }

    addProduct(product: IProduct, quantity: number): void {
        const existingProduct: ICartItem | undefined = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        if(existingProduct){
            existingProduct.quantity++;
            return;
        }
        this.cartItems.push({product, quantity} as ICartItem);
        return;
    }

    removeProduct(productId: number): void {
        const indexOfExistingProduct = this.cartItems.findIndex(cartItems => cartItems.product.id === productId);
        this.cartItems.splice(indexOfExistingProduct, 1)
        console.log(this.cartItems);
    }
}
