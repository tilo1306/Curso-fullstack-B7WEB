import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Test} from './src/components/Test';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Test />
      </View>
    </Provider>
  );
};

export default App;
