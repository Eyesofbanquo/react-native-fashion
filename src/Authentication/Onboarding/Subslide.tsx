import React from "react";
import { Dimensions } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";
import Animated from "react-native-reanimated";
import { Button } from "../../components";

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  x: Animated.Node<number>;
  onPress: () => void;
}

const BORDER_RADIUS = 75;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderTopLeftRadius: BORDER_RADIUS,
    width,
  },
  subtitle: {
    fontSize: 24,
    color: "#0C0D34",
    lineHeight: 30,
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
  },
});

const Subslide = ({
  subtitle,
  description,
  last,
  x,
  onPress,
}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2">{subtitle}</Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
