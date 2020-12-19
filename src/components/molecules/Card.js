import React from 'react'
import { View, StyleSheet } from 'react-native';
import {Colors, Mixins} from '_styles';
import { Touchable } from '_atoms';

const Card = ({onPress, children})=>{

    return (
        
    <View style={styles.item_container}>
              <Touchable onPress={onPress} >
                 <View style={styles.inner}>
                    <>
                        {children}
                    </>
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
    }
});

export default Card;