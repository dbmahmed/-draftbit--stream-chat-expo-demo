// import * as React from 'react';
import React, { useState } from "react";
import { useChatClient } from "./custom-files/useChatClient.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LinkingConfiguration from "./LinkingConfiguration.js";

import ChannelListScreen from "./screens/ChannelListScreen";
import ChannelScreen from "./screens/ChannelScreen";
import ThreadScreen from "./screens/ThreadScreen";
import { OverlayProvider } from "stream-chat-expo";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppContext, streami18n } from "./custom-files/CustomCode";
import { useStreamChatTheme } from "./useStreamChatTheme.js";
import UserSelectorScreen from "./screens/UserSelectorScreen.js";
import LoadingScreen from "./screens/LoadingScreen.js";

const Stack = createStackNavigator();

function StackNavigator() {
  const { chatClient, isConnecting, loginUser, logout, switchUser } =
    useChatClient();
  // console.log(chatClient);
  const theme = useStreamChatTheme();
  const [channel, setChannel] = useState();
  const { bottom } = useSafeAreaInsets();
  const [thread, setThread] = useState();

  return (
    <OverlayProvider
      bottomInset={bottom}
      i18nInstance={streami18n}
      translucentStatusBar
      value={{ style: theme }}
    >
      <AppContext.Provider
        value={{
          channel,
          setChannel,
          setThread,
          chatClient,
          switchUser,
          loginUser,
          logout,
          thread,
        }}
      >
        <Stack.Navigator
          initialRouteName={
            isConnecting
              ? "LoadingScreen"
              : chatClient
              ? "ChannelListScreen"
              : "UserSelectorScreen"
          }
        >
          {isConnecting ? (
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          ) : chatClient ? (
            <Stack.Screen
              name="ChannelListScreen"
              component={ChannelListScreen}
              options={{
                headerTitle: "Channel List",
                headerBackTitle: "Back",
                title: "ChannelList",
              }}
            />
          ) : (
            <Stack.Screen
              name="UserSelectorScreen"
              component={UserSelectorScreen}
              options={{ gestureEnabled: false, headerShown: false }}
            />
          )}

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
