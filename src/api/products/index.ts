import axios from 'axios';
import { Product } from './types';

interface ProductsResponse {
    products: Array<Product>
}

export const getProducts = () => {
    return axios.get<ProductsResponse>('https://dummyjson.com/products');
}