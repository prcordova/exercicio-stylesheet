import React, { StyleSheet } from "react-native";
import { View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});

export default function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
}
