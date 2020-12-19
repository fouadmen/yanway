import React from 'react';
import { FlatList, View } from 'react-native';
import { Layout, Header, Text, Icon, Divider } from "_atoms";
import { Timeline } from "_organisms";
import {Mixins, Colors} from '_styles';

const RidePlan = ({navigation}) => {
    const data = [
        {time: '09:00', title: 'Address Start', description: '東京'},
        {time: '10:45', title: 'Stop Address 1', description: '名古屋'},
      ]
    const [DATA, setData] = React.useState([]);

    const renderBody = ({ item }) => {
        return (
            <View navigation={navigation}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="ban" type="FontAwesome"  size={32}/>
                    <Text style={{marginLeft:8}} status="hint" category="h3">Cancelled</Text>
                </View>
                <Divider style={{marginVertical:16}}/>
                <Text style={{marginVertical:16}} weight="medium" category="h3">Sat 19 Dec, 23:10</Text>
                <Timeline data={data} circleSize={5} descriptionStyle={{color:'gray'}} />
                <Divider style={{marginVertical:16}}/>
            </View>
        )
    };

    const renderHeader = ()=>{
        return (
            <Text style={Mixins.header()} category="h1" weight='medium'>Ride plan</Text>
        )
    }

    return (
        <Layout>    
            <Header style={{marginBottom:24}} navigation={navigation}/> 
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderHeader}
                ListHeaderComponentStyle={{marginTop:8}}
                ListFooterComponent={renderBody}
            />
        </Layout>
    )
}

export default RidePlan;
