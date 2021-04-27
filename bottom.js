import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function msg() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function break1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function explore() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function video() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs2() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white', overflow: 'visible',zIndex: 999 }}
    >
      <Tab.Screen
        name="msg"
        component={msg}
        options={{
          tabBarLabel: 'message',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="break1"
        component={break1}
        options={{
          tabBarLabel: 'break',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image-broken" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="explore"
        component={explore}
        options={{
          tabBarLabel: 'explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-plus-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="video"
        component={video}
        options={{
          tabBarLabel: 'Play',
          tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App2() {
  return (
    <NavigationContainer>
      <MyTabs2 />
    </NavigationContainer>
  );
}
