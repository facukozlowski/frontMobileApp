import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TasksItems = ({ task, handleDelete }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskFormScreen", { id: task.id })}
      >
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemTitle}>{task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#911", padding: 6, borderRadius: 3 }}
        onPress={() => handleDelete(task.id)}
      >
        <Text style={{ color: "white" }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#356158",
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#338565",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "white",
  },
});

export default TasksItems;
