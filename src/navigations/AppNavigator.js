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
import { StartModal, DestinationModal, StopoversModal, BackSeatsModal, InstantApprovalModal, PriceSuggestionModal, RoundTripModal, NoteModal, ConfimationModal } from "_modals/RideOfferModal";
import {Calendar, Time} from '_modals/DateModal';
import {Colors} from '_styles';
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

const OfferStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const AppRootStackNavigator = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration : 500
  },
};

const verticalInterpolation = {animationEnabled: true, gestureDirection:'vertical', cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS, transitionSpec:{open: config, close: config}}
const horizotalInterpolation = {gestureDirection:'vertical', cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS}
const tab_opt = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Rides') {
        iconName = "home-outline"
      } else if (route.name === 'Search') {
        iconName = "search";
      } else if(route.name === 'Offer'){
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
      <CheckoutStack.Screen name="TotalBreakDown" component={TotalBreakDown} options={verticalInterpolation}/>
    </CheckoutStack.Navigator>
  );
}

function ResultsModal() {
  return (
    <ResultsStack.Navigator headerMode="none">
      <ResultsStack.Screen name="Results" component={Results}/>
      <ResultsStack.Screen name="Filter" component={Filter} options={verticalInterpolation}/>
    </ResultsStack.Navigator>
  );
}

function OfferModal() {
  return (
    <OfferStack.Navigator initialRouteName="StartModal" headerMode="none" mode="modal">
      <OfferStack.Screen name="StartModal" component={StartModal}/>
      <OfferStack.Screen name="DestinationModal" component={DestinationModal} options={horizotalInterpolation}/>
      <OfferStack.Screen name="StopoversModal" component={StopoversModal} options={horizotalInterpolation}/>
      <OfferStack.Screen name="Calendar" initialParams={{notFirst : true}} component={Calendar} options={horizotalInterpolation}/>
      <OfferStack.Screen name="TimePicker" initialParams={{nextScreen : "BackSeatsModal"}} component={Time} options={horizotalInterpolation}/>
      <OfferStack.Screen name="BackSeatsModal" component={BackSeatsModal} options={horizotalInterpolation}/>
      <OfferStack.Screen name="PassangersModal" component={PassangersModal} initialParams={{nextScreen : "InstantApprovalModal"}}  options={horizotalInterpolation}/>
      <OfferStack.Screen name="InstantApprovalModal" component={InstantApprovalModal} options={horizotalInterpolation}/>
      <OfferStack.Screen name="PriceSuggestionModal" component={PriceSuggestionModal} options={horizotalInterpolation}/>
      {/* <OfferStack.Screen name="RoundTripModal" component={RoundTripModal} options={horizotalInterpolation}/> */}
      <OfferStack.Screen name="NoteModal" component={NoteModal} options={horizotalInterpolation}/>
      <OfferStack.Screen name="ConfimationModal" component={ConfimationModal} options={horizotalInterpolation}/>
    </OfferStack.Navigator>
  );
}

function TabNavigator(){
  return (
    <Tab.Navigator initialRouteName="Rides" screenOptions = {tab_opt}  barStyle={tab_style} activeColor={Colors.PRIMARY} inactiveColor={Colors.BLACK}>
        <Tab.Screen name="Rides" options={{title:'Your rides'}} component={RidesScreen} />
        <Tab.Screen name="Search" options={{title:'Search'}} component={SearchScreens} />
        <Tab.Screen name="Offer" options={{title:'Offer'}} component={ProposeScreen} listeners={({navigation})=>({
          tabPress: event=>{
            event.preventDefault();
            navigation.navigate("OfferModal")
          }
        })}/>
        <Tab.Screen name="Messages" options={{title:'Inbox'}} component={MessagesScreen} />
        <Tab.Screen name="Profile" options={{title:'Profile'}} component={ProfileScreen} />
    </Tab.Navigator>
  ) 
}

const AppNavigator = ()=>{
    return (
        <AppRootStackNavigator.Navigator headerMode="none">
          <AppRootStackNavigator.Screen name="Tab" component={TabNavigator} />
          <AppRootStackNavigator.Screen name="TextInputModal" component={TextInputModal} options={verticalInterpolation}/>
          <AppRootStackNavigator.Screen name="DateModal" component={DateModal} options={verticalInterpolation}/>
          <AppRootStackNavigator.Screen name="PassangersModal" component={PassangersModal} options={verticalInterpolation}/>
          <AppRootStackNavigator.Screen name="RideDetailModal" component={RideDetailModal}/>
          <AppRootStackNavigator.Screen name="CheckoutModal" component={CheckoutModal}/>
          <AppRootStackNavigator.Screen name="ResultsModal" component={ResultsModal}/>
          <AppRootStackNavigator.Screen name="OfferModal" component={OfferModal} options={verticalInterpolation}/>
        </AppRootStackNavigator.Navigator>
        
    )
}

export default AppNavigator;