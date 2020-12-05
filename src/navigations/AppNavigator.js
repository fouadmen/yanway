import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RidesScreen from '_scenes/rides';
import SearchScreen from '_scenes/search';
import ProfileScreen from '_scenes/profile';
import MessagesScreen from '_scenes/messages';
import ProposeScreen from '_scenes/propose';
import TextInputModal from '_modals/TextInputModal';
import {Calendar, TimePicker} from '_modals/DateModal';
import {Colors, Spacing} from '_styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RideStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProposeStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const AppRootStackNavigator = createStackNavigator();

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

function SearchStackScreen() {
    return (
        <RideStack.Navigator>
        <RideStack.Screen name="Search" component={SearchScreen} /> 
        </RideStack.Navigator>
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

function TabNavigator(){
  return (
    <Tab.Navigator initialRouteName="Rides" screenOptions = {tab_opt}  barStyle={tab_style} activeColor={Colors.PRIMARY} inactiveColor={Colors.BLACK}>
        <Tab.Screen name="Rides" component={RidesScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Propose" component={ProfileScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  ) 
}
//<AppRootStackNavigator.Screen name="Modal" component={SearchModal} />
{/* <AppRootStackNavigator.Screen name="RidesModal" component={Modal} /> */}
const AppNavigator = ()=>{
    return (
        <AppRootStackNavigator.Navigator headerMode="none">
          <AppRootStackNavigator.Screen name="Tab" component={TabNavigator} />
          <AppRootStackNavigator.Screen name="TextInputModal" component={TextInputModal} options={{gestureDirection:'vertical', cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS}}/>
        </AppRootStackNavigator.Navigator>
        
    )
}

export default AppNavigator;