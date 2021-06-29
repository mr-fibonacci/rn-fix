import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import PostImage from "../components/PostImage";
import { imageFilters } from "../utils";
import { Text, TouchableHighlight, View, Image } from "react-native";

const PostScreen = () => {
  const [filter, setFilter] = useState("normal");
  const [width, setWidth] = useState(null);

  return (
    <SafeAreaView>
      <View
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          console.log("width", width);
          setWidth(width);
        }}
      >
        <PostImage
          image="https://res.cloudinary.com/drlqahj5d/image/upload/v1624656707/photo-sydney_ezgbmg"
          parentWidth={width}
          filter={filter}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {imageFilters.map((filter, idx) => (
            <View key={idx} style={{ flexDirection: "column" }}>
              <TouchableHighlight onPress={() => setFilter(filter)}>
                <PostImage
                  image="https://res.cloudinary.com/drlqahj5d/image/upload/v1624656707/photo-sydney_ezgbmg"
                  filter={filter}
                  parentWidth={200}
                />
              </TouchableHighlight>
              <Text>{filter}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;
