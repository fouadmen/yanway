import React from 'react'
import { View, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import {Layout, Header, Text, Divider, Icon, Button} from '_atoms';

const ListHeader = ()=>{
    return (
        <View>
            <Text style={{marginBottom:24}} category="h1" weight="medium">Rates</Text>
            <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                <Icon status="base" name="star"/>
                <Text style={{flex:1}} category="h4"> 4.6 / 5 - 900 ratings</Text>
            </View>
            <View style={{marginVertical:16}}>
                <View style={styles.ratings}>
                    <Text category="p" status="hint">Outstanding</Text>
                    <Text category="h2" weight="medium">15</Text>
                </View>
                <View style={styles.ratings}>
                    <Text category="p" status="hint">Excellent</Text>
                    <Text category="h2" weight="medium">4</Text>
                </View>
                <View style={styles.ratings}>
                    <Text category="p" status="hint">Good</Text>
                    <Text category="h2" weight="medium">1</Text>
                </View>
                <View style={styles.ratings}>
                    <Text category="p" status="hint">Poor</Text>
                    <Text category="h2" weight="medium">0</Text>
                </View>
                <View style={styles.ratings}>
                    <Text category="p" status="hint">Very disappointing</Text>
                    <Text category="h2" weight="medium">0</Text>
                </View>
            </View>
        </View>
    )
}

const RatingItem = ({profile})=>{
    return (
        <View style={{marginVertical:8}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text category="h3">Cassandre</Text>
                <View style={{height:48, width:48, borderRadius:24, backgroundColor:'red', marginVertical:24}}/>
            </View>
            <Text category="p">Outstanding</Text>
            <Text status="hint" style={{marginVertical:8}}>
               Duis in fugiat id eu excepteur esse velit minim ut irure. Aliquip elit id voluptate sit nisi Lorem velit nost. 
            </Text>
            <Text status="hint" style={{marginBottom:8}}>Oct 2020</Text>
        </View>
    )
}

const DriverRates = ({navigation}) => {
    const DATA = [
        {a:1}, {a:2}
    ]
    return (
        <Layout>
            <Header navigation={navigation}/>
            <FlatList
                data={DATA}
                renderItem={item=><RatingItem profile={item}/>}
                contentContainerStyle={{paddingVertical:16}}
                ListHeaderComponent={ListHeader}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, id) => id}
                ItemSeparatorComponent={()=><Divider/>}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    ratings:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginVertical:16
    }
});

export default DriverRates
