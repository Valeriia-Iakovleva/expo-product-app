import * as React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { useStart } from './useStart';
import { Product } from '../../api/products/types';
import { ProductItem } from './components/ProductItem';

interface RenderProductItem {
    item: Product;
}

const renderProductItem = ({item}: RenderProductItem) => {
    return (
        <ProductItem product={item} />
    )
}

export const Start: React.FC = () => {
  const {products, isRefresh, fetchProducts, onChangePrice, onChangeProductsList, onRefresh} = useStart();
  React.useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <LinearGradient colors={['#97D9E1', '#D9AFD9']} style={styles.container}>
        <Text style={styles.title}>
            Product App
        </Text>
        <View style={styles.inputBlock}>
            <TextInput 
            style={styles.input} 
            placeholder="Enter price for filter" 
            keyboardType='numeric' 
            onChangeText={onChangePrice}
            onEndEditing={onChangeProductsList}
            />
        </View>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          refreshing={isRefresh}
          onRefresh={onRefresh}
        />
    </LinearGradient>
  )
}