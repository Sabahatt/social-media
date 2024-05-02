import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Create, Feed, Chat, Notifications, Profile } from '../screens';
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import Inbox from '../screens/Inbox';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const FeedStackScreen = () => (
//   <Stack.Navigator>
//     <Stack.Screen 
//       name="Feed" 
//       component={Feed} 
//       options={{ 
//         headerShown: false
//       }} 
//     />
//   </Stack.Navigator>
// );

const ChatStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
    <Stack.Screen name="IndiChat" component={Chat} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }} >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? COLORS.primary : COLORS.black} />
          ),
        headerTitle: 'Feed',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { color: COLORS.white },
        headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="chatbox-outline" size={24} color={focused ? COLORS.primary : COLORS.black} />
          ),
          headerTitle: 'Messages',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { color: COLORS.white },
        headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({ focused }) => (
            <LinearGradient
              colors={['#F68464', '#EEA849']}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: Platform.OS == 'ios' ? 50 : 60,
                height: Platform.OS == 'ios' ? 50 : 60,
                top: Platform.OS == 'ios' ? -10 : -20,
                borderRadius: 22,
                borderColor: '#fff',
                borderWidth: 4,
                
              }}
            >
              <Feather name="plus-circle" size={24} color={COLORS.white} />
            </LinearGradient>
          ),
          headerTitle: 'Create',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { color: COLORS.white },
        headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="heart" size={24} color={focused ? COLORS.primary : COLORS.black} />
          ),
          headerTitle: 'Notifications',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { color: COLORS.white },
        headerTitleAlign: 'center'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user-circle" size={24} color={focused ? COLORS.primary : COLORS.black} />
          ),
          headerTitle: 'Profile',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { color: COLORS.white },
        headerTitleAlign: 'center'
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
