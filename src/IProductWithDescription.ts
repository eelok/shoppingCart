import {IProduct} from "./IProduct";

export interface IProductWithDescription extends IProduct {
    description: string;
}
