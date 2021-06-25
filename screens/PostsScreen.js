import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Input, ScrollView, Text, Image, TextInput } from "react-native";
import { setNext } from "../utils";
import { SafeAreaView } from "react-native-safe-area-context";
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
        {posts.results.map((post) => (
          <Image
            key={post.id}
            source={{ uri: post.image }}
            width={300}
            height={300}
            resizeMode="contain"
            style={{ width: "100%", height: 280 }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

//   return (
//     <View>
//       <Input
//         placeholder="search posts"
//         onChangeText={(text) => setQuery(text)}
//       />
//       <ScrollView>
//         {posts.results.map((post) => (
//           <View key={post.id}>
//             <Text>{post.title}</Text>

//             <Image
//               source={{ uri: post.image }}
//               width={300}
//               height={300}
//               resizeMode="contain"
//               style={{ width: "100%", height: 400 }}
//             />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }
