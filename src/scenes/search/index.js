import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {Divider, Input, Layout, Text, Button} from '_atoms';
import {Mixins} from '_styles';

const Search = ({navigation}) => {
    navigation.setOptions = {child : ()=><Input placeholder='Address...' pressHandler={()=>navigation.goBack()}/>};
    return (
        <Layout >
            <Text style={Mixins.header()} category="h1" weight='medium'>Where are you going ?</Text>
            <View style={styles.inputs}>
               <View style={styles.input}><TouchableWithoutFeedback onPress={() => navigation.navigate('TextInputModal',{target:''})} ><View><Text style={{marginVertical:16, marginHorizontal:16}} status='hint' category="h4" weight='regular'>Leaving from</Text></View></TouchableWithoutFeedback></View>
               <View style={styles.input}><TouchableWithoutFeedback onPress={() => navigation.navigate('TextInputModal',{target:''})} ><View><Text style={{marginVertical:16, marginHorizontal:16}} status='hint' category="h4" weight='regular'>Going to</Text></View></TouchableWithoutFeedback></View>
            </View>
            <Divider />
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginVertical:24}}>
              <View><TouchableWithoutFeedback onPress={() => navigation.navigate('DateModal',{target:''})}><View><Text status='primary' weight="regular" category="h4">Sat. dec 05., 08:00</Text></View></TouchableWithoutFeedback></View>
              <View><TouchableWithoutFeedback onPress={() => navigation.navigate('PassangersModal',{target:''})}><View><Text status='primary' weight="regular" category="h4">1 passanger</Text></View></TouchableWithoutFeedback></View>
            </View>
            <Divider />
            <View style={styles.button}><Button style={{borderRadius:20}} textStyle={{fontSize:16, color:'Black'}} onPress={()=>console.log(navigation.navigate("ResultsModal"))}> Search </Button></View>
            <View style={styles.history}></View>
        </Layout>
    );
};

const styles = StyleSheet.create({
  inputs:{
    display:'flex', 
    flexDirection:'column', 
  },
  input:{
    height:56,
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

