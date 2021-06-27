import React from "react";
import { GLSL, Node, Shaders } from "gl-react";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const shaders = Shaders.create({
  _1977: {
    frag: GLSL`
    precision highp float;
    varying vec2 uv;

    uniform sampler2D inputImageTexture;
    uniform sampler2D inputImageTexture2;

    void main () {

      vec3 texel = texture2D(inputImageTexture, uv).rgb;

      texel = vec3(
                  texture2D(inputImageTexture2, vec2(texel.r, .16666)).r,
                  texture2D(inputImageTexture2, vec2(texel.g, .5)).g,
                  texture2D(inputImageTexture2, vec2(texel.b, .83333)).b);

      gl_FragColor = vec4(texel, 1.0);

    }`,
  },
});

export const _1977 = ({ children: inputImageTexture }) => (
  <Node
    shader={shaders._1977}
    uniforms={{
      inputImageTexture,
      inputImageTexture2: resolveAssetSource(
        require("../assets/filters/1977map.png")
      ),
    }}
  />
);
