
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewsScreen from './ViewsScreen';
import QRScreen from './QRScreen';

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      
    >
      <Tab.Screen
        name="ViewsScreen"
        component={ViewsScreen}
        options={{ tabBarLabel: 'Web View' }}
      />
      <Tab.Screen
        name="QRScreen"
        component={QRScreen}
        options={{ tabBarLabel: 'QR Scan' }}
      />
     
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    
      <MyTabs />
   
  );
}
