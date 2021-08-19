import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/utils/navigation';
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;