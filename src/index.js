import 'react-native-gesture-handler';
import React from 'react';
import Navigator from '_navigations';
//TODO : lottie-react-native
import { Provider as StoreProvider } from 'react-redux';

import store from '_redux';

const App = ()=>
  <StoreProvider store={store}>
    <Navigator />
  </StoreProvider>

export default App;
