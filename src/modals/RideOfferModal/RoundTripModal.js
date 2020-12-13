import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {Layout, Header, Text, Divider, Icon } from '_atoms';
import {Mixins} from '_styles';

const RoundTripModal = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Coming back as well? Publish your return ride now!</Text>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("NoteModal")}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text category="h3" status="primary" style={{marginBottom:8}}>Yes, sure!</Text>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
            <Divider style={{marginVertical: 24}}/>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("NoteModal")}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text status="hint" category="h3">I'll publish my return ride later</Text>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
        </Layout>
    )
}

export default RoundTripModal;