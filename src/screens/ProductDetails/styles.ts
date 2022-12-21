import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#D6E8FC',
    },
    header: {
        alignSelf: 'center',
        fontSize: 22,
    },
    content: {
        marginLeft: 20,
        marginTop: 20,
    },
    topContent: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    topText: {
        fontSize: 18,
        marginRight: 10,
    },
    middleText: {
        fontSize: 18,
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 20,
    },
    button: {
        width: '80%',
        height: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }
})