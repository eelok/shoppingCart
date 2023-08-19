import {ShoppingCart} from "../ShoppingCart";
import {ICartItem} from "../CartItem";
import {IProduct} from "../Product";
import {assert} from "chai";

describe('ShoppingCart addProduct', () => {
    it('should add new product to shopping cart', () => {
        const tShirt: IProduct = {
            id: 456,
            name: "t-shirt",
            price: 35,
        };
        const dress: IProduct = {
                id: 67,
                name: "dress",
                price: 80,
        };
        const cartItems: ICartItem[] = [{
            product: tShirt,
            quantity: 2
        }];
        const shoppingCart = new ShoppingCart(cartItems);

        shoppingCart.addProduct(dress, 1);

        assert.equal(cartItems.length, 2);
        assert.deepEqual(cartItems[1], {product: dress, quantity: 1} as ICartItem);
    });

    it('should increase quantity of a product if such product is already exist a shopping Cart', () =>{
        const dress: IProduct = {
                id: 67,
                name: "dress",
                price: 80,
        }
        const cartItems: ICartItem[] = [{
            product: dress,
            quantity: 1
        }];
        const shoppingCart = new ShoppingCart(cartItems);

        shoppingCart.addProduct(dress, 1);

        assert.equal(cartItems.length, 1);
        assert.equal(cartItems[0].quantity, 2);
    });
    it('should add first item in shopping cart', () => {
        const dress: IProduct = {
            id: 67,
            name: "dress",
            price: 80,
        };
        let cartItem: ICartItem[] = [];
        const shoppingCart = new ShoppingCart(cartItem);

        shoppingCart.addProduct(dress, 1);

        assert.equal(cartItem.length,1);
        assert.deepEqual(cartItem[0].product, dress);
        assert.deepEqual(cartItem[0].quantity, 1);
    });
});

describe('ShoppingCart removeProduct()', () => {
    it('should remove product from shoppingCart', () => {
        const tShirt: IProduct = {
            id: 456,
            name: "t-shirt",
            price: 35,
        };
        const dress: IProduct = {
            id: 67,
            name: "dress",
            price: 80,
        };
        const cartItems: ICartItem[] = [
            {
                product: tShirt,
                quantity: 2
            },
            {
                product: dress,
                quantity: 1
            }
        ];
        const shoppingCart: ShoppingCart = new ShoppingCart(cartItems);

        shoppingCart.removeProduct(67);
        console.log(cartItems);
        assert.equal(cartItems.length, 1)
        assert.deepEqual(cartItems[0], {product: tShirt, quantity: 2} as ICartItem)
    });

    describe('getTotal()', () => {
        it("should return price from all product in shopping cart", () => {
            const tShirt: IProduct = {
                id: 456,
                name: "t-shirt",
                price: 10,
            };
            const dress: IProduct = {
                id: 67,
                name: "dress",
                price: 5,
            };
            const cartItems: ICartItem[] = [
                {
                    product: tShirt,
                    quantity: 2
                },
                {
                    product: dress,
                    quantity: 1
                }
            ];
            const shoppingCart: ShoppingCart = new ShoppingCart(cartItems);
            console.log('test');
            shoppingCart.getTotal();
            const totalPrice: number =  shoppingCart.getTotal();

            assert.equal(totalPrice, 25);
        });
    });
})
