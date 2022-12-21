import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Start } from '../screens/Start';
import { ProductDetails } from '../screens/ProductDetails';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
    const navigationRef = React.useRef<any>();
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
             initialRouteName='Start'
             screenOptions={{
                headerShown: false,
             }}
            >
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}