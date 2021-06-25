import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../axiosDefaults";

export default function HomeScreen(props) {
  const { message } = props;
  return (
    <SafeAreaView>
      <Text>{`Home!, ${message}`}</Text>
    </SafeAreaView>
  );
}
