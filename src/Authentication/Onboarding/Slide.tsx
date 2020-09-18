import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageRequireSource,
} from "react-native";
import { Text } from "../../components";

interface SlideProps {
  label: string;
  right?: boolean;
}

const { width, height } = Dimensions.get("window");

const TITLE_CONTAINER_HEIGHT = 100;

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: "white",
    textAlign: "center",
  },

  picture: {},
});

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - TITLE_CONTAINER_HEIGHT) / 2 },
    {
      translateX: right
        ? width / 2 - TITLE_CONTAINER_HEIGHT / 2
        : -width / 2 + TITLE_CONTAINER_HEIGHT / 2,
    },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
