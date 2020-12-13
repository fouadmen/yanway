import React, {useState} from 'react';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Header, Layout, Text, FAB} from '_atoms';
import {TimePicker} from '_molecules';

import {Mixins} from '_styles';

const Time = ({route, navigation}) => {
  const [time, setTime] = useState((new Date()).setHours(8,0,0));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime|| time;
    setShow(Platform.OS === 'ios');
    setTime(currentTime);
  };

  return (
    <Layout>
        <Header navigation={navigation}/>
        <Text style={Mixins.header()} category="h1" weight='medium'>what time are you leaving ?</Text>
        <TimePicker time={time} onPress={()=>setShow(true)}/>
        {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={time}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        )}
        <FAB onPress={()=>navigation.navigate(route.params?.nextScreen ? route.params.nextScreen : "Tab")}/>
    </Layout>
  );
};

export default Time;