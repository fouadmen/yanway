import React from "react";
import {CalendarList} from 'react-native-calendars';
import {Typography} from '_styles';
import { Header, Layout, Text} from '_atoms';
import {Mixins} from '_styles';

function getInitialState() {
  var inialState = {}
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  inialState[yyyy + '-' + mm +'-' + dd] = {selected: true}
  return  inialState;
}

const Calendar = ({navigation}) => {
  const [makedDates, setMarked] = React.useState(getInitialState());
  const [selectedDate, setDate] = React.useState(new Date());
  const changeDate=(day)=>{
    setDate(day.dateString);
    var marker = {}
    marker[day.dateString] = {selected: true, customStyles : {text:{marginTop:6}}}
    setMarked(JSON.parse(JSON.stringify(marker)));
    navigation.navigate("TimePicker");
  }
  return (
    <Layout>
      <Header first navigation={navigation}/>
      <Text style={Mixins.header()} category="h1" weight='medium'>When are you leaving?</Text>
      <CalendarList 
        selected={selectedDate}
        minDate={new Date()} 
        pastScrollRange={0} 
        futureScrollRange={6}
        onDayPress={changeDate}
        markedDates={makedDates}
        markingType={'custom'}  
        theme={{
          textDayFontFamily: Typography.FONT_FAMILY_REGULAR,
          textMonthFontFamily: Typography.FONT_FAMILY_REGULAR,
          textDayHeaderFontFamily: Typography.FONT_FAMILY_REGULAR,
        }}
      />
    </Layout>
  );
};

export default Calendar;