import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LinkingConfiguration from './LinkingConfiguration.js';

import ChannelListScreen from './screens/ChannelListScreen';
import ChannelScreen from './screens/ChannelScreen';
import ThreadScreen from './screens/ThreadScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ChannelListScreen">
      <Stack.Screen
        name="ChannelListScreen"
        component={ChannelListScreen}
        options={{
          headerTitle: 'Channel List',
          headerBackTitle: 'Back',
          title: 'ChannelList',
        }}
      />
      <Stack.Screen
        name="ThreadScreen"
        component={ThreadScreen}
        options={{ title: 'Thread' }}
      />
      <Stack.Screen
        name="ChannelScreen"
        component={ChannelScreen}
        options={{ title: 'Channel' }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator headerMode="none" initialRouteName="StackNavigator">
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

