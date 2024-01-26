import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MoodPicker from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import MoodItemRow from '../components/MoodItemRow';
const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);
  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      {moodList.map(item => (
        <MoodItemRow moodItem={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
