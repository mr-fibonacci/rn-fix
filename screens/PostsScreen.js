import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Input, ScrollView, Text, Image, TextInput } from "react-native";
import { setNext } from "../utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Surface } from "gl-react-expo";
import { Shaders, Node, GLSL } from "gl-react";

const shaders = Shaders.create({
  Saturate: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
uniform float contrast, saturation, brightness;
const vec3 L = vec3(0.2125, 0.7154, 0.0721);
void main() {
  vec4 c = texture2D(t, uv);
	vec3 brt = c.rgb * brightness;
	gl_FragColor = vec4(mix(
    vec3(0.5),
    mix(vec3(dot(brt, L)), brt, saturation),
    contrast), c.a);
}
`,
  },
});

export const Saturate = ({ contrast, saturation, brightness, children }) => (
  <Node
    shader={shaders.Saturate}
    uniforms={{ contrast, saturation, brightness, t: children }}
  />
);

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
          if (post.image) {
            console.log("IMAGE", post.image);
            return (
              <Surface key={post.id} style={{ width: 300, height: 300 }}>
                <Saturate
                  brightness={post.brightness / 100}
                  saturation={post.saturation / 100}
                  contrast={post.contrast / 100}
                >
                  {{ uri: post.image + ".jpg" }}
                </Saturate>
              </Surface>
            );
          } else {
            console.log("image", post.image);
            return null;
          }
          // <Image
          //   key={post.id}
          //   source={{ uri: post.image }}
          //   width={300}
          //   height={300}
          //   resizeMode="contain"
          //   style={{ width: "100%", height: 250 }}
          // />
        })}
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
