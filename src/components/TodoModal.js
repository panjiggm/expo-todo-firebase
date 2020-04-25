import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../../Colors";

const TodoModal = ({ list, closeModal }) => {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodos] = useState(list.todos);

  const taskCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const renderTodo = (todo) => (
    <View style={styles.todoContainer}>
      <TouchableOpacity>
        <Ionicons
          name={todo.completed ? "ios-square" : "ios-square-outline"}
          size={24}
          color={Colors.gray}
          style={{ width: 32 }}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.todo,
          {
            color: todo.completed ? Colors.gray : Colors.black,
            textDecorationLine: todo.completed ? "line-through" : "none",
          },
        ]}>
        {todo.title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ position: "absolute", top: 32, right: 32, zIndex: 10 }}
        onPress={closeModal}>
        <AntDesign name="close" size={24} color={Colors.black} />
      </TouchableOpacity>

      <View
        style={[styles.section, styles.header, { borderBottomColor: color }]}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.taskCount}>
            {completedCount} of {taskCount} tasks
          </Text>
        </View>
      </View>

      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={todos}
          renderItem={({ item }) => renderTodo(item)}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={[styles.section, styles.footer]} behavior="padding">
        <TextInput style={[styles.input, { borderColor: color }]} />
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: color }]}>
          <AntDesign name="plus" size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: Colors.gray,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    fontWeight: "700",
    color: Colors.black,
    fontSize: 16,
  },
});
