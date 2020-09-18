import React, { useState, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Animated, {
  divide,
  interpolate,
  multiply,
} from "react-native-reanimated";
import Dot from "./Dot";
import {
  mix,
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

interface ComponentNameProps {}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    label: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: require("../../../assets/1.png"),
  },
  {
    label: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas.",
    color: "#BEECC4",
    picture: require("../../../assets/2.png"),
  },
  {
    label: "Eccentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday.",
    color: "#FFE4D9",
    picture: require("../../../assets/3.png"),
  },
  {
    label: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: require("../../../assets/4.png"),
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);

  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={[styles.footerContent]}>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                last={index === slides.length - 1}
                {...{ subtitle, description, x }}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
              />
            ))}
          </Animated.View>

          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
