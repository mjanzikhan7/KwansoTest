
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';

const NewsList = (props) => {
    let orderList = props.orderList;


    const renderItem = (item, index) => {
        return (
            <TouchableOpacity style={styles.topView}>
               <Text style={{fontSize:11}}>{item.date}</Text>
               <Text style={{fontSize:18,fontWeight:"bold",marginVertical:10}}>{item.title}</Text>
               <Text style={{fontSize:13}}>{item.content}</Text> 
            </TouchableOpacity>
        )
    }

    return (
            <View>
                <FlatList
                    data={orderList}
                    keyExtractor={(item, index) => item.id + index}
                    listKey={'SelectIndustriesScreen' + moment().format('x')}
                    removeClippedSubvisews={false}
                    renderItem={({ item, index }) => {
                        return renderItem(item, index);
                    }}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingBottom:50}}
                // contentContainerStyle={{ marginTop: 20 }}
                />
            </View>
            );
}

const styles = StyleSheet.create({
    topView: {
        // height: 260,
        marginHorizontal: 10,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    flatListMainView: {
        marginBottom: 10
    },
    createOrderButtonStyle: {
        width: "70%",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default NewsList;