import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import TasksItems from "./TasksItems";
import { deleteTask, getTasks } from "../api";
import { useIsFocused } from "@react-navigation/native";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [isFocused]);

  const handleDelete = async (id) => {
    console.log(id);
    await deleteTask(id);
    await loadTasks();
  };

  const renderItem = ({ item }) => {
    return <TasksItems task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          colors={["green"]}
          progressBackgroundColor="#aaa"
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
}

export default TasksList;
