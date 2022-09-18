import React from 'react';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';
import {createAppContainer} from 'react-navigation';
import Store from './store';

const AppContainer = createAppContainer(MainNavigator);

export default () => {
  <Provider store={Store}>
    <AppContainer />
  </Provider>;
};
