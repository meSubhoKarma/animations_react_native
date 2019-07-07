import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Ball from "./components/Ball";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
