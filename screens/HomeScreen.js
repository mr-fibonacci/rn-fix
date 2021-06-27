import { Surface } from "gl-react-expo";
import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import "../axiosDefaults";
import { _1977 } from "../filters/1977";
import { Brannan } from "../filters/Brannan";
import { Earlybird } from "../filters/Earlybird";
import { Hudson } from "../filters/Hudson";
import { Inkwell } from "../filters/Inkwell";
import { Kelvin } from "../filters/Kelvin";
import { Lofi } from "../filters/Lofi";
import { Nashville } from "../filters/Nashville";
import { Rise } from "../filters/Rise";
import { Toaster } from "../filters/Toaster";
import { Valencia } from "../filters/Valencia";
import { Walden } from "../filters/Walden";
import { Xpro2 } from "../filters/Xpro2";

export default function HomeScreen(props) {
  const { message } = props;
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{`Home!, ${message}`}</Text>
        <Image
          height={300}
          width={300}
          source={{
            uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
          }}
          style={{ width: 300, height: 300 }}
        />
        <Surface style={{ width: 300, height: 300 }}>
          <_1977>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </_1977>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Brannan>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Brannan>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Earlybird>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Earlybird>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Hudson>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Hudson>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Inkwell>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Inkwell>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Lofi>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Lofi>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Kelvin>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Kelvin>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Nashville>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Nashville>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Rise>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Rise>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Toaster>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Toaster>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Valencia>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Valencia>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Walden>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Walden>
        </Surface>
        <Surface style={{ width: 300, height: 300 }}>
          <Xpro2>
            {{
              uri: "https://res.cloudinary.com/drlqahj5d/image/upload/v1/media/images/hamburg_feh1uf.jpg",
            }}
          </Xpro2>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}
