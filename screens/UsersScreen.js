import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "6 Months", value: "1" },
  { label: "1 Year", value: "2" },
  { label: "1 Week", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const UsersScreen = () => {
  const [value, setValue] = useState(null);

  return (
    <View>
      <Text style={styles.heading}>Users</Text>
      <View style={styles.postcontainer}>
        <Image
          source={{ uri: "https://img.icons8.com/nolan/64/visible.png" }}
          style={{ width: 60, height: 60, alignSelf: "center" }}
        />
        <Text style={styles.title}>Total Posts</Text>
        <Text style={styles.num}>27</Text>
        <View style={styles.analyticcontainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/nolan/64/circled-chevron-up--v3.png",
            }}
            style={{ width: 20, height: 20, margin: 2 }}
          />
          <Text style={{ margin: 2 }}>2%</Text>
          <Text style={{ margin: 2 }} s>
            Since Yesterday
          </Text>
        </View>
      </View>

      <View style={styles.chartcontainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.charttext}>OVERVIEW</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={150}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UsersScreen;

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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  charttext: {
    fontSize: 15,
  },
  dropdown: {
    width: 130,
    height: 23,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 4,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 16,
    padding: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  analyticcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
