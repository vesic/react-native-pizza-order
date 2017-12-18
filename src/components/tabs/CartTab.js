import React, { Component } from "react";
import { Text, View, Button, Alert } from "react-native";
import { connect } from "react-redux";
import Header from "../common/Header";
import Card from "../common/Card";
import Section from "../common/Section";

const CLEAR_CART = "clear_cart";

class CartTab extends Component {
  totalPrice = () => {
    return this.props.pizzas
      .map(pizza => pizza.price)
      .reduce((a, b) => a + b, 0);
  };

  checkout = () => {
    Alert.alert("Thank You!", "Your order is on it's way!");
    this.props.navigation.navigate("Items");
    this.props.clearCart();
  };

  renderCart() {
    if (this.props.pizzas.length === 0) {
      return (
        <Card>
          <Section>
            <Text style={{ alignContent: "center", fontSize: 22 }}>
              You select no pizza's yet!
            </Text>
          </Section>
          <Section>
            <Button
              title="Add Some"
              onPress={() => this.props.navigation.navigate("Items")}
            />
          </Section>
        </Card>
      );
    }

    return (
      <Card>
        <Section>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Your pizza's:
          </Text>
        </Section>
        {this.props.pizzas.map(pizza => (
          <Section style={{ paddingTop: 10 }} key={pizza.id}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 18 }}>{pizza.name}</Text>
              <Text style={{ fontSize: 18 }}>Price: {pizza.price}$</Text>
            </View>
          </Section>
        ))}
        <Section>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Text style={{ fontSize: 22 }}>Total: {this.totalPrice()}$</Text>
          </View>
        </Section>
        <Section>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Button
              title="Checkout"
              color="#841584"
              onPress={() => this.checkout()}
            />
          </View>
        </Section>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Your Cart" />
        {this.renderCart()}
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    pizzas: state.cart
  };
};

let mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch({ type: CLEAR_CART })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTab);
