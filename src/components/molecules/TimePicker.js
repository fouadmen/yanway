
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '_styles';
import {Text, Icon} from '_atoms';

const TimePicker = ({time, callback}) => {
    const date = new Date(time);
    const _time = ('0' + date.getHours()).slice(-2) +':'+('0' + date.getMinutes()).slice(-2) 
    return (
        <View style={styles.container}>
            <Text style={{fontSize:64, alignSelf:'center',}} weight='medium'>{_time}</Text>
            <Icon containerStyle={{ position:'absolute', left:"80%"}} name="down" type="AntDesign" status="primary" pressHandler={callback}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        borderRadius:40,
        borderWidth:1,
        borderColor:Colors.GRAY_LIGHT,
        height:80,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});

export default TimePicker;
