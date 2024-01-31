import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useAppContext } from '../App.provider';
import MoodItemRow from '../components/MoodItemRow';

const History: React.FC = () => {
  const { moodList } = useAppContext();
  console.log('moodList', moodList);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          {moodList
            .slice()
            .reverse()
            .map(item => (
              <MoodItemRow moodItem={item} key={item.timestamp} />
            ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default History;
