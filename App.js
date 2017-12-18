/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Alert,
  TextInput,
  TouchableNativeFeedback,
  Modal,
  TouchableOpacity
} from "react-native";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import ItemsTab from "./src/components/tabs/ItemsTab";
import CartTab from "./src/components/tabs/CartTab";
import MainScreenNavigator from "./src/components/tabs/MainScreenNavigator";
import { Header } from "./src/components/common/Header";

import reducer from "./src/reducers";
const store = createStore(reducer);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
          <MainScreenNavigator />
      </Provider>
    );
  }
}
