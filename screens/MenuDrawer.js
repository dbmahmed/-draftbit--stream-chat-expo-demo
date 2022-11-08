import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { ScreenContainer, Touchable } from "@draftbit/ui";
import { User } from "stream-chat-expo";

const MenuDrawerScreen = (props) => {
  const { chatClient, logout } = useAppContext();

  if (!chatClient) return null;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.userRow}>
        <Image
          source={{
            uri: chatClient.user?.image,
          }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>{chatClient.user?.name}</Text>
      </View>
      <View style={styles.menuContainer}>
        <Touchable
          onPress={() => {
            logout();
          }}
          style={styles.menuItem}
        >
          <User height={24} pathFill={grey} width={24} />
          <Text style={styles.menuTitle}>Sign Out</Text>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  container: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 16,
  },
  menuItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16,
  },
  userRow: {
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
  },
});
export default MenuDrawerScreen;
