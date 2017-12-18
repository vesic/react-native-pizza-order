import React, { Component } from "react";
import { Button, Text, View, Image, Switch, Alert } from "react-native";
import { connect } from "react-redux";
import Card from "./common/Card";
import Section from "./common/Section";
import Header from "./common/Header";

const ADD_PIZZA = "add_pizza";

class PizzaDetails extends Component {
  state = {
    nacho: false,
    taco: false,
    cheese: false
  };

  addToCart = () => {
    let message = "";
    message += this.props.selectedPizza.name;
    message += this.state.nacho ? "\n + nacho" : "";
    message += this.state.taco ? "\n + taco" : "";
    message += this.state.cheese ? "\n + cheese" : "";
    Alert.alert(
      "Added to Cart",
      message,
      [
        { text: "Back to Pizzas", onPress: () => this.props.togglePizzaModal() }
      ],
      { cancelable: false }
    );
    let pizza = Object.assign({}, this.props.selectedPizza, {
      extras: {
        nacho: this.state.nacho,
        taco: this.state.taco,
        cheese: this.state.cheese
      }
    });
    this.props.addPizza(pizza);
  };

  render() {
    return (
      <View>
        <Header headerText={this.props.selectedPizza.name} />
        <Card>
          <Section>
            <Text>{this.props.selectedPizza.name}</Text>
          </Section>
          <Section style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={{ uri: this.props.selectedPizza.imgLarge }}
                style={{ width: 220, height: 220 }}
              />
            </View>
          </Section>
          <Section>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 18 }}>Extras</Text>
              <View style={{ flexDirection: "row" }}>
                <Switch
                  value={this.state.nacho}
                  onValueChange={nacho => this.setState({ nacho })}
                />
                <Text>Nacho</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Switch
                  value={this.state.taco}
                  onValueChange={taco => this.setState({ taco })}
                />
                <Text>Taco</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Switch
                  value={this.state.cheese}
                  onValueChange={cheese => this.setState({ cheese })}
                />
                <Text>Cheese</Text>
              </View>
            </View>
          </Section>
          <Section style={{ justifyContent: "flex-end" }}>
            <Button color="#f44336" title="Add to Cart" onPress={this.addToCart} />
          </Section>
          <Section>
            <Button
              style={{ fontColor: "red" }}
              title="Back to Pizzas"
              onPress={() => this.props.togglePizzaModal()}
            />
          </Section>
        </Card>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    selectedPizza: state.selected
  };
};

let mapDispatchToProps = dispatch => {
  return {
    togglePizzaModal: () => dispatch({ type: "toggle_pizza_modal" }),
    addPizza: pizza => dispatch({ type: ADD_PIZZA, payload: pizza })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDetails);
