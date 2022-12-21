import * as React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { styles } from './styles';
import { useProductDetails } from './useProductDetails';

export const ProductDetails: React.FC = () => {
    const {title, description, brand, category, images, onBack} = useProductDetails();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Product Details</Text>
            <View style={styles.content}>
                <View style={styles.topContent}>
                  <Text style={styles.topText}>{title}</Text>
                  <Text style={styles.topText}>Brand: {brand}</Text>
                </View>
              <Text style={styles.middleText}>Description: {description}</Text>
              <Text style={styles.middleText}>Category: {category}</Text>
            </View>
            <Image source={{uri: images[0]}} style={styles.image} />
            <TouchableOpacity onPress={onBack} style={styles.button}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}