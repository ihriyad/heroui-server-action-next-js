import { getTasks } from "@/lib/tasks";
import React from "react";
import Task from "./components/Task";

const TasksPage = async () => {
  const data = await getTasks();
  const tasks = data.tasks;
  console.log(tasks);
  return (
    <div>
      <p>Tasks to do:{tasks.length}</p>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
