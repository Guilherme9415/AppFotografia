import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const backIm = require("../../assets/cuate.png");

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={backIm} style={styles.image} />

      <Text style={styles.text}>Tenha a melhor experiência</Text>

      <Text style={styles.subText}>App é um aplicativo de fotografia </Text>
      <Text style={styles.subText1}>Conecte-se agora</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <FontAwesome name="arrow-right" size={25}  color="#fff"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "51%",
    alignItems: "center",
    marginTop: "5%",
  },

  text: {
    fontSize: 27,
    color: "#343a40",
    alignItems: "center",
    fontFamily: "Inter_800ExtraBold",
    marginTop: "5%",
  },
  subText: {
    fontSize: 20,
    color: "#343a40",
    alignItems: "center",
    fontFamily: "Inter_600SemiBold",
    marginTop: "2%",
  },
  subText1: {
    fontSize: 20,
    color: "#343a40",
    alignItems: "center",
    fontFamily: "Inter_600SemiBold",
  },

  button: {
    backgroundColor: "#06f",
    height: 55,
    width: 75,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
  },
});
