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
    const {style, status, name, size, type, pressHandler, containerStyle} = props;
    
    if(type==="AntDesign") {
        return (
            <TouchableOpacity style={containerStyle} onPress={pressHandler}>
                <AntDesign style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>
            </TouchableOpacity>
            
        );
    }else if(type==="FontAwesome"){
        return (<TouchableOpacity onPress={pressHandler}>
            <FontAwesome style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>
        </TouchableOpacity>
            
        );
    }else if(type==="MaterialIcons"){
        return (<TouchableOpacity onPress={pressHandler}>
            <MaterialIcons style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>
        </TouchableOpacity>
            
        );
    }else if(type==="Feather"){
        return (<TouchableOpacity onPress={pressHandler}>
            <Feather style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>
        </TouchableOpacity>
            
        );
    }else{
        return (
            <TouchableOpacity onPress={pressHandler}>
                 <Ionicons style={StyleSheet.flatten([style, status ? _status[status] : _status['base'] ])} name={name} size={size || 24}/>
        </TouchableOpacity>
           
        );
    }

    
}

export default Icon;
