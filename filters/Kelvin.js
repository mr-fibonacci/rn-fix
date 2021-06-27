import React from "react";
import { GLSL, Node, Shaders } from "gl-react";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const shaders = Shaders.create({
  Kelvin: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;

    uniform sampler2D inputImageTexture;
    uniform sampler2D inputImageTexture2;

    void main () {

      vec3 texel = texture2D(inputImageTexture, uv).rgb;

      vec2 lookup;
      lookup.y = .5;

      lookup.x = texel.r;
      texel.r = texture2D(inputImageTexture2, lookup).r;

      lookup.x = texel.g;
      texel.g = texture2D(inputImageTexture2, lookup).g;

      lookup.x = texel.b;
      texel.b = texture2D(inputImageTexture2, lookup).b;

      gl_FragColor = vec4(texel, 1.0);

    }`,
  },
});

export const Kelvin = ({ children: inputImageTexture }) => (
  <Node
    shader={shaders.Kelvin}
    uniforms={{
      inputImageTexture,
      inputImageTexture2: resolveAssetSource(
        require("../assets/filters/kelvinMap.png")
      ),
    }}
  />
);
