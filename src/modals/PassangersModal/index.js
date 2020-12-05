import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Colors, Mixins} from '_styles';
import {Icon, Text, Layout, Header, FAB} from '_atoms';
const PassangersModal = ({navigation}) => {
    const [seats, setSeats] = React.useState(1);
    const change_number = (op)=>{
        let s = seats;
        if (op==="+") {
            setSeats(++s);
        } else {
            setSeats(--s);
        }
    }
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Number of seats you wish to reserve</Text>
            <View>
                <View style={styles.search_bar}>
                    <Icon disabled={seats===1} status={seats===1 ? "base" : "primary"} pressHandler={()=>change_number("-")} name="remove-circle-outline" size={56}/>
                    <Text style={{fontSize:80, alignSelf:'center',}} weight='medium'>{seats}</Text>
                    <Icon disabled={seats>=8} status={seats>=8 ? "base" : "primary"} pressHandler={()=>change_number("+")} name="add-circle-outline" size={56}/>
                </View>
            </View>
            <FAB callback={()=>navigation.goBack()}/>
        </Layout>
    )
}

const styles = StyleSheet.create({
    search_bar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    }
})

export default PassangersModal;
