import React from 'react';
import { LocationSuggestions } from "_molecules";
import {Layout, Input} from "_atoms";

const TextInputModal = ({navigation})=>{
    const [location, setLocation] = React.useState('');
    const [displayList, setDisplayList] =  React.useState(false) ;

    const onChoose = ()=>{}
    const textChangeHandler = (text)=>{
        setLocation(text);
        setDisplayList(true);
    }
    return (
       <Layout>
            <Input placeholder='Address...' backHandler={()=>navigation.goBack()} _onChangeText={textChangeHandler}/>
            {displayList && <LocationSuggestions onChoose={onChoose} query={location} />}
       </Layout>
    )
}

export default TextInputModal;