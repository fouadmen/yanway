import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import Icon from './Icon';
import Touchable from './Touchable';

const Radio = ({children, checked, onPress})=>{
    return (
            <View style={{ height:48, overflow:'hidden', borderRadius:1, flexDirection:'column', justifyContent:'center'}}>
                <Touchable onPress={onPress}>
                    <View style={{flexDirection:'row', justifyContent:"space-between", marginVertical:8}}>
                        <Text category="h4" >{children}</Text>
                        <Icon name={ checked ? "radio-button-on" : "radio-button-off"} type="MaterialIcons" status="primary"/>
                    </View>
                </Touchable>
            </View>
    );
};

export default Radio;
