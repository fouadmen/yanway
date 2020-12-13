import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from './Icon';
import {Colors, Typography} from '_styles';

const Input = ({placeholder, style, containerStyle, backHandler, _onChangeText, iconComponent, multiline}) => {
  const [value, setValue] = React.useState('');
  const clearInput = ()=> {
    _onChangeText('');
    setValue('');
  }
  const onChangeText = (nextValue)=>{
    _onChangeText(nextValue);
    setValue(nextValue);
  }
  return (
    <View style={[styles.container, containerStyle]}>
      { iconComponent ? iconComponent : <Icon style={{marginRight:-6}} name="chevron-left" type="Feather" pressHandler={backHandler ? backHandler : null}/> }
      <TextInput
        style={StyleSheet.flatten([styles.input, style])}
        value={value}
        placeholderTextColor={Colors.TEXT_HINT_COLOR}
        placeholder={placeholder}
        onChangeText={onChangeText}
        multiline={multiline}
        textAlignVertical="top"
      />
      <Icon name="close" pressHandler={clearInput}/>    
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:15,
    backgroundColor:'#EDEDED',
    paddingHorizontal:16,
    marginTop:16,
  },
  input: {
    borderColor:'#EDEDED',
    backgroundColor:'#EDEDED',
    flex:1,
    marginLeft:8,
    fontSize:20,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.TEXT_BASIC_COLOR,
    
  }
});  

export default Input
