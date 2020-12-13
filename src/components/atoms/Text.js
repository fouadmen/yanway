import React from 'react';
import { StyleSheet, Text as _Text } from 'react-native';
import {Colors, Typography} from '_styles';

const categories = {
    'h1': {fontSize: Typography.FONT_SIZE_32}, 
    'h2': {fontSize: Typography.FONT_SIZE_24}, 
    'h3': {fontSize: Typography.FONT_SIZE_20}, 
    'h4': {fontSize: Typography.FONT_SIZE_18}, 
    's1': {fontSize: Typography.FONT_SIZE_14},
    's2': {fontSize: Typography.FONT_SIZE_13},
    's3': {fontSize: Typography.FONT_SIZE_12},
    'p': {fontSize: Typography.FONT_SIZE_16},
    'extra': {fontSize: Typography.FONT_SIZE_80}
}

const _status = {
    "base":{color : Colors.TEXT_BASIC_COLOR},
    "hint":{color: Colors.TEXT_HINT_COLOR},
    "primary" : {color: Colors.PRIMARY},
    "success": {color: Colors.SUCCESS},
    "warning": {color: Colors.WARNING},
    "danger": {color: Colors.ALERT},
    "white": {color: Colors.WHITE},
}

const _weight = {
    "bold": {fontFamily: Typography.FONT_FAMILY_BOLD},
    "medium": {fontFamily: Typography.FONT_FAMILY_MEDIUM},
    "regular": {fontFamily: Typography.FONT_FAMILY_REGULAR},
}

const Text = ({style, category, status, weight, children, onPress}) => {
    return (
        <_Text onPress={ onPress ? onPress : null} style={StyleSheet.flatten([styles.default, style, category ? categories[category ? category : 'h1'] : {}, status ? _status[status] : _status["base"], weight ? _weight[weight]: _weight['regular']  ])}>{children}</_Text>
    );
};

const styles = StyleSheet.create({
  default: {
    
  }
});  

export default Text;
