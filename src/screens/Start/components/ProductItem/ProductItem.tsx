import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../../../api/products/types';
import { styles } from './styles';
import { useProductItem } from './useProductItem';

interface ProductItemProps {
    product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    const {title, price, thumbnail} = product;
    const {onGoToProductDetails} = useProductItem();

    return (
        <TouchableOpacity onPress={() => onGoToProductDetails(product)}>
        <LinearGradient colors={['#DDD6F3', '#FAACA8']} start={{x: 0.3, y: 0.1}} style={styles.container}>
                <View style={styles.infoSection}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>Price: {price}</Text>
                </View>
                <View>
                <Image source={{uri: thumbnail}} style={styles.image} />
                </View>
        </LinearGradient>
        </TouchableOpacity>
    )
}