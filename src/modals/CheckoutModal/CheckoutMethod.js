import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {Layout, Header, Text, Divider, Icon } from '_atoms';
import {Mixins} from '_styles';

const CheckoutMethod = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Choose your payment method</Text>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("DriverProfile")}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <View>
                        <Text category="h4" style={{marginBottom:8}}>Card</Text>
                        <Text category="p" status="hint">Mastercard, Visa </Text>
                    </View>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
            <Divider style={{marginVertical: 24}}/>
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("DriverProfile")}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                    <View>
                        <Text category="h4">Paypal</Text>
                        {/* <Text category="p" status="hint">Paypal</Text> */}
                    </View>
                    <Icon name="chevron-right" type="Feather"/>
                </View>
            </TouchableWithoutFeedback>
        </Layout>
    )
}

export default CheckoutMethod

