import { StyleSheet } from "react-native/";

export const estilos = StyleSheet.create({
    texto: {
        color: '#BD93BD'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listaContainer: {
        marginTop: 20,
        width: '80%',
        maxHeight: 200,
    },
    listaItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        fontSize: 14,
    }
});