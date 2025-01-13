import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const RNNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default RNNavigation;
