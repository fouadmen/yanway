import React from 'react'
import { View, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import {Layout, Header, Text, Divider, Icon } from '_atoms';

const DriverProfile = ({navigation}) => {
    return (
        <Layout>
            <Header navigation={navigation}/>
            <FlatList
                ListFooterComponent={<Detail navigation={navigation}/>}
                ListFooterComponentStyle={{flexDirection:'row',justifyContent:'center', paddingBottom:24}}
                showsVerticalScrollIndicator={false}
            />
        </Layout>
    )
}

const Detail = ({navigation})=>{
    return (
        <View>
            <View style={{alignItems:'center'}}>
                <View style={{height:80, width:80, borderRadius:40, backgroundColor:'red', marginVertical:24}}/>
                <Text category="h1" weight="medium">Even</Text>
                <Text category="p" status="hint" >30 y/o</Text>
                <Text style={{marginVertical:16}} category="p" status="hint">Exercitation culpa aute ullamco exercitation ex excepteur ut Lorem sunt culpa laborum quis. Id fugiat excepteur amet Lorem irure in commodo qui occaecat.</Text>
            </View>
            <View style={{marginVertical:16}}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate("DriverRates")}>
                    <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                        <Icon status="base" name="star"/>
                        <Text style={{flex:1}} category="h4"> 4.6 / 5 - 900 ratings</Text>
                        <Icon name="chevron-right" type="Feather"/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Text style={{marginVertical:16}} category="p" status="hint">3/3 - Good driving skills</Text>
            <Divider style={{marginVertical:16}}/>
            <View>
                <View style={styles.conditions}>
                    <Icon name="chatbubble-outline" containerStyle={{marginRight:8}}/>
                    <Text category="p" status="hint">I like talking.</Text>
                </View>
                <View style={styles.conditions}>
                    <Icon name="musical-notes" containerStyle={{marginRight:8}}/>
                    <Text category="p" status="hint">I like listening to music.</Text>
                </View>
            </View>
            <Divider style={{marginVertical:16}}/>
            <View>
                <View style={styles.conditions}>
                    <Icon style={{fontWeight:1}} name="checkcircleo" status="success" type="AntDesign" containerStyle={{marginRight:8}}/>
                    <Text category="p" status="hint">Tel number verified</Text>
                </View>
                <View style={styles.conditions}>
                    <Icon name="closecircleo" status="danger" type="AntDesign" containerStyle={{marginRight:8}}/>
                    <Text category="p" status="hint">Email verified</Text>
                </View>
            </View>
            <Divider style={{marginVertical:16}}/>
            <Text style={{marginVertical:16}} category="p" status="hint"> 67 published rides </Text>
            <Text style={{marginVertical:16}} category="p" status="hint"> Member since 2018</Text>
            <Divider style={{marginVertical:16}}/>
            <Text category="h4" status="primary">Report profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conditions:{
        marginVertical:16, 
        flexDirection:'row', 
        alignItems:'center'
    }
})
export default DriverProfile;
