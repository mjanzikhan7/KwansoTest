
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
    insertNewGroceryList
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

      addItemToList = () => {
       const newItemList = {
            id: Math.floor(Date.now() / 1000),
            name: "Test Name: "+Math.floor(Date.now() / 1000),
            creationDate: new Date(),
          };
          insertNewGroceryList(newItemList)
            .then()
            .catch(err => alert(`Insert new GrocerryItem err: ${err}`));
            reloadData()
      };
    return (
        <View style={styles.mainContainer}>
            <Header
             hearderText={CONSTANTS.GROCERY_LIST}/>
            <SafeAreaView style={styles.mainContainer}>
            <List 
            list={list}
            onItemPress={(item)=>{}}
            />
            <AddButton 
            buttonText={CONSTANTS.ADD}
            onPress={()=>{
                addItemToList()
            }}/>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{ flex: 1, backgroundColor:COLORS.appGreen },
});

export default HomeDashboard;