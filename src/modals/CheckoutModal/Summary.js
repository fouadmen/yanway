import React from 'react'
import { View } from 'react-native'
import {Layout, Header, Text, Divider, Button } from '_atoms';
import {Timeline} from '_organisms';
import {Mixins} from '_styles';

const _data = [
    {time: '09:00', title: 'Address Start', description: 'City Start'},
    {time: '10:45', title: 'Stop Address 1', description: 'Stop City 1'},
  ]

const Summary = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Verify your booking summary</Text>
            <View style={{height:132}}>
                <Text style={{marginBottom:8}} category="p" weight='medium'>Wed 16 Dec</Text>
                <Timeline data={_data}  circleSize={5} descriptionStyle={{color:'gray'}}  />
            </View>
            <Divider style={{marginBottom:24}}/>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:24}}>
                <Text category="h4">Total</Text>
                <Text category="h3" weight="medium">32,50 $ </Text>
            </View> 
            <Text onPress={()=>{navigation.navigate("TotalBreakDown")}} category="h4" status="primary">Total breakdown</Text>
            <View style={{marginTop:248, width:108, alignSelf:'center'}}>
                <Button onPress={()=>navigation.navigate("CheckoutMethod")}>Book</Button>
            </View>
        </Layout>
    )
}

export default Summary
