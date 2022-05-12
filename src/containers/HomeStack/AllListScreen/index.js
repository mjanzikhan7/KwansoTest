
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, } from 'react-native';
import { COLORS } from '../../../utils/Colors';
import {CONSTANTS,NAV_CONSTS} from '../../../constants'
import Loader from '../../../components/loader';
import Header from '../../../components/Header';
import  AddButton from '../../../components/AddButton'
import List from '../../../components/List'
import {
    queryAllLists,
    deleteList,
  } from '../../../Realm/dbSchema';
import { useIsFocused } from "@react-navigation/native";

const HomeDashboard = (props) => {
    const isFocused = useIsFocused();
    const { navigation } = props;
    const [list, setList] = useState([]);
   
    useEffect(() => {
        reloadData()
    }, [isFocused]);
    reloadData = () => {
        queryAllLists()
          .then(groceryLists => {
              setList(groceryLists); 
        })
          .catch(e => {setList([])});
      };

      deleteListItem = (item) => {
        deleteList(item.id)
        .then()
        .catch(err => alert(`Delete GroceryList error ${err}`));
        reloadData();
      };
    return (
        <View style={styles.mainContainer}>
            <Header
             hearderText={CONSTANTS.GROCERY_LIST}/>
            <SafeAreaView style={styles.mainContainer}>
            <List 
            list={list}
            onItemPress={(item)=>{
                deleteListItem(item)
            }}
            />
            <AddButton 
            buttonText={CONSTANTS.ADD}
            onPress={()=>{
                navigation.navigate(NAV_CONSTS.ALL_LIST)
            }}/>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{ flex: 1, backgroundColor:COLORS.appGreen },
});

export default HomeDashboard;