import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import swap from "./assets/swap.svg";

export default function App() {
  const [text, setText] = React.useState("");
  const [number, valueChanged] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: "http://www.entypo.com/images/swap.svg" }}
        style={{ width: 305, height: 300 }}
      />
      <Text style={styles.random}>
        This is a currency converter that converts dollars into egyptian pounds.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={number}
        placeholder="type here to convert"
        keyboardType="numeric"
        defaultValue={text}
        placeholderTextColor="#000"
      />
      <Text style={{ color: "#f0f3f9", fontSize: 30 }}>{text * 15.71}</Text>

      <StatusBar style="auto" />
      <View style={styles.view}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0390f7",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
  },
  input: {
    backgroundColor: "#0390f7",
    color: "#000",
    alignItems: "center",

    fontSize: 30,
  },
  random: {
    fontSize: 30,
    alignItems: "center",
    margin: "10%",
  },
  view: {
    height: 3000,

    flex: 1,
  },
});
