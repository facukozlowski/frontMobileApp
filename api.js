const API = "http://10.64.8.3:3000/tasks";

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const getTaskById = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const createTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const updateTask = async (id, task) => {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { Accept: "appication/json", "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
};

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};
