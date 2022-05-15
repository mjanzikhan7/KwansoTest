
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, } from 'react-native';
import { COLORS } from '../../../utils/Colors';
import {CONSTANTS,NAV_CONSTS} from '../../../constants'
import Loader from '../../../components/loader';
import Header from '../../../components/Header';
import  AddButton from '../../../components/AddButton'
import List from '../../../components/List'
import {
    insertNewGroceryList,
    getAllLists,
  } from '../../../Realm/dbSchema2';
import { useIsFocused } from "@react-navigation/native";
import ModalComponent from '../../../components/Modal'

const AllListScreen = (props) => {
    const isFocused = useIsFocused();
    const { navigation } = props;
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {
        reloadData()
    }, [isFocused]);
    
    reloadData = () => {
        getAllLists()
          .then(groceryLists => {
              setList(groceryLists); 
        })
          .catch(e => {alert(e)});
      };


      addList = (name) => {
       const newItemList = {
            id: Math.floor(Date.now() / 1000),
            name: name,
            creationDate: new Date(),
            status:CONSTANTS.PENDIND
          };
          insertNewGroceryList(newItemList)
            .then((item)=>{
                    onModalClose()
            })
            .catch(err => alert(`Insert new GrocerryItem err: ${err}`));
        
        reloadData()
      };

    onModalClose = ()=>{setIsModalVisible(false)}
      
    return (
        <View style={styles.mainContainer}>
            <Header
             hearderText={CONSTANTS.ALL_LIST}/>
            <SafeAreaView style={styles.mainContainer}>
            <List 
            list={list}
            onItemPress={(item)=>{
                navigation.navigate(NAV_CONSTS.CREATE_LIST,{groceryItem:item})
            }}
            />
            <AddButton 
            buttonText={CONSTANTS.ADD}
            onPress={()=>{
                setIsModalVisible(true)
            }}/>
            </SafeAreaView>
            <ModalComponent isVisible={isModalVisible}
                placeholder={ CONSTANTS.LIST_NAME}
                onPressSave={()=>{addList(text)}}
                onClosePress={onModalClose}
                onChangeText={(text)=>{setText(text)}}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer:{ flex: 1, backgroundColor:COLORS.appGreen },
});

export default AllListScreen;