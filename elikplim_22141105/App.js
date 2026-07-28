import React, { createContext, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { initialProfile } from './data/data';
import RootStack from './navigation/RootStack';



export const ProfileContext = createContext({
  profile: initialProfile,
  updateProfile: () => {},
});

export default function App() {
  const [profile, setProfile] = useState(initialProfile);

  const updateProfile = (updates) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProfileContext.Provider value={{ profile, updateProfile }}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ProfileContext.Provider>
    </GestureHandlerRootView>
  );
}
