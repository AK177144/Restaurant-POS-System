import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

type Props = {
  visible: boolean;
};

export default function LoadingOverlay({ visible }: Props) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2563EB" />

        <Text style={styles.title}>Generating Bill...</Text>

        <Text style={styles.subtitle}>Please wait...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: "rgba(0,0,0,0.25)",

    justifyContent: "center",

    alignItems: "center",

    zIndex: 999,
  },

  container: {
    backgroundColor: "white",

    width: 240,

    padding: 30,

    borderRadius: 15,

    alignItems: "center",

    elevation: 10,
  },

  title: {
    marginTop: 20,

    fontSize: 20,

    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 8,

    color: "gray",
  },
});
