import {
  View,
  Text,
  SafeAreaView,
  TextInputBase,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Icon as Icon1 } from "react-native-vector-icons/Octicons";
import users from "../assets/data/users.json";

const Search = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        // justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ backgroundColor: "white", width: "100%" }}>
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
        <View style={{ flexDirection: "row", padding: 15 }}>
          <Icon name="search" size={30} color="grey" />
          <TextInput placeholder="Search..." />
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
            zIndex: 999999,
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
          <Icon name="search" size={30} color="grey" />
          <Icon name="plus-square" size={30} color="grey" />
          <Icon name="play" size={30} color="grey" />
          <Icon name="user" size={30} color="grey" />
          {/* <TextInput placeholder="Search..." /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
