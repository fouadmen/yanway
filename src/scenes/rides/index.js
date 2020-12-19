import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import { Icon, Layout, Text } from '_atoms';

const ratio = 600/390;
const CARD_WIDTH = Dimensions.get("screen").width;
const CARD_HEIGHT = CARD_WIDTH * ratio;

const Rides = ({navigation}) => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.header} status="white" weight="medium" category="h1">Your ride. Your choice.</Text>
            <Image style={styles.img} source={require('../../assets/images/LandingImage.png')} />
            <View style={{height:56,flexDirection:'row'}}>
              <TouchableWithoutFeedback onPress={()=>navigation.navigate("HistoryModal")}>
                  <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center', flex:1, paddingHorizontal:24}}>
                      <Text category="h3">See archived rides</Text>
                      <Icon name="chevron-right" type="Feather"/>
                  </View>
              </TouchableWithoutFeedback>
            </View>
        </Layout>
        

    );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:0,
  },
  header: {
    position:'absolute',
    zIndex:1,
    alignSelf:'center',
    top:48
  },
  img:{
    width:CARD_WIDTH+1,
    height:CARD_HEIGHT,
    flex:1, 
    flexGrow:1
  }
});

export default Rides

