"use client";
import React from "react";
import {
  Button,
  Select,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { createANewTask } from "@/lib/actions";

const AddNewTaskPage = () => {
  return (
    <div className="text-center">
      <h1>Add a new Task</h1>
      <div className="flex justify-center items-center mt-5">
        <Form action={createANewTask} className="flex w-96 flex-col gap-4">
          <TextField
            isRequired
            name="title"
            type="text"
            validate={(value) => {
              if (value.length < 5) {
                return "Title must be at least more than 5 characters";
              }
              return null;
            }}
          >
            <Label>Title</Label>
            <Input placeholder="Enter your Task Name" />
            <FieldError />
          </TextField>
          <TextField className="w-full" name="description" type="text">
            <Label>Description</Label>
            <Input placeholder="Enter your Description" />
          </TextField>
          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="Pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="In-Progress">
                  In-Progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="Completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddNewTaskPage;
