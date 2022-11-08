import { useContext, useMemo } from "react";
import { View } from "react-native";
import { ScreenContainer, Icon, Touchable } from "@draftbit/ui";

import { ChannelList, Chat } from "stream-chat-expo";
import {
  sort,
  options,
  AppContext,
  filters,
  streami18n,
} from "../custom-files/CustomCode";

const ChannelListScreen = ({ navigation }) => {
  const { setChannel, chatClient, logout } = useContext(AppContext);
  if (!chatClient) return null;

  // const memoizedFilters = useMemo(() => filters, []);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Touchable onPress={logout}>
          <Icon size={24} name={"Entypo/log-out"} />
        </Touchable>
      </View>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <View style={{ height: "100%" }}>
          <ChannelList
            // filters={memoizedFilters}
            onSelect={(channel) => {
              setChannel(channel);
              navigation.navigate("ChannelScreen");
            }}
            options={options}
            sort={sort}
          />
        </View>
      </Chat>
    </ScreenContainer>
  );
};

export default ChannelListScreen;
