import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "0",
    uri: "https://img.icons8.com/nolan/64/visible.png",
    title: "Views",
    key: "Views",
  },
  {
    id: "1",
    uri: "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/null/external-globe-due-diligence-icongeek26-outline-gradient-icongeek26.png",
    title: "Socials",
    key: "Socials",
  },
  {
    id: "2",
    uri: "https://img.icons8.com/nolan/64/groups.png",
    title: "Users",
    key: "Users",
  },
  {
    id: "3",
    uri: "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/null/external-globe-due-diligence-icongeek26-outline-gradient-icongeek26.png",
    title: "Posts",
    key: "Posts",
  },
];

const Analytics = () => {
  const navigate = useNavigation();

  const renderListItems = ({ item }) => {
    function onClickNavigate(key) {
      switch (key) {
        case "Views":
          navigation.navigate("Views");
          break;
        case "Posts":
          navigation.navigate("Posts");
          break;
        case "Socials":
          navigation.navigate("Socials");
          break;
        case "Users":
          navigation.navigate("Users");
          break;
      }
    }
    return (
      <View
        style={{
          backgroundColor: "#FFFFFF",
          width: 180,
          height: 120,
          borderRadius: 15,
          padding: 15,
          margin: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            onClickNavigate(item.key);
          }}
        >
          <Image source={{ uri: item.uri }} style={{ width: 40, height: 40 }} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Insights</Text>

      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderListItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
export default Analytics;
const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    fontSize: 40,
    padding: 10,
    margin: 5,
  },
  title: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 23,
  },
});
