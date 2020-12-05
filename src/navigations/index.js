import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRootNavigator from './AppNavigator';

const RootNavigator = ()=>{
  return (
    <NavigationContainer>
      <AppRootNavigator/>
    </NavigationContainer>
  )
}

export default RootNavigator;