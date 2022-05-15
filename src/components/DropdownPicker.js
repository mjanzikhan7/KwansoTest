import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from 'native-base';

export default class DropdownPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View
                style={[styles.featureBgStyle1, this.props.viewStyle]}>
                <Picker
                    style={{marginLeft: 5,marginRight:5,marginTop:-5, width:"100%"}}
                    textStyle={{ color: "#000", fontSize:    14,width:"100%" }}
                    itemStyle={{
                        fontSize: 14
                    }}
                    selectedValue={this.props.selectedValue}
                    onValueChange={this.props.onValueChange}
                    mode={'dialog'}
                    placeholder={this.props.placeholder}
                    placeholderStyle={{ fontSize: 14, }}
                    itemTextStyle={{ fontSize: 14, }}
                >
                    {this.props.dropDownItems}
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    featureBgStyle1: {
        flexDirection: 'row', width: '90%',
        marginBottom: 5, borderRadius: 10,
        elevation: 1,
        marginTop: 10,
        height: 40
    },
})


