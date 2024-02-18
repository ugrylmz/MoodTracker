import React, { FC } from 'react';
import { StyleSheet, ImageBackground, Pressable } from 'react-native';
import MoodPicker from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const Home: FC = () => {
  const { handleSelectMood } = useAppContext();

  const imageUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

  const shared = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shared.value }],
    };
  });
  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      <ReanimatedPressable
        onPress={() => {
          shared.value = withTiming(shared.value + 40, { duration: 1000 });
        }}
        style={[styles.square, animatedStyles]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
