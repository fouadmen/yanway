import React from 'react';
import { View } from 'react-native';
import {Layout, Header, Text, Button, Icon } from '_atoms';
import { Colors } from "_styles";
const PriceAdjustmentModal = ({navigation}) => {
    const estimation = {
        estimatedPrice : 15,
        max:30,
        min:10
    }
    const [price, setprice] = React.useState(estimation.estimatedPrice);
    const [color, setColor] = React.useState("success");
    
    React.useEffect(()=>{
        const ratio = price/estimation.estimatedPrice;
        if (ratio<=1) {
            setColor("success");
        } else if(ratio>1 && ratio <=1.2){
            setColor("warning");
        } else {
            setColor("alert");
        }
    },[price])
    const change_number = (op)=>{
        let s = price;
        if (op==="+") {
            setprice(++s);
        } else {
            setprice(--s);
        }
    }
    return (
        <Layout style={{paddingHorizontal:0}}>
            <Header style={{marginLeft:24}} navigation={navigation}/>
            <Text category="h3" style={{marginVertical:24, marginHorizontal:24}}>Edit the price</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal:24}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text status="base" weight="medium" category="h3">Tokyo</Text>
                    <Icon containerStyle={{marginHorizontal:4}} name="arrowright" type="AntDesign" status="base" size={12} pressHandler={()=>navigation.goBack()}/>            
                    <Text status="base" weight="medium"  category="h3">Nagoya</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',}}>
                    <Icon disabled={price<=estimation.min} status={price<=estimation.min? "base" : "primary"} pressHandler={()=>change_number("-")} name="remove-circle-outline" />
                    <Text style={{alignSelf:'center',marginHorizontal:8}} status={color} category="h2" weight='medium'>{'$'+price}</Text>
                    <Icon disabled={price>=estimation.max} status={price>=estimation.max? "base" : "primary"} pressHandler={()=>change_number("+")} name="add-circle-outline" />
                </View>
            </View>
            <View style={{height:96, width:'100%', borderTopColor:Colors.GRAY_LIGHT, borderTopWidth:1, flexDirection:'column', justifyContent:'center', position:'absolute', bottom:0, alignSelf:'center'}}>
                <View style={{alignSelf:'center', minWidth:'90%'}}><Button style={{borderRadius:20}} textStyle={{fontSize:16, color:'Black'}} onPress={()=>navigation.navigate("NoteModal")}> Continue </Button></View>
            </View>   
        </Layout>
    )
}

export default PriceAdjustmentModal;