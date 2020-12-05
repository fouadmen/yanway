import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {Icon} from '_atoms';
import {Mixins, Typography} from '_styles';

const Input = ({placeholder, ext_style, backHandler, _onChangeText}) => {
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
    <View style={styles.container}>
      <Icon style={{marginRight:-6}} name="chevron-left" type="Feather" pressHandler={backHandler}/>
      <TextInput
        style={StyleSheet.flatten([styles.input, ext_style])}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
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
    ...Mixins.margin(0,24,16,24),
  },
  input: {
    borderColor:'#EDEDED',
    backgroundColor:'#EDEDED',
    flex:1,
    marginLeft:8,
    fontSize:20,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  }
});  

export default Input
