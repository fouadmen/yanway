import React from 'react';
import { FlatList } from "react-native";
import {Layout, Header, Text, Checkbox, Divider, FAB } from '_atoms';
import {Mixins} from '_styles';


const renderStops = ({item})=>{
    return (<Checkbox style={{marginVertical:8}}>{item.a}</Checkbox>)
}

const StopoversModal = ({navigation}) => {
    const data = [{a : "versailles"}, {a: "dreux"}, {a:"chartes"}]
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Do you want to add stopovers passengers can book?</Text>
            <FlatList
                data={data}
                renderItem={renderStops}
                keyExtractor={(t,i)=>""+i}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=><Divider/>}
                ListFooterComponent={()=><Text onPress={()=>{navigation.navigate("")}} category="h4" status="primary">Add city</Text>}
            />
            <FAB onPress={()=>navigation.navigate("Calendar")}/>
        </Layout>
    )
}
export default StopoversModal;
