import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Advance React-Native Animations</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
