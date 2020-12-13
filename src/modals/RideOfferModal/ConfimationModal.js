import React from 'react';
import { View, NativeModules, Platform } from 'react-native';
import {Layout, Header, Text, Button, Input } from '_atoms';
import {Colors} from '_styles';

const ConfimationModal = ({navigation}) => {
    const immersiveMode = (state) => {
        if(Platform.OS!="android")
            return;
        if (state) {
            NativeModules.ImmersiveMode.enterImmersiveMode();
        } else {
            NativeModules.ImmersiveMode.exitImmersiveMode();
        }
    }

    React.useEffect(()=>{
        navigation.addListener('beforeRemove',(e)=>{
            e.preventDefault();
        })
        immersiveMode(true);
    },[navigation])

    const navigate = () => {
        immersiveMode(false);
        navigation.navigate("Rides");
    }

    return (
        <Layout style={{backgroundColor:Colors.SUCCESS, justifyContent:'center'}}>
            <Text style={{alignSelf:'center', textAlign:'center'}} status="white" category="h1" weight='medium'>Your ride is online! Passengers can now book and travel with you.</Text>
            <View style={{position:'absolute', top:'86%', width:116, alignSelf:'center'}}>
                <Button status="white" textStatus="primary" onPress={navigate}>See my ride</Button>
            </View>
        </Layout>
    )
}

export default ConfimationModal;
