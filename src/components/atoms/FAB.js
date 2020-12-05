import React from 'react';
import { View } from 'react-native';
import { Colors } from '_styles';
import Icon from './Icon';

const FAB = ({callback}) => {
    return (
        <View style={{backgroundColor: Colors.PRIMARY, height:48, width:48, borderRadius:24, position:'absolute', top:'90%', left:'80%', flexDirection:'column', justifyContent:'center'}}>
            <Icon containerStyle={{alignSelf:'center'}} name="arrowright" type="AntDesign" status="white" pressHandler={callback}/>  
        </View>
    )
}

export default FAB;
