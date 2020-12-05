import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity, StyleSheet } from "react-native";
import {Colors} from '_styles';

const _status = {
    "base": {color: Colors.TEXT_HINT_COLOR},
    "primary" : {color: Colors.PRIMARY},
    "success": {color: Colors.SUCCESS},
    "warning": {color: Colors.WARNING},
    "danger": {color: Colors.ALERT},
    "white":{color: Colors.WHITE}
}
const Icon = (props)=>{
    const {style, status, name, size, type, pressHandler, containerStyle, disabled} = props;
    let child = ""
    if(type==="AntDesign") {
        child=()=> (<AntDesign style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>)            
    }else if(type==="FontAwesome"){
        child= ()=> (<FontAwesome style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>)
    }else if(type==="MaterialIcons"){
        child = ()=>(<MaterialIcons style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>)
    }else if(type==="Feather"){
        child=()=>(<Feather style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>)
    }else{
        child=()=>( <Ionicons style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>)
    }
    console.log(disabled);
    return (
        <TouchableOpacity disabled={disabled} style={containerStyle} onPress={pressHandler}>
            {child()}
        </TouchableOpacity>
    );

    
}

export default Icon;
