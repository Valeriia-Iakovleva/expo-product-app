import * as Navigation from '@react-navigation/native';
import { Product } from '../../../../api/products/types';

export const useProductItem = () => {
    const navigation = Navigation.useNavigation();
    const onGoToProductDetails = (product: Product) => {
        navigation.navigate('ProductDetails', {
            product,
        });
    };

    return {
        onGoToProductDetails,
    }
}