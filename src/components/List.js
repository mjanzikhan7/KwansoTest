
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';

const List = (props) => {
    
    const renderItem = (item, index) => {
        return (
            <TouchableOpacity style={styles.topView} onPress={()=>{props.onItemPress(item)}}>
               <Text style={[styles.txtStyle,item.isScratched && props.scratchStyle]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
            <View>
                <FlatList
                    data={props.list}
                    keyExtractor={(item, index) => item.id + index}
                    listKey={'SelectIndustriesScreen' + moment().format('x')}
                    removeClippedSubvisews={false}
                    renderItem={({ item, index }) => {
                        return renderItem(item, index);
                    }}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingBottom:50}}
                />
            </View>
            );
}

const styles = StyleSheet.create({
    topView: {
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
    },
    txtStyle:{fontSize:16}
});

export default List;