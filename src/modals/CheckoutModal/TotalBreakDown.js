import React from 'react';
import { View } from 'react-native';
import {Layout, Header, Text, Divider } from '_atoms';
import {Mixins} from '_styles';

const TotalBreakDown = ({navigation}) => {
    return (
        <Layout>
            <Header first navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Detail</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:24}}>
                <Text category="h4">1 seat x 31,50 $</Text>
                <Text category="h2" weight="medium">31,50 $ </Text>
            </View> 
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:24}}>
                <Text category="h4">Service fees </Text>
                <Text category="h2" weight="medium">1 $ </Text>
            </View> 
            <Divider/>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:24}}>
                <Text category="h4">Total</Text>
                <Text category="h2" weight="medium">32,50 $ </Text>
            </View> 
        </Layout>
    )
}

export default TotalBreakDown
