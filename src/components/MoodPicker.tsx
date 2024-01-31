import React, { useCallback, useState } from 'react';
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
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  handleSelectMood: (moodOption: MoodOptionType, note?: string) => void;
};

const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  const [note, setNote] = React.useState<string>();
  const [hasSelected, setHasSelected] = useState<boolean>(false);
  const textInputRef = React.useRef<TextInput>(null);

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [
        {
          scale: selectedMood ? withTiming(1) : withTiming(0.8),
        },
      ],
    }),
    [selectedMood],
  );

  const onSelectMood = useCallback(() => {
    if (selectedMood) {
      handleSelectMood(selectedMood, note);
      setSelectedMood(undefined);
      setNote(undefined);
      setHasSelected(true);
    }
  }, [selectedMood, handleSelectMood, note]);

  const handleDonePress = () => {
    Keyboard.dismiss();
  };

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
          <Text style={styles.buttonText}>ChooseAnother</Text>
        </Pressable>
      </View>
    );
  }

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
        placeholderTextColor={'black'}
        placeholder="Enter your note"
        multiline={true}
        numberOfLines={4}
        returnKeyType={'done'}
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
      <ReanimatedPressable
        style={[styles.button, buttonStyle]}
        onPress={onSelectMood}>
        <Text style={styles.buttonText}>Save</Text>
      </ReanimatedPressable>
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
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colorWhite,
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
    color: '#000',
    marginTop: 10,
    fontWeight: 'bold',
    height: 60,
  },
});

export default MoodPicker;
