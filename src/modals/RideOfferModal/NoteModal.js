import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {Layout, Header, Text, Button, Input } from '_atoms';
import {Mixins, Colors} from '_styles';

const NoteModal = ({navigation}) => {
    const _onChangeText = ()=>{}
    const [invokeConfirmation, setInvokeConfirmation] = React.useState(false);
    const onConfirmation = () => {
        setInvokeConfirmation(true);
        setTimeout(()=>{
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [ { name: 'ConfimationModal' },]
                })
              );
        }, 1000);
    }
    
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
            <View style={{position:'absolute', bottom:40, width:116, alignSelf:'center'}}>
                {invokeConfirmation ? <ActivityIndicator size={Platform.OS==="android" ? 48 : 'large'} color={Colors.SUCCESS} /> : <Button onPress={onConfirmation}>Publish ride</Button>}
            </View>
        </Layout>
    )
}

export default NoteModal;


