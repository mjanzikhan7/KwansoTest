
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, StatusBar, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { COLORS } from '../../../utils/Colors';
import moment from 'moment';
import Loader from '../../../components/loader';
import Preference from 'react-native-preference';
// import Header from '../../../components/Header';

import { useIsFocused } from "@react-navigation/native";

const HomeDashboard = (props) => {
    const isFocused = useIsFocused();
    const { navigation } = props;
    const [user, setUser] = useState(Preference.get('user'))
    const [selectTabNo, setTabNo] = useState(1);
    const [showLoading, setShowLoading] = useState(false);
    const [orderList, setOrderList] = useState([]);
    (function() {
        var a = b = 5;
      })();
    useEffect(() => {
        alert(b)
    }, []);

    
  

    

   

    return (
        <View style={{ flex: 1 }}>
             {/* <Header
             containerStyle={{height:0}}/> */}
            <SafeAreaView style={{ flex: 1 }}>
        
            </SafeAreaView>
            <Loader showLoading={showLoading} />
        </View>
    )
};

const styles = StyleSheet.create({
    flatListMainView: {
        marginBottom: 10
    },
    renderViewUniSport: {
        alignSelf: 'center',
        height: 35,
        paddingLeft: 17,
        paddingRight: 17,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    homeHeaderView: {
        height: 130,
        backgroundColor: COLORS.appGreen,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: "row"

    },
    backArrowStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    profileDescriptionImage: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        tintColor: 'white',
        alignSelf: "center"
    },
    headerImageView: {
        flexDirection: "row",
        marginTop: 10,
        width: "90%"
    },
    profileTextView: {
        justifyContent: 'center',
        marginLeft: 10
    },
    profileDescriptionView: {
        flexDirection: "row",
        marginTop: 10
    }
});

export default HomeDashboard;