import React from 'react';
import { StyleSheet } from 'react-native';
import TextInputModal from './TextInputModal';
import DatePicker from './DateModal';
import {Layout} from '_atoms';

const Modal = ({route, navigation}) => {
  const {component, target} = route.params;
  return (
    <Layout style={styles.container} level='1'>
      {component == "TextInputModal" && <TextInputModal pressHandler={()=>navigation.goBack()}/>}
      {component == "DatePicker" && <DatePicker close={()=>navigation.goBack()} handleConfirm={()=>{}} hideDatePicker={()=>{}}/>}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:24
  },
});

export default Modal;