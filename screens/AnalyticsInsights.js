import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AnalyticsInsights = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: "700" , fontSize:40 , padding:10 , margin:5}}>Insights</Text>
      
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",


        }}
      >
        <View style={{backgroundColor: "#FAF9F1", width:180, height:120 , borderRadius:15 ,padding:15,margin:9}}>
          <Image
            source={{ uri: "https://img.icons8.com/nolan/64/visible.png" }}
            style={{ width: 40, height: 40 }}
          />
          <Text
            onPress={() => {
              props.navigation.navigate("Views");
            }}
            style={{
              textAlign: "left",
              fontWeight: "600",
              fontSize:23
            }}
          >
            Views
          </Text>
        </View>
        <View style={{backgroundColor: "#FAF9F1", width:180, height:120 , borderRadius:15,padding:15,margin:9}}>
          <Image
            source={{ uri: "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/null/external-globe-due-diligence-icongeek26-outline-gradient-icongeek26.png" }}
            style={{ width: 40, height: 40 }}
          />
          <Text
            onPress={() => {
              props.navigation.navigate("Socials");
            }}
            style={{

              textAlign: "left",
              fontWeight: "600",
              fontSize:23,
            }}
          >
            Socials
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{backgroundColor: "#FAF9F1", width:180, height:120 , borderRadius:15,padding:15,margin:9}}>
          <Image
            source={{ uri: "https://img.icons8.com/nolan/64/groups.png" }}
            style={{ width: 40, height: 40 }}
          />
          <Text
            onPress={() => {
              props.navigation.navigate("Users");
            }}
            style={{
             
              textAlign: "left",
              fontWeight: "600",
              fontSize:23,
            }}
          >
            Users
          </Text>
        </View>

        <View style={{backgroundColor: "#FAF9F1", width:180, height:120 , borderRadius:15,padding:15,margin:9}}>
          <Image
            source={{ uri: "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/null/external-honey-farming-icongeek26-outline-gradient-icongeek26.png" }}
            style={{ width: 40, height: 40 }}
          />
          <Text
            onPress={() => {
              props.navigation.navigate("Posts");
            }}
            style={{
              textAlign: "left",
              fontWeight: "600",
              fontSize:23,
            }}
          >
            Posts
          </Text>
        </View>
      </View>
    </View>
   
  );
};

export default AnalyticsInsights;

const styles = StyleSheet.create({
    
});
