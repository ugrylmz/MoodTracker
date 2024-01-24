import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabsNavigator from './Screens/BottomTabs.navigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default App;
