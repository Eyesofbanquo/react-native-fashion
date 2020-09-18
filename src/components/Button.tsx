import { useTheme } from "@shopify/restyle";
import { backgroundColor, color } from "@shopify/restyle/dist/restyleFunctions";
import React from "react";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { theme } from ".";
import { Theme, Text } from "./Theme";

type ButtonVariantType = "default" | "primary" | "transparent";

interface ButtonProps {
  variant: ButtonVariantType;
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

const setBackgroundColor = (button: { variant: ButtonVariantType }) => {
  switch (button.variant) {
    case "primary":
      return theme.colors.primary;
    case "transparent":
      return "transparent";
    case "default":
      return theme.colors.grey;
  }
};

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const color = variant === "primary" ? "white" : "#0C0D34";
  const backgroundColor = setBackgroundColor({ variant: variant });
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
