import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  Linking
} from "react-native";
import Card from "./common/Card";
import Section from "./common/Section";
import { connect } from "react-redux";

const SELECT_PIZZA = "select_pizza";

class Pizza extends Component {
  like = () => {
    Linking.openURL("https://facebook.com");
  };

  togglePizza = () => {
    this.props.selectPizza(this.props.pizza.id);
    this.props.togglePizzaModal();
  };

  render() {
    return (
      <Card>
        <Section>
          <TouchableOpacity onPress={this.togglePizza}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {this.props.pizza.name}
            </Text>
          </TouchableOpacity>
        </Section>
        <Section>
          <Text>{this.props.pizza.description}</Text>
        </Section>
        <Section style={styles.orderSectionContainer}>
          <View style={styles.orderSectionLeft}>
            <Image
              source={{ uri: this.props.pizza.imgSmall }}
              style={{ width: 180, height: 180 }}
            />
          </View>
          <View style={styles.orderSectionRight}>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={this.togglePizza}
            >
              <Text style={{ color: "white" }}>Order now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeButton} onPress={this.like}>
              <Text style={{ color: "white" }}>Like {"\uD83D\uDC4D"}</Text>
            </TouchableOpacity>
          </View>
        </Section>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  orderSectionContainer: {
    flex: 1
  },
  orderSectionLeft: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  orderSectionRight: {
    flex: 0.5,
    justifyContent: "space-around",
    alignItems: "center"
  },
  orderButton: {
    backgroundColor: "#f44336",
    padding: 10,
    elevation: 1,
    borderRadius: 2
  },
  likeButton: {
    backgroundColor: "#3F51B5",
    padding: 10,
    elevation: 1,
    borderRadius: 2,
    marginTop: -70
  }
});

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    togglePizzaModal: () => dispatch({ type: "toggle_pizza_modal" }),
    selectPizza: id => dispatch({ type: SELECT_PIZZA, payload: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
