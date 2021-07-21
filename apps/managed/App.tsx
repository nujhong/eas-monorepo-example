import { Paragraph, Strong } from "@acme/ui";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Paragraph>
        Hello from an <Strong>EAS</Strong> monorepo (managed)
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
