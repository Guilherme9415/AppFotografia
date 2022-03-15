import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function Photo() {
  const backy = require("../../assets/85.jpg");
  const backIm = require("../../assets/745.jpg");
  const backI = require("../../assets/12.jpg");
  const back = require("../../assets/33.jpg");
  const backs = require("../../assets/202.jpg");
  const backds = require("../../assets/1256.jpg");
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Image source={backy} style={styles.logo} />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 20,
            paddingRight: "48%",
            marginTop:30
          }}
        >
          Matthew
        </Text>

        <TouchableOpacity>
          <Feather name="sun" size={28} color="#ccc" style={{marginTop:30}} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 25,
            margin: 10,
            marginTop:30
          }}
        >
          Stories
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -20 }}
      >
        <TouchableOpacity style={styles.fan}>
          <Image source={backI} style={styles.fans} />
        </TouchableOpacity>

        <View style={styles.fan}>
          <Image source={back} style={styles.fans} />
        </View>

        <View style={styles.fan}>
          <Image source={backIm} style={styles.fans} />
        </View>

        <View style={styles.fan}>
          <Image source={backs} style={styles.fans} />
        </View>

        <View style={styles.fan}>
          <Image source={backy} style={styles.fans} />
        </View>

         <View style={styles.fan}>
          <Image source={backy} style={styles.fans} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 95,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 2,
  },

  logo: {
    width: 55,
    height: 55,
    borderRadius: 200,
    marginTop:30
    
  },
  fan: {
    margin: 10,
    marginTop: 18,
  },
  fans: {
    width: 150,
    height: 230,
    borderRadius: 20,
  },
});
