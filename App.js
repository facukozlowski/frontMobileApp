import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScren from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScren}
          options={({ navigation }) => ({
            title: "Tareas App",
            headerStyle: { backgroundColor: "#338899" },
            headerTitleStyle: { color: "white" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskFormScreen")}
              >
                <Text style={{ color: "white", marginRight: 20, fontSize: 15 }}>
                  Crear tarea
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: "Nueva Tarea",
            headerStyle: {
              backgroundColor: "#338899",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
