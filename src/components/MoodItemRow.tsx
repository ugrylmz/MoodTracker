import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import { format } from 'date-fns';
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../theme';
import { useAppContext } from '../App.provider';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Reanimated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type MoodItemRowProps = {
  moodItem: MoodOptionWithTimestamp;
};

const maxPan = 80;

const MoodItemRow: React.FC<MoodItemRowProps> = ({ moodItem }) => {
  const { handleDeleteMood } = useAppContext();
  const offset = useSharedValue(0);

  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    handleDeleteMood(moodItem);
  }, [handleDeleteMood, moodItem]);

  const removeWithDelay = () => {
    setTimeout(() => {
      handleDeleteMood(moodItem);
    }, 250);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      const xVal = Math.floor(event.translationX);
      offset.value = xVal;

      if (Math.abs(xVal) > maxPan) {
        offset.value = withTiming(Math.sign(offset.value) * 2000, {}, () =>
          runOnJS(removeWithDelay)(),
        );
      }
    })
    .onEnd(() => {
      offset.value = withTiming(0);
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Reanimated.View style={animatedStyle}>
        <View style={styles.container}>
          <View style={styles.moodItem}>
            <View style={styles.iconAndDescription}>
              <Text style={styles.moodValue}>{moodItem?.mood?.emoji} </Text>
              <Text style={styles.moodDescription}>
                {moodItem?.mood?.description}
              </Text>
            </View>
            <Text style={styles.moodDate}>
              {format(
                new Date(moodItem.timestamp),
                "dd MMM, yyyy 'at' hh:mm:ss",
              )}
            </Text>
            <Pressable onPress={handleDelete}>
              <Text style={styles.DeleteText}>Delete</Text>
            </Pressable>
          </View>
          {moodItem?.note && (
            <Text style={styles.text}>
              Notes: {moodItem?.note ? moodItem.note : ' '}
            </Text>
          )}
        </View>
      </Reanimated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: theme.colorPurple,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 14,
    color: theme.colorPurple,
    fontWeight: 'bold',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DeleteText: {
    color: theme.colorPurple,
    fontSize: 12,
  },
});

export default MoodItemRow;
