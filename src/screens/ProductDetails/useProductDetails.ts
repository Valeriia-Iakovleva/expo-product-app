import * as Navigation from '@react-navigation/native';
import { Product } from '../../api/products/types';

interface ProductDetailsRoute {
    key: string;
    name: string;
    params: {
        product: Product;
    };
}

export const useProductDetails = () => {
    const route = Navigation.useRoute<ProductDetailsRoute>();
    const navigation = Navigation.useNavigation();
    const {title, brand, images, description, category, price, discountPercentage} = route.params.product || 'Error';
    console.log(title);

    const onBack = () => {
        navigation.goBack();
    }

    return {
        title,
        brand,
        images,
        description,
        category,
        price,
        discountPercentage,
        onBack,
    }
}