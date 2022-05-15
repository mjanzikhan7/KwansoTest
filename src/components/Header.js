import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';
import _ from 'lodash'
import { COLORS } from '../utils/Colors';

export default Header = (props) => {

    return (
        <SafeAreaView
        style={{backgroundColor:COLORS.appGreen}}>
            <StatusBar
            style={{backgroundColor:COLORS.appGreen}}
            />
            <View style={[styles.container, props.containerStyle]} >
               {props.onLeftAction && <TouchableOpacity
                    disabled={_.isNil(props.onLeftAction)}
                    onPress={() => {
                        if (props.onLeftAction && typeof props.onLeftAction) {
                            props.onLeftAction()
                        }
                    }}
                    style={[styles.buttonContainer, props.leftButtonContainerStyle]}>
                    {props.leftIcon &&
                        <Image
                            style={[styles.buttonIcon, props.leftButtonIconStyle]}
                            source={props.leftIcon}
                        />
                    }
                    {props.leftText &&
                        <Text style={[styles.buttonText, props.leftButtonTextStyle]}>
                            {props.leftText}
                        </Text>
                    }
                </TouchableOpacity>}
                <View style={[styles.centerComponentStyle, props.centerComponentExtraStyle]}>
                    {props.centerComponent &&
                        <Image style={{width: 40,resizeMode: "cover",alignSelf: "center",borderRadius: 20,height: 40}} source={props.centerComponent} />
                    }
                    {props.hearderText &&
                        <Text style={[styles.hearderText, props.hearderTextStyle]}>
                            {props.hearderText}
                        </Text>
                    }
                </View>
                <TouchableOpacity
                    disabled={_.isNil(props.onRightAction)}
                    onPress={() => {
                        if (props.onRightAction && typeof props.onRightAction) {
                            props.onRightAction()
                        }
                    }}
                    style={[styles.buttonContainer, props.rightButtonContainerStyle]}>
                    {props.rightIcon &&
                        <Image
                            style={[styles.buttonIcon, props.rightButtonIconStyle]}
                            source={props.rightIcon}
                        />
                    }
                    {props.rightText &&
                        <Text style={[styles.buttonText, props.rightButtonTextStyle]}>
                            {props.rightText}
                        </Text>
                    }
                </TouchableOpacity>
                {props.rightIcon2 || props.rightText2 ? <TouchableOpacity
                    disabled={_.isNil(props.onRightAction2)}
                    onPress={() => {
                        if (props.onRightAction2 && typeof props.onRightAction2) {
                            props.onRightAction2()
                        }
                    }}
                    style={[styles.buttonContainer, props.rightButtonContainerStyle2]}>
                    {props.rightIcon2 &&
                        <Image
                            style={[styles.buttonIcon, props.rightButtonIconStyle2]}
                            source={props.rightIcon2}
                        />
                    }
                    {props.rightText2 &&
                        <Text style={[styles.buttonText, props.rightButtonTextStyle2]}>
                            {props.rightText2}
                        </Text>
                    }
                </TouchableOpacity> : null}
                {props.rightIcon3 || props.rightText3 ? <TouchableOpacity
                    disabled={_.isNil(props.onRightAction3)}
                    onPress={() => {
                        if (props.onRightAction3 && typeof props.onRightAction3) {
                            props.onRightAction3()
                        }
                    }}
                    style={[styles.buttonContainer, props.rightButtonContainerStyle2]}>
                    {props.rightIcon3 &&
                        <Image
                            style={[styles.buttonIcon, props.rightButtonIconStyle2]}
                            source={props.rightIcon3}
                        />
                    }
                    {props.rightText3 &&
                        <Text style={[styles.buttonText, props.rightButtonTextStyle3]}>
                            {props.rightText3}
                        </Text>
                    }
                </TouchableOpacity> : null}
            </ View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: COLORS.appGreen,
        alignItems: 'center',
    },
    buttonContainer: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    centerComponentStyle: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        textAlign: 'left'
    },
    buttonIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    buttonText: {
        marginHorizontal:1,
        fontSize:12,
        fontWeight: 'bold',

    },
    hearderText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginHorizontal:10
    }
})
