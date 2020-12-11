import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RidesScreen from '_scenes/rides';
import SearchScreen from '_scenes/search';
import ProfileScreen from '_scenes/profile';
import MessagesScreen from '_scenes/messages';
import ProposeScreen from '_scenes/propose';
import TextInputModal from '_modals/TextInputModal';
import PassangersModal from '_modals/PassangersModal';
import {Results, Filter} from '_modals/ResultsModal'
import {RideDetail, DriverProfile, DriverRates} from '_modals/RideDetailModal';
import {Summary, TotalBreakDown, CheckoutMethod} from '_modals/CheckoutModal';
import {Calendar, Time} from '_modals/DateModal';
import {Colors, Spacing} from '_styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RideStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProposeStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const DateModalStack = createStackNavigator();
const RideDetailStack = createStackNavigator();
const CheckoutStack = createStackNavigator();
const ResultsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const AppRootStackNavigator = createStackNavigator();

const verticalInterpolation = {gestureDirection:'vertical', cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS}
const horizotalInterpolation = {gestureDirection:'vertical', cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS}
const tab_opt = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Rides') {
        iconName = "home-outline"
      } else if (route.name === 'Search') {
        iconName = "search";
      } else if(route.name === 'Propose'){
        iconName = "add-circle-outline"
      } else if(route.name === 'Messages'){
        iconName = "chatbubbles-outline"
      } else if(route.name === 'Profile'){
        return <FontAwesome name={"user-circle"} size={24} color={color} />;
      }
      return <Ionicons name={iconName} size={24} color={color} />;
    }
});

const tab_style = { backgroundColor: Colors.WHITE, borderTopColor:Colors.PRIMARY, borderTopWidth:2  }

function RideStackScreen() {
    return (
        <RideStack.Navigator>
        <RideStack.Screen name="Ride" component={RidesScreen} /> 
        </RideStack.Navigator>
    );
}

function SearchScreens() {
    return (
        <SearchStack.Navigator headerMode="none">
          <SearchStack.Screen name="Search" component={SearchScreen} /> 
        </SearchStack.Navigator>
    );
}

function ProposeStackScreen() {
    return (
        <RideStack.Navigator>
        <RideStack.Screen name="Propose" component={ProposeScreen} /> 
        </RideStack.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} /> 
        </ProfileStack.Navigator>
    );
}

function MessagesStackScreen() {
    return (
        <SettingsStack.Navigator>
        <SettingsStack.Screen name="Messages" component={MessagesScreen} /> 
        </SettingsStack.Navigator>
    );
}

function DateModal() {
  return(
    <DateModalStack.Navigator headerMode="none">
      <DateModalStack.Screen name="Calendar" component={Calendar} options={horizotalInterpolation}/>
      <DateModalStack.Screen name="TimePicker" component={Time} options={horizotalInterpolation}/>
    </DateModalStack.Navigator>
  );
}

function RideDetailModal() {
  return(
    <RideDetailStack.Navigator headerMode="none">
      <RideDetailStack.Screen name="RideDetail" component={RideDetail} />
      <RideDetailStack.Screen name="DriverProfile" component={DriverProfile} />
      <RideDetailStack.Screen name="DriverRates" component={DriverRates} />
    </RideDetailStack.Navigator>
  );
}

function CheckoutModal() {
  return (
    <CheckoutStack.Navigator headerMode="none">
      <CheckoutStack.Screen name="Summary" component={Summary}/>
      <CheckoutStack.Screen name="CheckoutMethod" component={CheckoutMethod}/>
      <CheckoutStack.Screen name="TotalBreakDown" component={TotalBreakDown} options={{verticalInterpolation}}/>
    </CheckoutStack.Navigator>
  );
}

function ResultsModal() {
  return (
    <ResultsStack.Navigator headerMode="none">
      <ResultsStack.Screen name="Results" component={Results}/>
      <ResultsStack.Screen name="Filter" component={Filter} options={{verticalInterpolation}}/>
    </ResultsStack.Navigator>
  );
}

function TabNavigator(){
  return (
    <Tab.Navigator initialRouteName="Rides" screenOptions = {tab_opt}  barStyle={tab_style} activeColor={Colors.PRIMARY} inactiveColor={Colors.BLACK}>
        <Tab.Screen name="Rides" component={RidesScreen} />
        <Tab.Screen name="Search" component={SearchScreens} />
        <Tab.Screen name="Propose" component={ProfileScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  ) 
}

const AppNavigator = ()=>{
    return (
        <AppRootStackNavigator.Navigator headerMode="none">
          <AppRootStackNavigator.Screen name="Tab" component={TabNavigator} />
          <AppRootStackNavigator.Screen name="TextInputModal" component={TextInputModal} options={{verticalInterpolation}}/>
          <AppRootStackNavigator.Screen name="DateModal" component={DateModal} options={{verticalInterpolation}}/>
          <AppRootStackNavigator.Screen name="PassangersModal" component={PassangersModal} options={{verticalInterpolation}}/>
          <AppRootStackNavigator.Screen name="RideDetailModal" component={RideDetailModal}/>
          <AppRootStackNavigator.Screen name="CheckoutModal" component={CheckoutModal}/>
          <AppRootStackNavigator.Screen name="ResultsModal" component={ResultsModal}/>
        </AppRootStackNavigator.Navigator>
        
    )
}

export default AppNavigator;