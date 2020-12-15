import React from 'react'
import { StyleSheet, View } from 'react-native';
import {Colors} from '_styles';
import Text from './Text';
import Touchable from './Touchable';
const _status = {
    "primary" : {backgroundColor: Colors.PRIMARY},
    "success": {backgroundColor: Colors.SUCCESS},
    "warning": {backgroundColor: Colors.WARNING},
    "alert": {backgroundColor: Colors.ALERT},
    "white": {backgroundColor: Colors.WHITE}
}
const Button = ({children, status, onPress, textStatus})=>{
    return (
        <View style={{borderRadius:24, overflow:'hidden'}}>
            <Touchable onPress={onPress ? onPress : null}>
                <View style={StyleSheet.flatten([styles.default, status ? _status[status] : _status['primary']])}>
                    <Text style={styles.textStyle} status={textStatus ? textStatus : 'white'} weight="medium" category="p">{children}</Text>
                </View>
            </Touchable>
        </View> 
    )
}
const styles = StyleSheet.create({
    default :{
        height:48,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:24
    },
    textStyle:{
        lineHeight:18,
    }
})
export default Button;
