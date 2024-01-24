import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

const MoodPicker: React.FC = () => {
  return (
    <View style={styles.container}>
      {moodOptions.map(moodOption => (
        <Text key={moodOption.emoji}>{moodOption.emoji}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default MoodPicker;
