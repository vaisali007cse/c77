import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS Tracker APP</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>ISS Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Meteors</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText:{
        fontSize:30,
        color: "red"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight :0
    },
    titleBar:{
        justifyContent:"center",
        alignItems:"center",
        flex:0.15
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routrText:{
        fontSize:35,
        color: "black",
        paddingLeft:30,
        marginTop:75,
        alignItems: "center"
    }
});