export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestamp = {
  mood: MoodOptionType;
  note: string;
  timestamp: number;
};
