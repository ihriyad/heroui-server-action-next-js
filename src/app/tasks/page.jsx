import { getTasks } from "@/lib/tasks";
import React from "react";
import Task from "./components/Task";
import { AddTasks } from "@/components/tasks/AddTasks";
import { createATask } from "@/lib/actions";
import Link from "next/link";
import { Button } from "@heroui/react";

const TasksPage = async () => {
  const data = await getTasks();
  const tasks = data.tasks;
  // console.log(tasks);
  return (
    <div>
      <p>Tasks to do:{tasks.length}</p>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
      </div>
      <div className="text-center mt-8">

      <AddTasks createATask={createATask}></AddTasks>
      </div>
      <Link href="/tasks/new">
      <Button variant="secondary">Add more task</Button>
      </Link>
    </div>
  );
};

export default TasksPage;
