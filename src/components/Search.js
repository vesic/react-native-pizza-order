import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    query: ""
  };

  handleFilterPizzas = query => {
    this.props.filterPizzas(query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="search for pizza... blank to reset"
          value={this.state.query}
          onChangeText={query => this.setState({ query })}
          onSubmitEditing={() => this.handleFilterPizzas(this.state.query)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5
    // flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});

let mapStateToProps = state => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    filterPizzas: query => dispatch({ type: "filter_pizzas", payload: query })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
