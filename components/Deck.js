import React, { Component } from "react";
import { View, Text, Animated } from "react-native";

class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
