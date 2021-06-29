import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Input, ScrollView, Text, Image, TextInput } from "react-native";
import { setNext } from "../utils";
import { SafeAreaView } from "react-native-safe-area-context";
import PostImage from "../components/PostImage";

export default function PostsScreen({ filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    handleMount();
  }, [query]);

  const handleMount = async () => {
    try {
      const { data: posts } = await axios.get(
        `/posts/?${filter}search=${query}`
      );
      setPosts(setNext(posts));
    } catch (err) {
      console.log(err);
      console.log(err.request);
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        placeholder="search posts"
        onChangeText={(text) => setQuery(text)}
      />
      <ScrollView>
        {posts.results.map((post) => {
          console.log("IMAGE", post.image);
          return (
            <PostImage
              key={post.id}
              image={post.image}
              filter={post.image_filter}
              parentWidth={600}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
