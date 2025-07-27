import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReelsScreen from './screens/ReelsScreen';
import MessagesScreen from './screens/MessagesScreen';
import ChatScreen from './screens/ChatScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import { BottomTabParamList, RootStackParamList } from './types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MessagesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case 'Reels':
                return <Icon name="movie-open-play" size={size} color={color} />;
              case 'Messages':
                return <Icon name="message-text" size={size} color={color} />;
              case 'Map':
                return <Icon name="map-marker-radius" size={size} color={color} />;
              case 'Profile':
                return <Icon name="account-circle" size={size} color={color} />;
              default:
                return null;
            }
          },
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Messages" component={MessagesStack} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}