import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Keyboard,
} from 'react-native';
import { MoodOptionType } from '../types';
import { theme } from '../theme';

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  handleSelectMood: (moodOption: MoodOptionType, note?: String) => void;
};

const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
  const [note, setNote] = React.useState<string>();
  const textInputRef = React.useRef<TextInput>(null);
  const onSelectMood = useCallback(() => {
    if (selectedMood) {
      handleSelectMood(selectedMood, note);
      setSelectedMood(undefined);
    }
  }, [selectedMood, handleSelectMood, note]);

  const handleDonePress = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              key={option.emoji}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <TextInput
        ref={textInputRef}
        value={note}
        style={styles.input}
        placeholder="Enter your note"
        multiline={true}
        numberOfLines={4}
        returnKeyType="done" // Set returnKeyType to "done" to show a "Done" button on iOS
        onSubmitEditing={handleDonePress} // Call handleDonePress when "Done" button is pressed
        blurOnSubmit={true} // Dismiss keyboard when "Done" button is pressed
        keyboardAppearance={'dark'}
        onChangeText={text => setNote(text)}
        onFocus={() => {
          textInputRef.current?.setNativeProps({
            borderColor: theme.colorPurple,
          });
        }}
      />
      <Pressable style={styles.button} onPress={onSelectMood}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    borderRadius: 10,
    padding: 10,
    color: theme.colorPurple,
    marginTop: 10,
    height: 60,
  },
});

export default MoodPicker;
