import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
  },
});

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
