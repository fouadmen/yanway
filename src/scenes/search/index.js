import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {Divider, Input, Layout, Text, Button} from '_atoms';

const Search = ({navigation}) => {
    navigation.setOptions = {child : ()=><Input placeholder='Address...' pressHandler={()=>navigation.goBack()}/>};
    return (
        <Layout style={styles.container} level='1'>
            <Text style={styles.header} category="h1" weight='medium'>Where are you going ?</Text>
            <View style={styles.inputs}>
               <TouchableOpacity onPress={() => navigation.navigate('TextInputModal',{target:''})} style={styles.input}><Text style={{marginVertical:16, marginHorizontal:16}} status='hint' category="h4" weight='regular'>Starting Location</Text></TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('TextInputModal',{target:''})} style={styles.input}><Text style={{marginVertical:16, marginHorizontal:16}} status='hint' category="h4" weight='regular'>Destination</Text></TouchableOpacity>
            </View>
            <Divider />
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:24}}>
              <TouchableOpacity onPress={() => navigation.navigate('DateModal',{target:''})}><Text status='primary' weight="regular" category="h4">Today, 14:00</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PassangersModal',{target:''})} ><Text status='primary' weight="regular" category="h4">1 passanger</Text></TouchableOpacity>
            </View>
            <Divider />
            <View style={styles.button}><Button style={{borderRadius:20}} textStyle={{fontSize:16, color:'Black'}}> Search </Button></View>
            <View style={styles.history}></View>
        </Layout>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  header: {
    marginHorizontal: 24,
    marginBottom:40,
    marginTop:16,
  },
  inputs:{
    display:'flex', 
    flexDirection:'column', 
  },
  input:{
    height:56,
    marginHorizontal:24,
    marginBottom:16,
    borderRadius:15,
    backgroundColor:'#EDEDED',
  },
  button :{ 
    alignSelf:'center',
    marginTop:16,
    width:124,
  }
});

export default Search

