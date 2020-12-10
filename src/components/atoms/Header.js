import React from 'react';
import { View } from 'react-native';
import Icon from './Icon';

const Header = ({navigation, first, style}) => {
    return (
        <View style={[{backgroundColor:'#fff', marginLeft:-10, paddingTop:8}, style]}>
            <Icon name={first ? "close" : "arrowleft"} type="AntDesign" status="primary" size={28} pressHandler={()=>navigation.goBack()}/>            
        </View>
    )
}

export default Header;
