import React, { createContext, useContext } from 'react';

type AppContextType = {
  greeting: string;
};

const AppContext = createContext<AppContextType>({
  greeting: 'hello',
});

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={{ greeting: 'hello' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
