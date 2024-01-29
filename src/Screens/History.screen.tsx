import React from 'react';
import { View } from 'react-native';
import { useAppContext } from '../App.provider';
import MoodItemRow from '../components/MoodItemRow';

const History: React.FC = () => {
  const { moodList } = useAppContext();
  console.log('moodList', moodList);
  return (
    <View>
      {moodList.map(item => (
        <MoodItemRow moodItem={item} key={item.timestamp} />
      ))}
    </View>
  );
};

export default History;
