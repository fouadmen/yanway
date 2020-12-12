import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Mixins} from '_styles';
import {Divider, Text, Icon} from '_atoms';
import Qs from 'qs';

const LocationSuggestions = (props)=>{
    const {onChoose, query} = props;
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(()=>{
       if (query?.length>=2) {
        bounceData(query)
       }else{
        setSuggestions([])
       }
    },[query]);

    const bounceData = (query)=>{
        const request = new XMLHttpRequest();
        const key = "AIzaSyAwoMYTvnGW5nbwFoYjAJp3wPiOCnMIXAE";
        const session = "112233TEST";
        const base_url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
    
        request.onerror = (prop)=>{
            console.error("error : ", prop);
        }
        request.onreadystatechange = ()=>{
            if (request.readyState !== XMLHttpRequest.DONE) {
                return;
            }
            if(request.status===200){
                const responseJSON = JSON.parse(request.responseText);
                setSuggestions(responseJSON?.predictions)
            }
        };
    
        const req = base_url +"components=country:jp&"+ Qs.stringify({
            input : query,
            key : key,
            language : 'jp',
            session : session,
            types: "(cities)"
        })
    
        request.open('GET', req);
        request.send();
    }

    return (
        <View style={{marginTop:-16}}>
            {suggestions.map((l,i)=>{
                return (
                    <>
                        <View onPress={()=>onChoose({description : l.description, place_id : l.place_id})}  style={{height:92, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'column', justifyContent:'center'}}>
                                <Text status='base' weight="medium" category="h4">{l.description}</Text>
                                <Text status='hint' weight="medium" category="p">Tokyo</Text>
                            </View>
                            <Icon style={{marginRight:-6}} name="chevron-right" type="Feather" />
                        </View>
                        <Divider />
                    </>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: Colors.WHITE,
        borderRadius:10,
        ...Mixins.padding(0,8,0,8),
        ...Mixins.margin(8,0,0,0),
        ...Mixins.boxShadow(Colors.BLACK,{height:2, width:0},4),
    }
})

export default LocationSuggestions;