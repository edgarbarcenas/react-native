import React from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions, Button } from 'react-native';

export default ({puntos, closeModal}) => {
    return (
        <View style={styles.list}>
            <FlatList 
                data={puntos.map(x => x.name)}
                renderItem = {({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
                keyExtractor={ item => item}
            />
            <View style={styles.btn}>
                <Button title="Cerrar" onPress={closeModal}/>
            </View> 
        </View>    
    )
}

const styles = StyleSheet.create({
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
    },
    item:{
        borderBottomWidth:1,
        borderColor: '#6565',
        padding:15,
        height:50
    },
    list:{
        height:Dimensions.get('window').height -150
    }
})
