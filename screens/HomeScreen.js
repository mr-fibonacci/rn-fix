import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react/cjs/react.development";
import "../axiosDefaults";
import PostImage from "../components/PostImage";

export default function HomeScreen(props) {
  const { message } = props;
  const [width, setWidth] = useState(800);
  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    console.log("parent width", width);
    setWidth(width);
  };
  return (
    <SafeAreaView>
      <ScrollView
        onLayout={(event) => handleLayout(event)}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Text>{`Home!, ${message}`}</Text>
        <PostImage
          parentWidth={width}
          filter="xpro2"
          image="https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
