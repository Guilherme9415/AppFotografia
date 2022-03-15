import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firabase";

const backIm = require("../../assets/foto15.png");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandlerLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login successful"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={backIm} style={styles.image} /> 

      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onHandlerLogin}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 25 }}>
            Entrar
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 3,
              color: "#252422",
              fontFamily: "Inter_600SemiBold",
              fontSize: 15,
            }}
          >
            Não tem uma conta?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                color: "#06f",
                fontSize: 15,
                fontFamily: "Inter_600SemiBold",
              }}
            >
              Inscrever-se
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 37,
    fontFamily: "Inter_900Black",
    color: "#06f",
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
  },
  input: {
    backgroundColor: "#f8f9fa",
    width: "100%",
    height: 58,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 10,
    padding: 12,
   
    color:'#252422'
  },
  image: {
    width: "70%",
    height: "45%",
    marginHorizontal: 65,
    marginTop: 30,
  },

  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: "#06f",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
});
