import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Touchable } from './';

const Checkbox = ({children, onPress})=>{
    const [checked, setChecked] = React.useState(false);
    const pressHandler = ()=>{
        if (onPress) onPress();
        setChecked(!checked);
    }
    return (
        <View style={{ height:48, overflow:'hidden', borderRadius:1, flexDirection:'column', justifyContent:'center'}}>
            <Touchable onPress={pressHandler}>
                <View style={{flexDirection:'row', justifyContent:"space-between", marginVertical:8}}>
                    <Text category="h4" >{children}</Text>
                    <Icon name={ checked ? "check-circle" : "radio-button-off"} type="MaterialIcons" status="primary"/>
                </View>
            </Touchable>
        </View>
    );
}

export default Checkbox;