import {
  View,
  Text,
  SafeAreaView,
  TextInputBase,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

import users from "../assets/data/users.json";
import instaImg from "../assets/images/instagram_text.jpg";
import messengerImg from "../assets/images/messenger_icon.jpg";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  console.log("aaaaa");

  const gotoSearch = () => {
    navigation.navigate("Search");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        // justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          // flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ height: 55, width: 180 }}>
          <Image style={{ height: "100%", width: "100%" }} source={instaImg} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="heart" size={30} color="grey" />
          <View style={{ height: 30, width: 30, marginLeft: 10 }}>
            <Image
              style={{ height: "100%", width: "100%" }}
              source={messengerImg}
            />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: "#d4b55f",
          height: 50,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Name</Text>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Username</Text>
        </View>
        {users.map((el, index) => (
          <View key={index} style={{ padding: 5 }}>
            <View
              key={`${index}_container`}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text key={`${index}_name`} style={{ fontSize: 20 }}>
                {el.displayName}
              </Text>
              <Text key={`${index}_uname`} style={{ fontSize: 20 }}>
                {el.name}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <View
          style={{
            height: "auto",

            color: "red",
            width: "100%",
            zIndex: 9,
          }}
        >
          {/* <Text
          style={{
              backgroundColor: "white",
              // justifyContent: "flex-start",
              // alignItems: "flex-start",
            }}
            >
            Home
        </Text> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
          }}
        >
          <Icon name="home" size={30} color="grey" />
          <Icon name="search" onPress={gotoSearch} size={30} color="grey" />
          <Icon name="plus-square" size={30} color="grey" />
          <Icon name="play" size={30} color="grey" />
          <Icon name="user" size={30} color="grey" />
          {/* <TextInput placeholder="Search..." /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
