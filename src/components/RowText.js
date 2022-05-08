import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { COLORS } from '../utils/Colors';

export default RowText = (props) => {

    const { leftText, rightText, mainContainer, leftTextStyle, rightTextStyle, showStatus, status, statusTextStyle } = props;

    return (
        <View style={[styles.mainContainer, mainContainer]} >
            <Text style={[styles.leftTextStyle, leftTextStyle]}>{leftText}</Text>
            <View style={{width: '55%',flexDirection: "row"}}>
                <Text style={[styles.rightTextStyle, rightTextStyle,
                    // {color: rightText == 'In Process'|| rightText == 'Completed'|| rightText == 'Completed But Unpaid'? COLORS.appGreen :rightText == 'Unpaid'?"red": 'black'}
                    ]}>{rightText}</Text>
                {showStatus &&
                    <Text style={[{ color: rightText == 'In Process' ? COLORS.appGreen : "red", fontWeight: "bold" }, statusTextStyle]}>{status}</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 5,
        // height: 20,
    },
    leftTextStyle: {
        width: '40%',
        color: '#7C7C7C',
        alignSelf: "center"
    },
    rightTextStyle: {
        width: '80%',
        color: '#777777',
        // fontWeight: "bold",
        // alignSelf: "center"
    },
    statusTextStyle: {

    }

});