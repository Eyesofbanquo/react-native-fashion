import { useTheme } from "@shopify/restyle";
import { backgroundColor, color } from "@shopify/restyle/dist/restyleFunctions";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "./Theme";

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

const restyleFunctions = [color, backgroundColor];

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const color = variant === "primary" ? "white" : "#0C0D34";
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.buttonDefault;
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
