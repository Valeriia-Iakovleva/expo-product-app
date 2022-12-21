import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - 50,
        height: 100,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
        padding: 10,
        flexDirection: 'row',
    },
    infoSection: {
        width: '78%',
        flexDirection: 'column',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    imageSection: {
        width: '22%',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
    }
})