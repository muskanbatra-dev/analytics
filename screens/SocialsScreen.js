import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

const SocialsScreen = () => {
 
  return (
    <View>
      <Text style={styles.heading}>Socials</Text>
      <View style={styles.postcontainer}>
        <Image
          source={{ uri: "https://img.icons8.com/nolan/64/visible.png" }}
          style={{ width: 60, height: 60, alignSelf: "center" }}
        />
        <Text style={styles.title}>Total Links</Text>
        <Text style={styles.num}>0</Text>
        <View style={styles.analyticcontainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/nolan/64/circled-chevron-up--v3.png",
            }}
            style={{ width: 20, height: 20, margin: 2 }}
          />
          <Text style={{ margin: 2 }}>0%</Text>
          <Text style={{ margin: 2 }} s>
            Since Yesterday
          </Text>
        </View>
      </View>

      <View style={styles.chartcontainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.charttext}>Social Media Account</Text>
          <Button
            title="+Add"
            color="#50C878"
            style={{ borderRadius: 30 }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default SocialsScreen;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    fontSize: 40,
    padding: 10,
    margin: 7,
  },
  title: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    color: "gray",
  },
  num: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 38,
  },
  postcontainer: {
    backgroundColor: "#FFFFFF",
    width: 385,
    height: 215,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    alignSelf: "center",
  },
  chartcontainer: {
    backgroundColor: "#FFFFFF",
    width: 385,
    height: 120,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    alignItems: "center",
  },
  textcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 250,
  },
  charttext: {
    fontSize: 15,
    textAlign: "center",
  },

  analyticcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
