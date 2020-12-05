import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import {Colors} from '_styles';
import Text from './Text';

const _status = {
    "primary" : {backgroundColor: Colors.PRIMARY},
    "success": {backgroundColor: Colors.SUCCESS},
    "warning": {backgroundColor: Colors.WARNING},
    "danger": {backgroundColor: Colors.ALERT}
}
const Button = ({children, status, callback})=>{
    return (
        <TouchableOpacity onPress={callback} style={StyleSheet.flatten([styles.default, status ? _status[status] : _status['primary']])}>
            <Text style={styles.textStyle} status='white' weight="medium" category="p">{children}</Text>
        </TouchableOpacity>
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
        color:'#fff',
        lineHeight:18
    }
})
export default Button;
