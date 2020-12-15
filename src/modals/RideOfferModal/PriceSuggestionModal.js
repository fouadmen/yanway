import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {Layout, Header, Text, Divider, Icon } from '_atoms';
import {Mixins} from '_styles';

const PriceSuggestionModal = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>This is our recommended price per seat. OK for you?</Text>
            <Text category="extra" weight="medium" style={{marginBottom:24}}>15.00 $</Text>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("NoteModal")}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text category="h3" status="primary" style={{marginBottom:8}}>Yes, perfect!</Text>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
            <Divider style={{marginVertical: 24}}/>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("PriceAdjustmentModal")}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <Text status="hint" category="h3">No, I need to edit this amount</Text>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
        </Layout>
    )
}

export default PriceSuggestionModal;