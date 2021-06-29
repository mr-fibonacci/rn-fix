import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { getImageSize, renderFilter } from "../utils";
import { Surface } from "gl-react-expo";

const PostImage = ({ image, filter, parentWidth }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({});
  useEffect(() => {
    if (parentWidth) {
      handleSize();
      console.log("parentWidth", parentWidth);
    }
  }, [parentWidth]);

  const handleSize = async () => {
    const { width, height } = await getImageSize(image);
    console.log(width, height);
    const ratio = height / width;
    if (parentWidth > width) {
      setDimensions({ width, height });
    } else {
      setDimensions({ width: parentWidth, height: ratio * parentWidth });
    }
  };
  const Filter = renderFilter(filter, `${image}.jpg`);

  return (
    // I think loading for individual PostImages has been solved (^_^)!
    // But how do I make sure they all load at the same time? A boolean array of children in the parent (Screen)?
    // How do I add the blur effect? With gl-react or blur-radius?
    <Surface
      preload={[{ uri: `${image}.jpg` }]}
      onLoad={() => setIsLoading(false)}
      style={{ ...dimensions }}
    >
      {Filter}
    </Surface>
  );
};

export default PostImage;
