import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:"center",
        marginTop:45,
    },

    form:{
        width:"100%",
        height:"auto",
        margin:35,
        padding:20,
    },

    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },

    input:{
        width:"88%",
        borderRadius:25,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },

    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"88%",
        backgroundColor:"#ff0043",
        paddingTop:15,
        paddingBottom:15,
        marginLeft:12,
        marginTop:25,


    }, 
    textButtonCalculator:{
        fontSize:20,
        color: "#ffffff"
    }
});

export default styles