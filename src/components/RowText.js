import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { COLORS } from '../utils/Colors';

export default RowText = (props) => {

    const { leftText, rightText, mainContainer, leftTextStyle, rightTextStyle, showStatus, status, statusTextStyle } = props;

    return (
        <View style={[styles.mainContainer, mainContainer]} >
            <Text style={[styles.leftTextStyle, leftTextStyle]}>{leftText}</Text>
            <View style={{width: '55%',flexDirection: "row"}}>
                <Text style={[styles.rightTextStyle, rightTextStyle,
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
    },
    leftTextStyle: {
        width: '40%',
        color: '#7C7C7C',
        alignSelf: "center"
    },
    rightTextStyle: {
        width: '80%',
        color: '#777777',
    },
    statusTextStyle: {

    }

});