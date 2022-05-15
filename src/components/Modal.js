import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { COLORS } from '../utils/Colors';
import {CONSTANTS} from '../constants'
import Modal from "react-native-modal";
import AppInput from '../components/AppInput'
import AppButton from '.././components/AppButton'

export default ModalComponent = (props) => {

    const { isVisible,onClosePress,onPressSave, onChangeText,placeholder } = props;
   
    return (
        <View>
            <Modal isVisible={isVisible}>
                <View style={{ flex: 1, justifyContent:"center",alignItems:"center" }}>
                    <View style={styles.modalViewStyle}>
                    <TouchableOpacity style={styles.closeStyle} onPress={onClosePress}><Text>{CONSTANTS.CLOSE}</Text></TouchableOpacity>
                    <AppInput placeholder={placeholder} onChangeText={onChangeText}/>
                    <AppButton buttonText={CONSTANTS.SAVE}
                        onPressButton={onPressSave} />
                    </View>

                </View>
            </Modal>
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
    closeStyle: {
        alignSelf:"flex-end"
    },
    modalViewStyle:{
        backgroundColor:COLORS.white,
        width:"90%",
        padding:10,
        borderRadius:20

    }

});