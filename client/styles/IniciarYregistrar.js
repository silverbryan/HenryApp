import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    botones:{
        // width: 250,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        height:50,
        zIndex: -1,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    boton:{
        backgroundColor: 'transparent',
        zIndex: 4,
        width: 125,
        justifyContent: "center",
        alignItems: 'center'
        
    },
    cuadro:{
        width:'80%',
        height: 450,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: "center",
        // justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
});