import React, { useContext, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  //   const { addBlogPost } = useContext(BlogContext);
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam("id")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 10
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10
  }
});

export default EditScreen;
