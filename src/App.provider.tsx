import React, { createContext, useCallback, useContext, useState } from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
});

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback(
    (mood: MoodOptionType, note?: String) => {
      setMoodList(current => [
        ...current,
        {
          moodOption: mood,
          timestamp: Date.now(),
          note: note, // Provide a value for the 'note' property
        } as MoodOptionWithTimestamp,
      ]);
    },
    [],
  );
  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
