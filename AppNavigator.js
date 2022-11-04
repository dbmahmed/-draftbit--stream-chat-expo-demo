// import * as React from 'react';
import React, { useState, useEffect } from "react";
// import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
// import { systemWeights } from 'react-native-typography';
// import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LinkingConfiguration from "./LinkingConfiguration.js";

import ChannelListScreen from "./screens/ChannelListScreen";
import ChannelScreen from "./screens/ChannelScreen";
import ThreadScreen from "./screens/ThreadScreen";
import { OverlayProvider } from "stream-chat-expo";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AppContext,
  chatClient,
  user,
  userToken,
  streami18n,
} from "./custom-files/CustomCode";
import { useStreamChatTheme } from "./useStreamChatTheme.js";

const Stack = createStackNavigator();

function StackNavigator() {
  const theme = useStreamChatTheme();
  const [channel, setChannel] = useState();
  const [clientReady, setClientReady] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const [thread, setThread] = useState();
  useEffect(() => {
    const setupClient = async () => {
      await chatClient.connectUser(user, userToken);

      setClientReady(true);
    };

    setupClient();
  }, []);

  return (
    <OverlayProvider
      bottomInset={bottom}
      i18nInstance={streami18n}
      translucentStatusBar
      value={{ style: theme }}
    >
      <AppContext.Provider value={{ channel, setChannel, setThread, thread }}>
        {clientReady && (
          <Stack.Navigator initialRouteName="ChannelListScreen">
            <Stack.Screen
              name="ChannelListScreen"
              component={ChannelListScreen}
              options={{
                headerTitle: "Channel List",
                headerBackTitle: "Back",
                title: "ChannelList",
              }}
            />
            <Stack.Screen
              name="ThreadScreen"
              component={ThreadScreen}
              options={{ title: "Thread" }}
            />
            <Stack.Screen
              name="ChannelScreen"
              component={ChannelScreen}
              options={{ title: "Channel" }}
            />
          </Stack.Navigator>
        )}
      </AppContext.Provider>
    </OverlayProvider>
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
