import React, { useContext } from "react";
import { ScreenContainer } from "@draftbit/ui";
import { Chat, Channel, Thread } from "stream-chat-expo";
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { AppContext, streami18n, chatClient } from "../custom-files/CustomCode";

const ThreadScreen = () => {
  const { channel, setThread, thread } = useContext(AppContext);
  const headerHeight = useHeaderHeight();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <Channel
          channel={channel}
          keyboardVerticalOffset={headerHeight}
          thread={thread}
          threadList
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
            }}
          >
            <Thread onThreadDismount={() => setThread(null)} />
          </View>
        </Channel>
      </Chat>
    </ScreenContainer>
  );
};

export default ThreadScreen;
