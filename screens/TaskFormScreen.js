import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  route,
} from "react-native";
import { createTask, getTaskById, updateTask } from "../api";

const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await createTask(task);
      } else {
        await updateTask(route.params.id, task);
      }
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({
        headerTitle: "Actualizar tarea",
      });
      setEditing(true);
      (async () => {
        const task = await getTaskById(route.params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor="#ddd"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="#ddd"
        onChangeText={(text) => handleChange("description", text)}
        value={task.description}
      />

      {!editing ? (
        <TouchableOpacity style={styles.btnStyle} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Guardar Tarea</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btnUpdate} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Guardar cambios</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    backgroundColor: "#338899",
    fontSize: 16,
    margin: 20,
    color: "white",
    borderWidth: 0.5,
    height: 40,
    textAlign: "center",
    padding: 4,
  },
  btnStyle: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    marginBottom: 3,
  },

  btnUpdate: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e24",
  },
});

export default TaskFormScreen;
