import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import {Layout, Header, Text, Divider, Icon, Button} from '_atoms';
import {Timeline} from '_organisms';
import {Mixins, Colors} from '_styles';

const notIncludedStopStyle = {};
const WIDTH = Dimensions.get('screen').width;
const RideDetail = ({navigation}) => {
    const data = [
        {time: '', title: 'Address Start', description: 'City Start', category:'s2', status:'hint', lineColor:Colors.TEXT_HINT_COLOR, circleColor:Colors.TEXT_HINT_COLOR},
        {time: '10:45', title: 'Stop Address 1', description: 'Stop City 1'},
        {time: '12:00', title: 'Stop Address 2', description: 'Stop City 2', lineColor:Colors.TEXT_HINT_COLOR},
        {time: '', title: 'Address End', description: 'City End',category:'s2', status:'hint', circleColor:Colors.TEXT_HINT_COLOR},
      ]
    return (
        <Layout style={{paddingHorizontal:0}}>
            <Header navigation={navigation} style={{paddingHorizontal:24}}/>
            <Timeline listViewContainerStyle={{marginHorizontal:24}} footerStyle={{ paddingBottom:24}} data={data} circleSize={10} descriptionStyle={{color:'gray'}} header={<Text style={Mixins.header()} category="h1" weight='medium'>Satuday, Dec 05</Text>}>
                <View>
                    <Divider style={{height:8, marginVertical:16}}/>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text category="p" status="hint" >Total price for 1 passenger</Text>
                        <Text category="h2" weight="medium" >7,5 $</Text>
                    </View>
                    <Divider style={{height:8, marginVertical:16}}/>
                    <View>
                        <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center'}}>
                            <View>
                                <Text category="h4">Rodolphe</Text>
                                <Text category="p" status="hint"><Icon status="base" name="star" size={18}/> 4.6 / 5 - 900 avis</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={{height:50, width:50, borderRadius:25, backgroundColor:'red'}}></View>
                                <Icon name="chevron-right" type="Feather"/>
                            </View>
                        </View>
                        <Text style={{marginVertical:24}} status="hint">Lorem mollit deserunt amet aliquip amet sint quis culpa voluptate duis id. Aliqua aliquip labore aute laboris exercitation minim laborum sit tempor. Incididunt ut eu ad nulla laboris consectetur ipsum id sunt non voluptate quis.</Text>
                        <Text category="h4" status="primary">Contact Rodolphe</Text>
                        <Divider style={{marginVertical:16}}/>
                        <View>
                            <View style={styles.conditions}>
                                <Icon name="bolt" type="FontAwesome5" containerStyle={{marginRight:8}}/>
                                <Text status="hint">Automatic confirmation</Text>
                            </View>
                            <View style={styles.conditions}>
                                <Icon name="pets" type="MaterialIcons" containerStyle={{marginRight:8}}/>
                                <Text status="hint">Automatic confirmation</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text category="h4">OPEL CORSA</Text>
                                <Text category="p" status="hint">Beige</Text>
                            </View>
                            <Icon name="car-side" type="FontAwesome5" size={32}/>
                        </View>
                        <Divider style={{height:8, marginVertical:16}}/>
                        <Text category="h4" status="primary">Report this ride</Text>
                    </View>
                </View>
            </Timeline>
            <View style={{height:96, width:WIDTH, borderTopColor:Colors.GRAY_LIGHT, borderTopWidth:1, flexDirection:'column', justifyContent:'center'}}>
                <View style={styles.button}><Button style={{borderRadius:20}} textStyle={{fontSize:16, color:'Black'}} callback={()=>console.log(navigation.navigate("Results"))}> Continue </Button></View>
            </View>
                {/* <Divider style={{height:8}}/> */}
                {/* <View>passangers </View> */}
                {/* <Divider style={{height:8}}/> */}
                {/* <Text>Signal this ride</Text> */}                   

        </Layout>
    )
}

const styles = StyleSheet.create({
    conditions:{
        marginBottom:24, 
        flexDirection:'row', 
        alignItems:'center'
    },
    button :{ 
        alignSelf:'center',
        minWidth:'90%'
    }
})
export default RideDetail
