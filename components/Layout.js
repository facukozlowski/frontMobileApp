import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

function Layout({ children }) {
  return (
    <View style={styles.container}>
      <StatusBar />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#338889",
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
