import React from 'react';
import { View } from 'react-native';
import {Layout, Header, Text, Button, Input } from '_atoms';
import {Mixins} from '_styles';

const NoteModal = ({navigation}) => {
    const _onChangeText = ()=>{}
    return (
        <Layout>
            <Header navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>What are your preferences ?</Text>
            <Input
                _onChangeText = {_onChangeText}
                iconComponent={<></>}
                style={{minHeight:146}}
                placeholder="Are you flexible with regard to the meeting place and time? you are not taking the highway? Is space in your trunk limited? keep your passengers informed."
                multiline={true}
            />
            <View style={{position:'absolute', top:'86%', width:116, alignSelf:'center'}}>
                <Button onPress={()=>navigation.navigate("ConfimationModal")}>Publish ride</Button>
                {/* replace button with activityloader */}
            </View>
        </Layout>
    )
}

export default NoteModal;


