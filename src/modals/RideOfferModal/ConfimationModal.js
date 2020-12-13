import React from 'react';
import { View } from 'react-native';
import {Layout, Header, Text, Button, Input } from '_atoms';
import {Colors} from '_styles';

const ConfimationModal = ({navigation}) => {
    React.useEffect(()=>{
        navigation.addListener('beforeRemove',(e)=>{
            e.preventDefault();
        })
    },[navigation])
    return (
        <Layout style={{backgroundColor:Colors.SUCCESS, justifyContent:'center'}}>
            <Text style={{alignSelf:'center', textAlign:'center'}} status="white" category="h1" weight='medium'>Your ride is online! Passengers can now book and travel with you.</Text>
            <View style={{position:'absolute', top:'86%', width:116, alignSelf:'center'}}>
                <Button status="white" textStatus="primary" onPress={()=>navigation.navigate("Rides")}>See my ride</Button>
            </View>
        </Layout>
    )
}

export default ConfimationModal;
