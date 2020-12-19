import React from 'react';
import { FlatList, ActivityIndicator, View, Dimensions } from 'react-native';
import { Layout, Header, Text, Icon } from "_atoms";
import { Card } from "_molecules";
import { Timeline } from "_organisms";
import {Mixins, Colors} from '_styles';

const HEIGHT = Dimensions.get('window').height;
const EmptyState = ({hasNoData, displayActivityIndicator}) => {
    if (displayActivityIndicator) {
        return (<ActivityIndicator size={Platform.OS==="android" ? 48 : 'large'} color={Colors.SUCCESS}/>);
    }
    if (hasNoData) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You haven't done any rides yet !</Text>
          </View>
      )  
    }
};

const RideHistory = ({navigation}) => {
    const data = [
        {time: '09:00', title: 'Address Start', description: '東京'},
        {time: '10:45', title: 'Stop Address 1', description: '名古屋'},
      ]
    const [DATA, setData] = React.useState([]);
    const [displayActivityIndicator, setDisplayActivityIndicator] = React.useState(true);

    const renderItem = ({ item }) => {
        return (
            <Card onPress={()=>navigation.navigate("RidePlan")}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="ban" type="FontAwesome"  size={32}/>
                    <Text style={{marginLeft:8}} status="hint" category="h3">Cancelled</Text>
                </View>
                <Text style={{marginVertical:8}} weight="medium" category="h2">Sat 19 Dec, 23:10</Text>
                <Timeline data={item} circleSize={5} descriptionStyle={{color:'gray'}} />
            </Card>
        )
    };

    const renderHeader = ()=>{
        return (
            <Text style={Mixins.header()} category="h1" weight='medium'>Ride history</Text>
        )
    }

    const updateData = (data)=>{  
        if (data) {
            setData(data);
        } else {
            setDisplayActivityIndicator(false);
        }
    }

    React.useEffect(() => {
        let t = new Array(12).fill(data);
        setTimeout(()=>{
            updateData(t)
        }, 1000);
    }, []);
    
    return (
        <Layout>    
            <Header style={{marginBottom:24}} navigation={navigation}/> 
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={() => String(Math.random()*100)}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderHeader}
                ListHeaderComponentStyle={{marginTop:8}}
                ListEmptyComponent={()=><EmptyState hasNoData={DATA.length===0} displayActivityIndicator={displayActivityIndicator}/>}
                extraData={DATA}
                contentContainerStyle={{minHeight: HEIGHT*0.7}}
            />
        </Layout>
    )
}

export default RideHistory;
