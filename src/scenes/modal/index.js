import React from 'react';
import { StyleSheet } from 'react-native';
import TextInputModal from './TextInputModal';

const Modal = ({navigation}) => {
  return (
    <View style={styles.container} level='1'>
      <TextInputModal pressHandler={()=>navigation.goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:24
  },
});

export default Modal;