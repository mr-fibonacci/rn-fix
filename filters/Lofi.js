import React from "react";
import { GLSL, Node, Shaders } from "gl-react";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const shaders = Shaders.create({
  Lofi: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;

      uniform sampler2D inputImageTexture;
      uniform sampler2D inputImageTexture2;
      uniform sampler2D inputImageTexture3;

      void main () {

        vec3 texel = texture2D(inputImageTexture, uv).rgb;

        vec2 red = vec2(texel.r, 0.83333);
        vec2 green = vec2(texel.g, 0.5);
        vec2 blue = vec2(texel.b, 0.16666);

        texel.rgb = vec3(
              texture2D(inputImageTexture2, red).r,
              texture2D(inputImageTexture2, green).g,
              texture2D(inputImageTexture2, blue).b);

        vec2 tc = (2.0 * uv) - 1.0;
        float d = dot(tc, tc);
        texel.r = texture2D(inputImageTexture3, vec2(d, (1.0-texel.r))).r;
        texel.g = texture2D(inputImageTexture3, vec2(d, (1.0-texel.g))).g;
        texel.b  = texture2D(inputImageTexture3, vec2(d, (1.0-texel.b))).b;

        gl_FragColor = vec4(texel,1.0);
      }`,
  },
});

export const Lofi = ({ children: inputImageTexture }) => (
  <Node
    shader={shaders.Lofi}
    uniforms={{
      inputImageTexture,
      inputImageTexture2: resolveAssetSource(
        require("../assets/filters/lomoMap.png")
      ),
      inputImageTexture3: resolveAssetSource(
        require("../assets/filters/vignetteMap.png")
      ),
    }}
  />
);
