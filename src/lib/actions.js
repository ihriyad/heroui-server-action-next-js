"use server";
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async (formData) => {
  // const name = formData.get("name");
  const newTask = Object.fromEntries(formData.entries());
  console.log("here is form data:", formData);

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
};

export const createANewTask = async (formData) => {
  const newTask = Object.fromEntries(formData.entries());

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
    // redirect("/tasks");
  }
  return res;
};
