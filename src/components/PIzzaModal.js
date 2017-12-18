import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Modal, View, Text, Button, Image
} from 'react-native';
import { Header } from './common/Header';
import { Card } from './common/Card';
import { Section } from './common/Section';

class PizzaModal extends Component {
  render() {
    return (
      <Modal
        visible={this.props.pizzaModalVisible}
        animationType='slide'
        onRequestClose={() => {}}>
        {this.props.children}
      </Modal>
    );
  }
}

let mapStateToProps = state => {
  return {
    pizzaModalVisible: state.ui.pizzaModalVisible
  }
}

let mapDispatchToProps = dispatch => {
  return {
    togglePizzaModal: () => dispatch({type: 'toggle_pizza_modal'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaModal);