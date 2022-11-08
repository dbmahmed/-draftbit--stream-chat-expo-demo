import React from "react";
import { ScreenContainer } from "@draftbit/ui";
import { View, ActivityIndicator } from "react-native";

const LoadingScreen = (props) => {
  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          style={{ height: 36, width: 36 }}
          animating={true}
          hidesWhenStopped={true}
          size={"large"}
        />
      </View>
    </ScreenContainer>
  );
};

export default LoadingScreen;
