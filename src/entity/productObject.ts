import { Product } from './product';
export class ProductObject implements Product{
    id: string;
    productName: string;
    price: number;
    stock: number;
}