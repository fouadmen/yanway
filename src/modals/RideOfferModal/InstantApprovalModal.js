import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {Layout, Header, Text, Divider, Icon } from '_atoms';
import {Mixins} from '_styles';

const InstantApprovalModal = ({navigation}) => {
    const navigateToNext = ()=> navigation.navigate("PriceSuggestionModal")
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Can passengers book instantly?</Text>
            <TouchableWithoutFeedback onPress={navigateToNext}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text category="h3" status="primary" style={{marginBottom:8}}>Yes, sure!</Text>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
            <Divider style={{marginVertical: 24}}/>
            <TouchableWithoutFeedback onPress={navigateToNext}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text status="hint" category="h3">No, I’ll reply to each request myself</Text>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
        </Layout>
    )
}

export default InstantApprovalModal;
