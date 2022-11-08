import React, { useContext, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScreenContainer, Icon, Touchable } from "@draftbit/ui";
import { version } from "stream-chat-expo";
import { USERS } from "../custom-files/ChatUsers";
import { AppContext } from "../custom-files/CustomCode";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { setItem } from "../utils/asyncStore";

const UserSelectorScreen = (props) => {
  const { switchUser } = useContext(AppContext);
  //   const {
  //     theme: {
  //       colors: { black, border, grey, grey_gainsboro, white_snow },
  //     },
  //   } = useTheme();
  const { bottom } = useSafeAreaInsets();
  useEffect(() => {
    setItem("@stream-rn-sampleapp-user-id", "");
  }, []);
  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollContainer}
        testID="users-list"
      >
        <View style={styles.titleContainer}>
          <Icon size={24} name={"AntDesign/wechat"} />
          <Text style={styles.title}>Welcome to Stream Chat</Text>
          <Text style={styles.subTitle}>
            Select a user to try the {Platform.OS === "ios" ? "iOS" : "Android"}{" "}
            sdk:
          </Text>
        </View>

        {Object.values(USERS).map((u, index) => (
          <Touchable
            key={index}
            onPress={() => {
              switchUser(u.id);
            }}
            style={styles.userContainer}
            testID={`user-selector-button-${u.id}`}
          >
            <Image
              source={{
                uri: u.image,
              }}
              style={styles.avatarImage}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>{u.name}</Text>
              <Text>Stream test account</Text>
            </View>
            <View style={styles.rightArrow}>
              <Icon size={24} name={"AntDesign/arrowright"} />
            </View>
          </Touchable>
        ))}
      </ScrollView>
      <View
        style={[
          {
            paddingBottom: bottom ? bottom : 16,
            paddingTop: 16,
          },
        ]}
      >
        <Text style={styles.footerText}>Stream SDK v{version}</Text>
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  avatarImage: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  footerText: {
    textAlign: "center",
  },
  nameContainer: {
    marginLeft: 8,
  },
  rightArrow: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 12,
  },
  scrollContainer: {
    flex: 1,
    overflow: "visible",
  },
  subTitle: {
    fontSize: 14,
    marginTop: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 20,
  },
  titleContainer: {
    alignItems: "center",
    paddingBottom: 31,
    paddingTop: 34,
  },
  userContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
  },
});
export default UserSelectorScreen;
