import React from 'react'
import { View, StyleSheet } from 'react-native';
import {TimeAndLocation, DriverPreview} from '_molecules';
import {Colors, Mixins} from '_styles';
import {Text, Icon, Touchable} from '_atoms';

const ResultItem = ({data, status, onPress})=>{
    const {driver, rideInfo} = data;
    const statusColor = status==="Accepted" ? Colors.SUCCESS : status==="Declined" ? Colors.ALERT : Colors.PRIMARY
    return (
        <View style={styles.item_container}>
            <Touchable onPress={onPress} >
                <View style={styles.inner}>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'flex-start', marginBottom:18}}>
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', minHeight:72}}>
                        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                            <Text category="h3" weight="medium">13:30</Text>
                            <Text category="h3" weight="medium">15:40</Text>
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center', marginVertical:2, marginHorizontal:6}}>
                            <Icon status="default" name="circle" type="Feather" size={10}/>
                            <View style={{flex:1, width:2, backgroundColor:Colors.TEXT_BASIC_COLOR}}></View>
                            <Icon status="default" name="circle" type="Feather" size={10}/>
                        </View>
                        <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                            <Text style={{flexGrow: 0}} category="h3" weight="medium">Vezin-le-Coquet</Text>
                            <Text style={{flexGrow: 0}} category="h3" weight="medium">Fontenay-sous-Bois</Text>
                        </View>
                    </View>
                    <Text category="h3" weight="medium">32,50 $ </Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:18}}>
                    <View style={{height:50, width:50, borderRadius:25, backgroundColor:'red'}}> 
                    </View>
                    <View style={{marginLeft:14}}>
                        <Text category="h3" weight="regular">Jean-Luc</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon status="default" name="star" size={18}/>
                            <Text style={{marginLeft:4}} status="hint" category="h3" weight="regular">4,5</Text>
                        </View>
                    </View>
                </View>
                </View>
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    item_container:{
        height:200,
        backgroundColor:Colors.WHITE,
        borderRadius: 20,
        ...Mixins.boxShadow(Colors.BLACK,{height:2, width:0},4),
        ...Mixins.margin(8,0,8,0),
        overflow:'hidden',
        width:'98%',
        alignSelf:'center'
    },
    inner:{
        height:200,
        ...Mixins.padding(16),
    },
    status:{
        position:"absolute", 
        top:"85%", 
        left:"76%",
        borderRadius:10,
        color:Colors.WHITE,
        height:40, 
        width:96,
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:16,
        fontWeight:'700',
        
    }
});

export default ResultItem;