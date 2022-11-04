import { useContext, useMemo } from "react";
import { View } from "react-native";
import { ScreenContainer } from "@draftbit/ui";

import { ChannelList, Chat } from "stream-chat-expo";
import {
  sort,
  options,
  AppContext,
  filters,
  chatClient,
  streami18n,
} from "../custom-files/CustomCode";

const ChannelListScreen = ({ navigation }) => {
  const { setChannel } = useContext(AppContext);

  const memoizedFilters = useMemo(() => filters, []);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <View style={{ height: "100%" }}>
          <ChannelList
            filters={memoizedFilters}
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
