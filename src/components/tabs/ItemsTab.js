import React, { Component } from "react";
import {
  View,
  Button,
  Modal,
  TouchableOpacity,
  Text,
  Alert,
  FlatList
} from "react-native";
import { Provider, connect } from 'react-redux';
import Card from '../common/Card';
import Section from '../common/Section';
import Pizza from '../Pizza';
import Header from '../common/Header';
import PizzaModal from '../PIzzaModal';
import Search from '../Search';
import PizzaDetails from "../PizzaDetails";

class ItemsTab extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Pizza Ordering" />
        <FlatList
          data={this.props.pizzas}
          renderItem={({ item }) => <Pizza pizza={item}/>}
          keyExtractor={item => item}
          ListHeaderComponent={<Search />}
        />
        <PizzaModal>
          <PizzaDetails />
        </PizzaModal>
      </View>
    )
  }
}

let mapStateToProps = state => {
  return {
    pizzas: state.pizzas,
  }
}


export default connect(mapStateToProps, null)(ItemsTab);
