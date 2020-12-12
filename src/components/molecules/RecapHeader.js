import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Icon } from '_atoms';
import { Colors } from '_styles';
const width = Dimensions.get('screen').width
const RecapHeader = ({y, navigation, style})=>{
    // const search = useSelector(state=>state.search);
    // const top = y.interpolate({inputRange:[0,100], outputRange:[0,-70], extrapolateLeft:'clamp'}) 
    // const opacity = y.interpolate({inputRange:[0,50,100], outputRange:[1,0.5,0], extrapolateLeft:'clamp'}) 
    return(
        <View style={[styles.header, style]}>
            <Icon name="chevron-left" type="Feather" pressHandler={()=>navigation.pop()}/>
            <View style={styles.recap}>
                <View style={{flexDirection:'row', alignItems:'center', width:0.71*width, overflow:'hidden'}}>
                    <Text status="base" category="s2">7 Rue Ernest Renant, Ren...</Text>
                    <Icon containerStyle={{marginHorizontal:4}} name="arrowright" type="AntDesign" status="base" size={12} pressHandler={()=>navigation.goBack()}/>            
                    <Text status="base" category="s2">Menilmontant, Paris</Text>
                </View>
                <Text status="hint" category="s2">{`Jeu. 10 dec., 1 passanger`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        height:56,
        backgroundColor:Colors.GRAY_LIGHT,
        borderRadius:15,
        flexGrow:0,
        marginTop:14,
        marginHorizontal:24
    },
    recap:{
        marginLeft:10,
    }
})

export default RecapHeader;