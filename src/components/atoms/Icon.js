import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity, StyleSheet } from "react-native";

const Icon = (props)=>{
    const {style, name, size, type, pressHandler, containerStyle} = props;

    if(type==="AntDesign") {
        return (
            <TouchableOpacity style={containerStyle} onPress={pressHandler}>
                <AntDesign style={StyleSheet.flatten([style, default_style.icon ])} name={name} size={size || 24}/>
            </TouchableOpacity>
            
        );
    }else if(type==="FontAwesome"){
        return (<TouchableOpacity onPress={pressHandler}>
            <FontAwesome style={StyleSheet.flatten([style, default_style.icon ])} name={name} size={size || 24}/>
        </TouchableOpacity>
            
        );
    }else if(type==="MaterialIcons"){
        return (<TouchableOpacity onPress={pressHandler}>
            <MaterialIcons style={StyleSheet.flatten([style, default_style.icon ])} name={name} size={size || 24}/>
        </TouchableOpacity>
            
        );
    }else if(type==="Feather"){
        return (<TouchableOpacity onPress={pressHandler}>
            <Feather style={StyleSheet.flatten([style, default_style.icon ])} name={name} size={size || 24}/>
        </TouchableOpacity>
            
        );
    }else{
        return (
            <TouchableOpacity onPress={pressHandler}>
                 <Ionicons style={StyleSheet.flatten([style, default_style.icon ])} name={name} size={size || 24}/>
        </TouchableOpacity>
           
        );
    }

    
}

const default_style=StyleSheet.create({
    icon: {color:'#708C91'}
})
export default Icon;
