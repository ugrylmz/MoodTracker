export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestamp = {
  mood: {
    emoji: string;
    description: string;
  };
  note: string;
  moodOption: MoodOptionType;
  timestamp: number;
};
