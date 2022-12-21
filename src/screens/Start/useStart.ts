import * as React from 'react';

import { getProducts } from '../../api/products';
import { Product } from '../../api/products/types';

export const useStart = () => {
    const [cleanProductsList, setCleanProductsList] = React.useState<Array<Product>>([]);
    const [products, setProducts] = React.useState<Array<Product>>([]);
    const [priceInput, setPriceInput] = React.useState('');
    const [isRefresh, setIsRefresh] = React.useState(false);

    const fetchProducts = async () => {
        const {data} = await getProducts();
        setProducts(data.products);
        setCleanProductsList(data.products);
    }

    const onChangePrice = (text: string) => {
        setPriceInput(text);
    }

    const onChangeProductsList = () => {
        const filteredProductsList = products.filter(product => product.price < +priceInput);
        setProducts(filteredProductsList);
        setPriceInput('');
    }

    const onRefresh = () => {
        setIsRefresh(true);
        setProducts(cleanProductsList);
        setIsRefresh(false);
    }

    return {
        products,
        isRefresh,
        fetchProducts,
        onChangePrice,
        onChangeProductsList,
        onRefresh,
    }
}