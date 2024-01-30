import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../theme';

type MoodItemRowProps = {
  moodItem: MoodOptionWithTimestamp;
};

const MoodItemRow: React.FC<MoodItemRowProps> = ({ moodItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.moodItem}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{moodItem?.mood?.emoji} </Text>
          <Text style={styles.moodDescription}>
            {moodItem?.mood?.description}
          </Text>
        </View>
        <Text style={styles.moodDate}>
          {format(new Date(moodItem.timestamp), "dd MMM, yyyy 'at' hh:mm:ss")}
        </Text>
      </View>
      <Text style={styles.text}>
        Notes: {moodItem?.note ? moodItem.note : ' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
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
    fontSize: 18,
    color: theme.colorPurple,
    fontWeight: 'bold',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MoodItemRow;
