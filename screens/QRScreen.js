import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";

const DATA = [
  {
    id: "0",
    uri: "https://buffer.com/library/content/images/size/w100/2020/05/Ash-Read.png",
    title: "Arlene Mccoy",
    key: "Views",
  },
  {
    id: "1",
    uri: "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
    title: "Sam Bunsen",
    key: "Socials",
  },
  {
    id: "2",
    uri: "https://earthlette.com.au/wp-content/uploads/2016/10/Jem-final-profile-pic-circle2-1-1024x1018.png",
    title: "Kristin Watson",
    key: "Users",
  },
];

const QRScreen = () => {
  const renderListItems = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          padding: 25,
          margin: 5,

          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image source={{ uri: item.uri }} style={{ width: 50, height: 50 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text>239k</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.heading}>Total QR Scans</Text>
      <View style={styles.postcontainer}>
        <Image
          source={{ uri: "https://img.icons8.com/nolan/64/visible.png" }}
          style={{ width: 60, height: 60, alignSelf: "center" }}
        />
        <Text style={styles.title}>Total QR Scans</Text>
        <Text style={styles.num}>3</Text>
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
        <SafeAreaView>
          <Text style={{ margin: 10, fontWeight: "500", fontSize: 17 }}>
            TOP 3 SPROUTER USERS IN QR SCAN:
          </Text>

          <FlatList
            numColumns={1}
            data={DATA}
            renderItem={renderListItems}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default QRScreen;

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
    height: 410,
    borderRadius: 15,
    padding: 15,
    margin: 5,
    alignSelf: "center",
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
