import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
export default ({ onPressList, textList, togglePointsFilter}) => {
    return (
        <View style={styles.panel}>
            <View style={styles.btn}>
                <Button title={textList} onPress={onPressList} />
            </View>
            <View style={styles.btn}>
                <Button title="Mostrar/Ocultar" onPress={togglePointsFilter}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    panel:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btn:{
        margin:5
    }
})
