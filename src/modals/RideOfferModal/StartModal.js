import React from 'react'
import { View } from 'react-native'
import {Layout, Header, Text, Input, Icon } from '_atoms';
import { LocationSuggestions } from "_molecules";
import {Mixins} from '_styles';

const StartModal = ({navigation}) => {
    const [location, setLocation] = React.useState('');
    const [displayList, setDisplayList] =  React.useState(false) ;

    const onChoose = ()=>{
        navigation.navigate("DestinationModal");
    }
    const textChangeHandler = (text)=>{
        setLocation(text);
        setDisplayList(true);
    }
    return (
        <Layout>
            <Header first navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>Where are you leaving from?</Text>
            <Input 
                containerStyle={{marginTop:0}} 
                placeholder='Address...' 
                _onChangeText={textChangeHandler}
                iconComponent={<Icon style={{marginRight:-6}} name="ios-search-outline"  />}
            />
            {displayList && <LocationSuggestions onChoose={onChoose} query={location} />}
        </Layout>
    )
}
export default StartModal;
