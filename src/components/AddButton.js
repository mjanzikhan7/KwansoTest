import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import {COLORS} from '../utils/Colors';

export default class AppButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => { this.props.onPress !== undefined && this.props.onPress() }}
                underlayColor="white"
                style={[styles.Btn,this.props.styles]}>
                <Text style={[{ color: '#fff', fontSize: 14,  },this.props.TextStyle]}>{this.props.buttonText}</Text>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    Btn: {
        margin: 10,
        borderRadius: 45/2,
        height: 45,
        width:45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.white,
        position:"absolute",
        right:10,
        bottom:10

    },
})
