import axios from "axios";
import React from "react";
import { Image } from "react-native";
import { _1977 } from "./filters/1977";
import { Brannan } from "./filters/Brannan";
import { Earlybird } from "./filters/Earlybird";
import { Hudson } from "./filters/Hudson";
import { Inkwell } from "./filters/Inkwell";
import { Kelvin } from "./filters/Kelvin";
import { Lofi } from "./filters/Lofi";
import { Nashville } from "./filters/Nashville";
import { Normal } from "./filters/Normal";
import { Rise } from "./filters/Rise";
import { Toaster } from "./filters/Toaster";
import { Valencia } from "./filters/Valencia";
import { Walden } from "./filters/Walden";
import { Xpro2 } from "./filters/Xpro2";

// the ternary bit needed only for development (localhost instead of gitpod's url)
export const setNext = (resource) => {
  return {
    ...resource,
    next: resource.next
      ? resource.next.replace("http://localhost:8000", axios.defaults.baseURL)
      : null,
  };
};

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axios.get(resource.next);
    setResource((prevResource) => ({
      ...setNext(data),
      results: data.results.reduce((acc, cur) => {
        return acc.some((result) => result.id === cur.id) ? acc : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
    console.log(err.request);
  }
};

export const getImageSize = (url) =>
  new Promise((resolve, reject) => {
    Image.getSize(
      url,
      (width, height) => {
        resolve({ width, height });
      },
      [(error) => reject(error)]
    );
  });

export const renderFilter = (filter, image) => {
  switch (filter) {
    case "_1977":
      return <_1977 children={{ uri: image }} />;
    case "brannan":
      return <Brannan children={{ uri: image }} />;
    case "earlybird":
      return <Earlybird children={{ uri: image }} />;
    case "hudson":
      return <Hudson children={{ uri: image }} />;
    case "inkwell":
      return <Inkwell children={{ uri: image }} />;
    case "kelvin":
      return <Kelvin children={{ uri: image }} />;
    case "lofi":
      return <Lofi children={{ uri: image }} />;
    case "nashville":
      return <Nashville children={{ uri: image }} />;
    case "rise":
      return <Rise children={{ uri: image }} />;
    case "toaster":
      return <Toaster children={{ uri: image }} />;
    case "valencia":
      return <Valencia children={{ uri: image }} />;
    case "walden":
      return <Walden children={{ uri: image }} />;
    case "xpro2":
      return <Xpro2 children={{ uri: image }} />;
    default:
      return <Normal children={{ uri: image }} />;
  }
};

export const imageFilters = [
  "_1977",
  "brannan",
  "earlybird",
  "hudson",
  "inkwell",
  "kelvin",
  "lofi",
  "nashville",
  "normal",
  "rise",
  "toaster",
  "valencia",
  "walden",
  "xpro2",
];
