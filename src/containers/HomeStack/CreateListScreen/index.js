
import React, {  useState } from 'react';
import { View, StyleSheet, SafeAreaView, } from 'react-native';
import { COLORS } from '../../../utils/Colors';
import {CONSTANTS} from '../../../constants'
import Header from '../../../components/Header';
import  AddButton from '../../../components/AddButton'
import List from '../../../components/List'
import ModalComponent from '../../../components/Modal'
import {
    queryListItems,
    deleteList,
    insertNewGroceryList,
    insertNewGroceryItem
  } from '../../../Realm/dbSchema2';
import { useIsFocused } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

const HomeDashboard = (props) => {
    const {groceryItem}= props.route.params
    const [list, setList] = useState(groceryItem?.list);
    const [text, setText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
   
    
    reloadGroceryItems = (id) => {
        queryListItems(id)
          .then(groceryLists => {
        })
          .catch(e => {setList([])});
      };


      addItemToList = (text) => {
       const newItemList = {
            id: Math.floor(Date.now() / 1000),
            name: text,
            isScratched:false,
            creationDate: new Date(),
          };
          insertNewGroceryItem(groceryItem?.id,newItemList)
            .then( (item)=>{
                setIsModalVisible(false)
            } )
            .catch(err => alert(`Insert new GrocerryItem err: ${err}`));
        
        
      };

      backClick = ()=>{
        props.navigation.dispatch(StackActions.replace("HomeStack"));
      }
    return (
        <View style={styles.mainContainer}>
            <Header
             hearderText={CONSTANTS.CREATE_LIST_HEADER}
             onLeftAction={()=>{backClick()}}
             leftText={CONSTANTS.BACK}/>
            <SafeAreaView style={styles.mainContainer}>
            <List 
                list={list}
                onItemPress={(item)=>{}}
                scratchStyle={styles.strikeStyle}
                />
            <AddButton 
                buttonText={CONSTANTS.ADD}
                onPress={()=>{
                    setIsModalVisible(true)
                }}/>
            </SafeAreaView>
            <ModalComponent isVisible={isModalVisible}
                placeholder={CONSTANTS.INPUT_PLACEHOLDER}
                onPressSave={()=>{addItemToList(text)}}
                onClosePress={()=>{setIsModalVisible(false)}}
                onChangeText={(text)=>{setText(text)}}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{ flex: 1, backgroundColor:COLORS.appGreen },
    strikeStyle:{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}
});

export default HomeDashboard;