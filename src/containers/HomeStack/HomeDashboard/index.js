
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, } from 'react-native';
import { COLORS } from '../../../utils/Colors';
import {CONSTANTS} from '../../../constants'
import Header from '../../../components/Header';
import List from '../../../components/List'
import {
    getAllLists,
    deleteList,
    updateGroceryItem
  } from '../../../Realm/dbSchema2';
  import {
    getLatestList,
    markListComplete
  } from '../../../utils/CommonOperations'
import { useIsFocused } from "@react-navigation/native";

const HomeDashboard = (props) => {
    const isFocused = useIsFocused();
    const [listObject, setListObject] = useState([]);
   
    useEffect(() => {
        reloadData()
    }, [isFocused]);

    reloadData = () => {
        getAllLists()
          .then(groceryLists => {
              setListObject(getLatestList(groceryLists)); 
        })
          .catch(e => {alert(e)});
      };

      scratchItem = (item) => {
        updateGroceryItem(item)
        .then(()=>{
            markListComplete(listObject,reloadData)
            reloadData()
        })
        .catch(err => alert(`Update operation failed ${err}`));
    
    
      };
    return (
        <View style={styles.mainContainer}>
            <Header
             hearderText={CONSTANTS.GROCERY_LIST}/>
            <SafeAreaView style={styles.mainContainer}>
            <List 
            list={listObject?.list}
            onItemPress={(item)=>{
                scratchItem(item) 
            }}
            scratchStyle={styles.strikeStyle}
            />
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{ flex: 1, backgroundColor:COLORS.appGreen },
    strikeStyle:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}
});

export default HomeDashboard;