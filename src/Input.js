import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

class Input extends Component {
  state = {
    myTextInput: "",
    users: ["kutya", "cica"],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddUser = () => {
    this.setState(prevState => {
      return {
        myTextInput: "",
        users: [...prevState.users, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="panipuri"
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          maxLength={6}
        />
        <Button title="yo" onPress={this.onAddUser} />
        {this.state.users.map(item => (
          <Text style={styles.users} key={item}>
            {item}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: "auto",
    paddingBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    margin: 10,
    padding: 6,
    fontSize: 20,
  },
  users: {
    fontSize: 60,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

export default Input;
