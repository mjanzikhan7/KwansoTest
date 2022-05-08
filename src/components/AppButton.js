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
                onPress={() => { this.props.onPressButton !== undefined && this.props.onPressButton() }}
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
        borderRadius: 30,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: COLORS.appGreen,
        alignSelf: 'center'
    },
})
