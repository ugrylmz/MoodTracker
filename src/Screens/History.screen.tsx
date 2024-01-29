import React from 'react';
import { Text, View } from 'react-native';
import { useAppContext } from '../App.provider';

const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      <Text>{appContext.greeting}</Text>
    </View>
  );
};

export default History;
