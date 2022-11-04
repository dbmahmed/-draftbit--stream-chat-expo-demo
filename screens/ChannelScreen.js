import React, { useContext, useEffect } from "react";
import { ScreenContainer } from "@draftbit/ui";
import { View } from "react-native";
import { AppContext } from "../custom-files/CustomCode";
import { useHeaderHeight } from "@react-navigation/stack";
import {
  useAttachmentPickerContext,
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { chatClient, streami18n } from "../custom-files/CustomCode";

const ChannelScreen = ({ navigation }) => {
  const { channel, setThread, thread } = useContext(AppContext);
  const headerHeight = useHeaderHeight();
  const { setTopInset } = useAttachmentPickerContext();

  useEffect(() => {
    setTopInset(headerHeight);
  }, [headerHeight]);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <Channel
          channel={channel}
          keyboardVerticalOffset={headerHeight}
          thread={thread}
        >
          <View style={{ flex: 1 }}>
            <MessageList
              onThreadSelect={(thread) => {
                setThread(thread);
                navigation.navigate("ThreadScreen");
              }}
            />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    </ScreenContainer>
  );
};

export default ChannelScreen;
