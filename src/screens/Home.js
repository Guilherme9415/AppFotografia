import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Photo from "./Photo";

export default function Header() {
  const backy = require("../../assets/85.jpg");
  const backIm = require("../../assets/745.jpg");
  const backI = require("../../assets/12.jpg");
  const back = require("../../assets/33.jpg");
  const backs = require("../../assets/202.jpg");
  const backds = require("../../assets/1256.jpg");

  return (
    <>
      <ScrollView >
        <View style={styles.container}>
          <Photo />
        </View>

        <View style={styles.container}>
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Inter_600SemiBold",
              fontSize: 25,
              margin: 10,
            }}
          >
            Destaque
          </Text>

          <View style={styles.fan}>
            <Image source={backI} style={styles.fans} />
          </View>

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
            <Image source={backds} style={styles.fans} />
          </View>
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
  fan: {
    margin: 10,
    marginTop: 18,
  },
  fans: {
    width: "100%",
    height: 450,
    borderRadius: 20,
  },
});
