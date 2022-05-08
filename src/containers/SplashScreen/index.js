import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, StatusBar} from 'react-native';
import {Images} from "../../assets"
import { COLORS } from '../../utils/Colors';


const  SplashScreen = (props) => {

    useEffect(()=>{
        props.navigation.navigate('HomeStack')
    })
        return (
            <View style={style.mainContainer}>
                <Text>Grocerry List</Text>
            </View>
        );
    
}
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:COLORS.splashBackground,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.appGreen
    },

});

export default SplashScreen;
