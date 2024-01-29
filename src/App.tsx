import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabsNavigator from './Screens/BottomTabs.navigator';
import { AppProvider } from './App.provider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
