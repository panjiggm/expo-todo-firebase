import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Colors";

const bgColor = [
  "#5cd859",
  "#24a6d9",
  "#595bd9",
  "#8022d9",
  "#d159d8",
  "#d85693",
  "#d88559",
];

const AddListModal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [pickColor, setColor] = useState(bgColor[0]);

  const RenderColor = () => {
    return bgColor.map((color) => (
      <TouchableOpacity
        key={color}
        style={[styles.colorSelect, { backgroundColor: color }]}
        onPress={() => setColor(color)}
      />
    ));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        style={{ position: "absolute", top: 32, right: 32 }}
        onPress={closeModal}>
        <AntDesign name="close" size={24} color={Colors.black} />
      </TouchableOpacity>

      <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Create Todo List</Text>

        <TextInput
          style={styles.input}
          placeholder="List Name?"
          onChangeText={(text) => setName(text)}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}>
          {bgColor.map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorSelect, { backgroundColor: color }]}
              onPress={() => setColor(color)}
            />
          ))}
          {/* <RenderColor /> */}
        </View>

        <TouchableOpacity
          style={[styles.create, { backgroundColor: pickColor }]}>
          <Text style={{ color: Colors.white, fontWeight: "700" }}>Create</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddListModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
