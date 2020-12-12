import React from 'react';
import { View } from 'react-native';
import {Layout, Header, Text, Divider, RadioGroup, Radio, Checkbox, Button } from '_atoms';
import {Mixins} from '_styles';

const FilterModal = ({navigation}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <Layout>
            <Header first navigation={navigation}/>
            <Text style={Mixins.header()} category="h1" weight='medium'>What are your preferences ?</Text>
            <View style={{flexDirection:'column'}}>
                <Text style={{marginVertical:16}} category="h2" weight='medium'>Sort by</Text>
                <RadioGroup selectedIndex={selectedIndex} onChange={index => setSelectedIndex(index)}>
                    <Radio>Earliest departure</Radio>
                    <Radio>Lowest price</Radio>
                </RadioGroup>
                <Divider style={{marginVertical:16}}/>
                <Text style={{marginVertical:16}} category="h2" weight='medium'>Amenities</Text>
                <Checkbox>Instant approval (2)</Checkbox>
            </View>
            <View style={{marginTop:162, width:108, alignSelf:'center'}}>
                <Button onPress={()=>navigation.goBack()}>See rides</Button>
            </View>
        </Layout>
    )
}

export default FilterModal;
