import React from 'react'
import { View, StyleSheet } from 'react-native';
import Timeline from './Timeline';
import {Colors, Mixins} from '_styles';
import {Text, Icon, Touchable} from '_atoms';

const ResultItem = ({data, status, navigation})=>{
    const {driver, rideInfo} = data;
    const statusColor = status==="Accepted" ? Colors.SUCCESS : status==="Declined" ? Colors.ALERT : Colors.PRIMARY
    const _data = [
        {time: '09:00', title: 'Address Start', description: 'City Start'},
        {time: '10:45', title: 'Stop Address 1', description: 'Stop City 1'},
      ]
    return (
        
    <View style={styles.item_container}>
              <Touchable onPress={()=>navigation.navigate('RideDetailModal')} >
                 <View style={styles.inner}>
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'flex-start', height:96}}>
                        <Timeline data={_data}  circleSize={5} descriptionStyle={{color:'gray'}}  />
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