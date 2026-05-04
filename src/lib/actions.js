import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
  "use server";
  // const name = formData.get("name");
  const newTask = Object.fromEntries(formData.entries());
  console.log("here is form data:", formData);

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
};
