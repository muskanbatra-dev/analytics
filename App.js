import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewScreenNavigator from './screens/ViewScreenNavigator';
import PostsScreen from './screens/PostsScreen';
import UsersScreen from './screens/UsersScreen';
import SocialsScreen from './screens/SocialsScreen';
import Analytics from './screens/Analytics';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Analytics'>
     <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="ViewScreenNavigator" component={ViewScreenNavigator} />
      <Stack.Screen name="Socials" component={SocialsScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
       <Stack.Screen name="Posts"  component={PostsScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;